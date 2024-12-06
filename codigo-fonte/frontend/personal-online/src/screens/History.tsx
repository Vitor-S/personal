import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";
import { getUserHistory } from "@services/userServices";
import { Heading, VStack, SectionList, Text } from "native-base";
import { useEffect, useState, useContext } from "react";
import AuthContext from '../context/authContext';
export function History() {
    const { userToken, userId } = useContext(AuthContext);
    const [history, setHistory] = useState()
    const [exercises, setExercises] = useState([
        {
            title: "23.09.2024",
            data: ["TREINO A"],
        },
        {
            title: "24.09.2024",
            data: ["TREINO B"],
        },
    ]);
    useEffect(() => {
        const fetchHistory = async () => {
            // Simulando a obtenção dos dados

            const [historys, programs] = await getUserHistory(userId, userToken)

            const groupedByDate = historys.reduce((acc, history) => {
                const date = new Date(history.data).toISOString().split("T")[0]; // Formata a data para YYYY-MM-DD

                // Encontrar o treino e programa correspondentes
                const workoutDetails = programs
                    .flatMap((program) =>
                        program.workouts.map((workout) => ({
                            programName: program.name,
                            workoutName: workout.name,
                            workoutId: workout._id
                        }))
                    )
                    .find((workout) => workout.workoutId === history.workoutId);

                // Criar o histórico detalhado
                const historyDetails = {
                    _id: history._id,
                    workoutName: workoutDetails ? workoutDetails.workoutName : "",
                    programName: workoutDetails ? workoutDetails.programName : ""
                };

                // Adicionar à data correspondente
                if (!acc[date]) {
                    acc[date] = [];
                }
                acc[date].push(historyDetails);

                return acc;
            }, {});

            // Transformar em array no formato desejado
            const result = Object.entries(groupedByDate).map(([date, data]) => ({
                title: date,
                data
            }));

            setHistory(result); // Atualizando o estado com os dados formatados
        };

        fetchHistory();
    }, []);
    return (
        <VStack flex={1}>
            {history && history.length > 0 ? (
                <SectionList
                    sections={history} // Usando o 'history' como fonte de dados
                    keyExtractor={(item, index) => `${item._id}-${index}`} // A chave única agora é o _id
                    renderItem={({ item }) => (
                        <HistoryCard
                            _id={item._id}
                            workoutName={item.workoutName}
                            programName={item.programName}
                        />
                    )}
                    renderSectionHeader={({ section }) => (
                        <Heading
                            color="gray.200"
                            fontSize="md"
                            fontFamily="heading"
                            mt={5}
                        >
                            {section.title}
                        </Heading>
                    )}
                    px={5}
                    contentContainerStyle={history.length === 0 && { flex: 1, justifyContent: "center" }}
                    ListEmptyComponent={() => (
                        <Text color="gray.100" textAlign="center">
                            Não há treinos registrados ainda. {"\n"} Vamos treinar hoje?
                        </Text>
                    )}
                />
            ) : (
                <Text color="gray.100" textAlign="center">
                    Carregando histórico...
                </Text>
            )}
        </VStack>
    );
}

