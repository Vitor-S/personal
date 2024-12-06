import { useEffect, useState, useContext } from "react";
import { HStack, VStack, FlatList, Heading, Text, Center } from "native-base";
import { Button } from "@components/Button";
import axios from "axios";
import { HomeHeader } from "@components/HomeHeader";
import { HomeCard } from "@components/HomeCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useRoute } from "@react-navigation/native";
import AuthContext from "src/context/authContext";
import { URL_API } from '@env'


export function Home() {
    const route = useRoute();
    let idUserFromRoute = route.params as any; // acessa os parâmetros passados pelo homePersonal (se existir)

    let { userId, userType } = useContext(AuthContext); // obtém o userId do contexto de autenticação
    const [programs, setPrograms] = useState([]); // inicializa com um array vazio
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    if (idUserFromRoute) {
        userId = idUserFromRoute;
    }

    function handleOpenProgram(item) {
        navigation.navigate("program", {
            _id: item._id,
            name: item.name,
            workoutsRoute: item.workouts,
            onUpdateProgram: updateProgram
        });
    }

    /**
     * callback para atualizar programa com novo workout
     * @param updatedProgram 
     */
    function updateProgram(updatedProgram: object) {
        setPrograms(prevPrograms => {
            const updatedPrograms = prevPrograms.map(p =>
                p._id === updatedProgram._id ? updatedProgram : p
            );
            return updatedPrograms;
        });
    }

    // clique no botao Novo Programa
    async function handleCreateProgram() {
        try {
            const response = await axios.post(`http://192.168.0.107:3333/programs/register`, {
                user_id: userId,
                program: {
                    name: "",

                }
            });
            setPrograms([...programs, response.data]);
            navigation.navigate("program", {
                name: '',
                _id: response.data._id,
                workoutsRoute: [],
                onUpdateProgram: updateProgram
            });

        } catch (error) {
            console.error("Erro ao criar programas: ", error);
        }
    }


    async function handleDeleteProgram(program_id) {
        try {
            const response = await axios.put(`http://192.168.0.107:3333/delete_program`, {
                program_id: program_id,
                user_id: userId
            });

            setPrograms((prevPrograms) =>
                prevPrograms.filter((program) => program._id !== program_id)
            );

        } catch (error) {
            console.error("Erro ao editar programa: ", error);
        }
    }

    useEffect(() => {
        async function getProgram() {
            try {
                const response = await axios.get(`http://192.168.0.107:3333/users/${userId}`);
                let programs = response.data.user?.programs || [];
                setPrograms(programs);

            } catch (error) {
                console.error("Erro ao buscar programas:", error);
            }
        }

        getProgram();
    }, [userId]);

    return (
        <VStack flex={1} bg="gray.900">
            <VStack flex={1} p={5} style={{gap: 5}}>
                <HStack justifyContent="space-between">
                    <Heading color="gray.200" fontSize="md" fontFamily="heading">
                        Programas
                    </Heading>
                    <Text color="gray.200" fontSize="sm">
                        {programs.length} Programas
                    </Text>
                </HStack>

                <FlatList
                    data={programs}
                    keyExtractor={(item) => item._id} // garante uma chave única para cada programa
                    renderItem={({ item }) => (
                        <HomeCard
                            onPress={() => handleOpenProgram(item)}
                            cardName={item.name}
                            cardSub={item.workouts.length}
                            sufix={item.workouts.length === 1 ? "Treino" : "Treinos"}
                            callbackPressTrash={() => handleDeleteProgram(item._id)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />
                {userType === 'admin' &&
                    <Center><Button title="Cadastrar programa" bgColor='white' textcolor='black' onPress={() => handleCreateProgram()} /></Center>
                }
            </VStack>
        </VStack>
    );
}
