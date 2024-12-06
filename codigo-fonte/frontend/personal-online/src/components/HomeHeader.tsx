import { useContext, useEffect, useState } from "react";
import AuthContext from "src/context/authContext";
import { TouchableOpacity } from "react-native";
import { Heading, HStack, VStack, Text, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import { Feather, Ionicons } from '@expo/vector-icons';

import { UserPhoto } from "./UserPhoto";

import { getUserById } from "@services/userServices";

export function HomeHeader() {
    const { signed, userId, setSigned } = useContext(AuthContext);

    const [userData, setUserData] = useState({});

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
        <HStack backgroundColor="#032243" pt={10} pb={2} px={5} marginBottom={10} alignItems="center">
            <TouchableOpacity >
                <Icon as={Feather} name="arrow-left" color="gray.200" size={6} />
            </TouchableOpacity>

            <UserPhoto
                source={{
                    uri: userData && userData.avatar ? userData.avatar : undefined,
                }}
                alt="Imagem do usuário"
                size={16}
                mr={4}
            />

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
