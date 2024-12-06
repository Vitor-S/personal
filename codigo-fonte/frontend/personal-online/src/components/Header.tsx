import { useContext, useEffect, useState } from "react";
import AuthContext from "src/context/authContext";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Heading, HStack, VStack, Icon, Avatar, Text } from "native-base";
import { Feather } from '@expo/vector-icons';
import { getUserById } from "@services/userServices";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
    const { signed, userId, setSigned } = useContext(AuthContext);

    const [userData, setUserData] = useState({});

    const navigation = useNavigation()

    useEffect(() => {
        getUserById(userId)
            .then((res) => {
                setUserData(res.data.user);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [userId]);

    return (
        <HStack backgroundColor="#032243" height={100} px={5} style={{ gap: 5 }} alignItems="center" >
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Icon as={Feather} name="arrow-left" color="gray.200" size={6} />
            </TouchableOpacity>

            <Avatar bg="#426ae3" size="sm">
                <Text fontWeight="semibold" color="#FFF" >
                    {userData.name && userData.name[0]}                    
                </Text>
            </Avatar>


            <VStack flex={1}>
                <Heading color="gray.200" fontSize="md" fontFamily="heading">
                    Olá, {userData && userData.name}
                </Heading>
            </VStack>

            <TouchableOpacity onPress={() => setSigned(false)}>
                <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
            </TouchableOpacity>
        </HStack>
    );
}
