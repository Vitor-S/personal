import { useContext, useState } from 'react';
import { userlogin } from '../services/authServices';
import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import AuthContext from '../context/authContext'; // Corrigi o caminho do AuthContext

import Logo from "@assets/logo.png";
import BackgroundImg from "@assets/background.png";
import {URL_API} from '@env'

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
    const { signed, setSigned, setUserId, setUserType, setUserToken } = useContext(AuthContext);

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [aviso, setAviso] = useState('');

    function handleNewAccount() {
        navigation.navigate("signUp");
    }

    async function handleLogin(email: String, password: String) {
        try {
            const res = await userlogin(email, password);
            setUserType(res.data.usertype);
            setUserToken(res.data.token);
            setUserId(res.data.userId);
            setSigned(true);
        } catch (err) {
            const errorMessage = err?.response?.data?.message || 'Erro ao fazer login';
            setAviso(errorMessage);
            console.log(err, "Erro ao fazer login");
        }
    }

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <Image
                source={BackgroundImg}
                defaultSource={BackgroundImg}
                alt="Aparece na tela uma sala de treinamento de boxe com alguns sacos de boxe"
                resizeMode="cover"
                position="absolute"
                w='full'
            />
            <VStack flex={1} justifyContent="center" px={10}>
                <VStack space={3} mt={20}>
                    {aviso ? <Text color='#fc0313' py={1} bg="#00000095" rounded="lg" fontSize={18} fontWeight='semibold' textAlign='center'>{aviso}</Text> : null}

                    <Input
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Input
                        placeholder="Senha"
                        secureTextEntry
                        keyboardType="numbers-and-punctuation"
                        value={password}
                        onChangeText={setPassword}
                    />

                    <Button title="Acessar" onPress={() => handleLogin(email, password)} />
                </VStack>

                <VStack space={2}>
                    <Text color="gray.100" fontSize="sm" fontFamily="body" textAlign="center">
                        Ainda não tem acesso?
                    </Text>

                    <Button
                        title="Criar conta"
                        variant="outline"
                        onPress={handleNewAccount}
                    />
                </VStack>
            </VStack>
        </ScrollView>
    );
}
