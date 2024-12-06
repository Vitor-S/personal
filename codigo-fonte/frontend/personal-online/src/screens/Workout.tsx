import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { TouchableOpacity, View } from "react-native";
import { VStack, HStack, Text, Icon, ScrollView, Input, Box, FlatList, Center, Heading, DeleteIcon } from "native-base";
import { useNavigation, useRoute } from '@react-navigation/native';
import { HomeCard } from "@components/HomeCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Button } from "@components/Button";
import { Feather, Entypo, Ionicons } from "@expo/vector-icons";

import { URL_API } from '@env'
import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { color } from "native-base/lib/typescript/theme/styled-system";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { updateHistory } from "../services/userServices"

import AuthContext from "src/context/authContext";


export function Workout() {
    const { userType, userId, userToken } = useContext(AuthContext);
    const navigation = useNavigation<AppNavigatorRoutesProps>();
    const route = useRoute();
    const { program_id, workout_id, name, exercisesRoute, onUpdateWorkout } = route.params as any
    const [workoutName, setworkoutName] = useState(name);
    const [exercises, setExercises] = useState(exercisesRoute);

    async function handleDone() {
        try {
            await updateHistory(userToken, program_id, workout_id)
            alert("ok")
        } catch (error) {
            alert("erro")
        }
    }

    /**
     * Callback para ser chamado ao adicionar um evento em WorkoutRegistration
     * @param exe
     */
    const onAddExercise = (exe) => {
        setExercises((prevExercises) => {
            const updatedExercises = [...prevExercises, exe];
            onUpdateWorkout({
                _id: workout_id,
                name: workoutName,
                exercises: updatedExercises,
            });
            return updatedExercises;
        });
    };

    // clique no botao de adicionar exercicios
    const handleAddExercises = () => {
        let exercises_id = {};
        for (let e in exercises) {
            exercises_id[exercises[e]._id] = true;
        }
        navigation.navigate('workoutRegistration', {
            program_id, workout_id, exercises_id, workoutName, onAddExercise
        });
    }

    /**
     * clique no botao salvar treino
     */
    const handleSaveWorkout = async () => {
        try {
            const response = await axios.put(`${URL_API}/workout`, {
                workout: {
                    name: workoutName,
                    exercises: exercises
                },
                workout_id: workout_id,
                program_id: program_id,
                user_id: userId
            });
            onUpdateWorkout({
                _id: workout_id,
                name: workoutName,
                exercises: exercises
            })
            navigation.navigate('home');

        } catch (error) {
            console.error("Erro ao editar programa: ", error);
        }
    }

    // clique no card de exercicio
    const handleExerciseDetail = (item) => {
        navigation.navigate('exercise', item);
    }

    async function handleDeleteExercise(exe_id) {
        try {
            setExercises((prevExercises) =>
                prevExercises.filter((exe) => exe._id !== exe_id)
            );

            const response = await axios.put(`${URL_API}/workout`, {
                workout: {
                    name: workoutName,
                    exercises: exercises
                },
                workout_id: workout_id,
                program_id: program_id,
                user_id: userId
            });
            onUpdateWorkout({
                _id: workout_id,
                name: workoutName,
                exercises: exercises.filter((exe) => exe._id !== exe_id)
            })

        } catch (error) {
            console.error("Erro ao editar programa: ", error);
        }
    }

    useEffect(() => {
        setExercises(exercisesRoute);
        setworkoutName(name);
    }, [workout_id])

    return (
        <VStack flex={1} bg="#121214" p={5} style={{ gap: 5 }}>
            <HStack justifyContent="space-between">
                {userType === 'admin' ?
                    <Input
                        placeholder="Nome do treino"
                        value={workoutName}
                        onChangeText={setworkoutName}
                        bg="gray.700"
                        borderColor="gray.800"
                        placeholderTextColor="gray.300"
                        color="gray.200"
                        h={12}
                        fontSize={19}
                        _focus={{
                            bg: "gray.700",
                            borderColor: "gray.500"
                        }}
                    /> :
                    <Heading color="gray.200" fontSize="md" fontFamily="heading">
                        {workoutName}
                    </Heading>
                }

                {userType === 'admin' &&
                    <TouchableOpacity>
                        <Icon as={Feather} name="plus-circle" size="md" color="gray.100" onPress={() => handleAddExercises()} />
                    </TouchableOpacity>
                }
            </HStack>

            <ScrollView>
                <FlatList
                    data={exercises}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <HomeCard
                            cardName={item.name}
                            cardSub={`${item.series} ser. / ${item.repetitions} rep. / ${item.restTime} min.`}
                            onPress={() => handleExerciseDetail(item)}
                            callbackPressTrash={() => handleDeleteExercise(item._id)}
                        />
                    )}
                />

                {userType === 'aluno' ?
                    <Center>
                        <Button title="Marcar como realizado" mt={4} onPress={handleDone} />
                    </Center> :
                    <Center>
                        <Button title="Salvar treino" mt={4} onPress={() => handleSaveWorkout()} />
                    </Center>
                }

            </ScrollView>
        </VStack>
    );
}