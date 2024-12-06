import { Heading, HStack, VStack, Text, Icon } from "native-base";
import { useContext } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import AuthContext from "src/context/authContext";

interface HomeCardProps extends TouchableOpacityProps {
    cardName: string; // Novo: Nome do programa para o Heading
    cardSub: number; // Novo: Texto sobre o número de treinos
    sufix: string; //sufixo para ser usado após a string de cardSub
    padding: number;
    icons: object;
    callbackPressTrash: Function
}



export function HomeCard({ cardName, cardSub, sufix, padding = 4, icons, callbackPressTrash = () => { }, ...rest }: HomeCardProps) {
    const { userType } = useContext(AuthContext);
    function defaultIcons() {
        return (
            <>
                {userType === 'admin' &&
                    <TouchableOpacity>
                        <Icon as={Ionicons} name="trash" color="red.400" mr={5} onPress={() => callbackPressTrash()} />
                    </TouchableOpacity>
                }
                <TouchableOpacity>
                    <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
                </TouchableOpacity>
            </>
        )
    }

    if (!icons) {
        icons = defaultIcons();
    }

    return (
        <TouchableOpacity {...rest}>
            <HStack
                bg="gray.500"
                alignItems="center"
                p={padding}
                pr={4}
                rounded="md"
                mb={3}
            >
                <VStack flex={1}
                    margin={0}
                    ml={3}
                >
                    <Heading fontSize="md" color="white" fontFamily="heading" top={cardSub !== undefined ? 0 : 3}>
                        {cardName}
                    </Heading>

                    <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
                        {cardSub} {sufix}
                    </Text>
                </VStack>

                {icons}
            </HStack>
        </TouchableOpacity>
    );
}
