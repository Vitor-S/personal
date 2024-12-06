import { HStack, Heading, VStack, Text } from "native-base";

export function HistoryCard({ _id, workoutName, programName }) {
    return (
        <HStack w="full" px={5} py={4} my={2} bg="blueGray.800" rounded="md" alignItems="center" justifyContent="space-between" >
            <VStack flex={1}>
                <Heading color="white" fontSize="md" textTransform="capitalize" fontFamily="heading" numberOfLines={1}>
                    {workoutName || "Treino A"}
                </Heading>

                <Text color="gray.100" fontSize="lg" numberOfLines={1} >
                    {programName}
                </Text>
            </VStack>

            <Text color="gray.300" fontSize="md" >
                9:09
            </Text>
        </HStack>
    );
}