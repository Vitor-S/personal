import { useEffect, useState, useContext } from 'react';
import { HStack, VStack, FlatList, Heading, Input, Text, useNativeBase, Center } from 'native-base';
import { HomeHeader } from '@components/HomeHeader';
import { HomeCard } from '@components/HomeCard';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Button } from "@components/Button";
import { useRoute } from '@react-navigation/native';
import AuthContext from "src/context/authContext";

export function Program() {

    const [workout, setWorkout] = useState([]);
    const route = useRoute();
    let { name, _id, workoutsRoute, onUpdateProgram } = route.params as any; // acessa os parâmetros passados
    const { userType, userId } = useContext(AuthContext);
    const navigation = useNavigation<AppNavigatorRoutesProps>();
    const [programName, setProgramName] = useState(name);

    // clique do card de um workout
    function handleOpenWorkout(workout: any) {
        navigation.navigate('workout', {
            name: workout.name,
            exercisesRoute: workout.exercises,
            workout_id: workout._id,
            program_id: _id,
            onUpdateWorkout: updateWorkout
        });
    }

    /**
     * callback para atualizar workout com novos numeros de exercicios
     * @param updatedWorkout
     */
    function updateWorkout(updatedWorkout: object) {
        setWorkout(prevWorkouts => {
            const updatedWorkouts = prevWorkouts.map(w =>
                w._id === updatedWorkout._id ? updatedWorkout : w
            );
            onUpdateProgram({
                _id: _id,
                name: programName,
                workouts: updatedWorkouts
            });
            return updatedWorkouts;
        });

    }

    // clique do botao Novo Treino
    async function handleNewWorkout() {
        try {
            const response = await axios.post(`http://192.168.0.107:3333/workout/register`, {
                workout: {
                    name: ""
                },
                program_id: _id,
                user_id: userId
            });
            setWorkout([...workout, response.data]);
            onUpdateProgram({
                _id: _id,
                name: programName,
                workouts: [...workout, response.data]
            });

        } catch (error) {
            console.error("Erro ao criar programas: ", error);
        }
    }

    // clique do botao salvar programa
    async function handleSaveProgram() {
        try {
            const response = await axios.put(`http://192.168.0.107:3333/programs`, {
                name: programName,
                program_id: _id,
                user_id: userId
            });
            onUpdateProgram({
                _id: _id,
                name: programName,
                workouts: workout
            });
            navigation.navigate("home");

        } catch (error) {
            console.error("Erro ao editar programa: ", error);
        }
    }

    /**
     * clique no icone de lixeira de programa
     * @param workout_id 
     */
    async function handleDeleteWorkout(workout_id) {
        try {
            const response = await axios.put(`http://192.168.0.107:3333/delete_workout`, {
                workout_id: workout_id,
                program_id: _id,
                user_id: userId
            });

            setWorkout((prevWorkouts) =>
                prevWorkouts.filter((workout) => workout._id !== workout_id)
            );
            onUpdateProgram({
                _id: _id,
                name: programName,
                workouts: workout.filter((workout) => workout._id !== workout_id)
            });

        } catch (error) {
            console.error("Erro ao editar programa: ", error);
        }
    }

    useEffect(() => {
        setWorkout(workoutsRoute)
        setProgramName(name)
    }, [workoutsRoute])

    return (
        <VStack flex={1}>
            <VStack flex={1} p={5} style={{ gap: 5 }}>
                <HStack justifyContent="space-between">
                    {userType === 'admin' ?
                        <Input
                            placeholder="Nome do programa"
                            value={programName}
                            onChangeText={setProgramName}
                            bg="gray.700"
                            borderColor="gray.800"
                            placeholderTextColor="gray.300"
                            color="gray.200"
                            h={12}
                            w='full'
                            fontSize={19}
                            _focus={{
                                bg: "gray.700",
                                borderColor: "gray.500"
                            }}
                        /> :
                        <Heading color="gray.200" fontSize="md" fontFamily="heading">
                            {programName}
                        </Heading>
                    }
                </HStack>


                {userType === 'admin' &&
                    <Center><Button title="Novo Treino" bgColor='white' textcolor='black' onPress={() => { handleNewWorkout() }} /></Center>
                }
                <FlatList
                    data={workout}
                    renderItem={({ item }) => (
                        <HomeCard
                            data={item}
                            cardName={item.name}
                            cardSub={item.exercises.length}
                            onPress={() => handleOpenWorkout(item)}
                            sufix={item.exercises.length === 1 ? "Exercício" : "Exercícios"}
                            callbackPressTrash={() => handleDeleteWorkout(item._id)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />
                {userType === 'admin' &&
                    <Center>
                        <Button title="Salvar Programa" bgColor='white' textcolor='black' onPress={() => { handleSaveProgram() }} />
                    </Center>
                }
            </VStack>
        </VStack>
    );
}