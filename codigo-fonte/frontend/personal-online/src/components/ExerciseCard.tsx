import { Heading, HStack, Image, VStack, Text, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
type Props = TouchableOpacityProps & {

};

export function ExerciseCard(data,{ ...rest }: Props) {
    const navigation = useNavigation();
    data = data.data;
    return (
        <TouchableOpacity onPress={() =>  navigation.navigate('exercise', {data:data})}>

            <HStack bg="blueGray.800" alignItems="center" p={2} pr={4} rounded="md" mb={3} >
                <Image 
                    source={{ uri : 'https://pratiquefitness.com.br/blog/wp-content/uploads/2023/07/Exercicio-puxada-beneficios-variacoes-e-como-fazer-2.jpg' }}
                    alt="Imagem do Exercício"
                    w={16}
                    h={16}
                    rounded="md"
                    mr={4}
                    resizeMode="cover"
                />

                <VStack flex={1}>
                    <Heading fontSize="lg" color="white" fontFamily="heading">
                       Puxada Frontal
                    </Heading>

                    <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2} >
                        4 séries x 10 repetições
                    </Text>
                </VStack>

                <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />

                
            </HStack>

        </TouchableOpacity>
    );
}