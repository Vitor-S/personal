import { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
    Center,
    ScrollView,
    VStack,
    Skeleton,
    Text,
    Heading,
} from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import { userRegister } from "../services/authServices";

const PHOTO_SIZE = 33;

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
    phone: Yup.string().matches(
        /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
        'Número de telefone inválido'
    ).required('Telefone é obrigatório'),
    password: Yup.string().min(6, 'A nova senha deve ter pelo menos 6 caracteres'),
    password_confirm: Yup.string()
        .oneOf([Yup.ref('novaSenha'), ''], 'As senhas não coincidem')
        .min(6, 'A confirmação da senha deve ter pelo menos 6 caracteres'),
});

export function ClientRegistration() {
    const [photoIsLoading, setPhotoIsLoading] = useState(false);

    return (
        <Formik
            initialValues={{ name: '', email: '', phone: '', password: '', password_confirm: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                // userRegister("aluno", values.name, values.email, values.phone, values.password, values.password_confirm)
                //     .then((res) => {
                //         console.log("Deu certo")
                //     })
                //     .catch((err) => {
                //         console.log("Deu ruim");
                //     });
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <VStack flex={1} bg="#121214">
                    <ScreenHeader title="Cadastrar Aluno" />
                    <ScrollView>
                        <Center mt={6} px={6}>
                            {photoIsLoading ? (
                                <Skeleton
                                    w={PHOTO_SIZE}
                                    h={PHOTO_SIZE}
                                    rounded="full"
                                    startColor="gray.500"
                                    endColor="gray.400"
                                />
                            ) : (
                                <UserPhoto
                                    source={{ uri: "https://github.com/rafabelisario.png" }}
                                    alt="Foto do usuário"
                                    size={PHOTO_SIZE}
                                />
                            )}
                            <TouchableOpacity>
                                <Text
                                    color="blue.500"
                                    fontWeight="bold"
                                    fontSize="md"
                                    mt={3}
                                    mb={8}
                                >
                                    Adicionar Foto
                                </Text>
                            </TouchableOpacity>

                            <Input
                                bg="gray.600"
                                placeholder="Nome"
                                onChangeText={handleChange('nome')}
                                onBlur={handleBlur('nome')}
                                value={values.name}
                                isInvalid={!!(errors.name && touched.name)}
                            />
                            {errors.name && touched.name && <Text color="red.500">{errors.name}</Text>}

                            <Input
                                bg="gray.600"
                                placeholder="E-mail"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                isInvalid={!!(errors.email && touched.email)}
                                isDisabled
                            />
                            {errors.email && touched.email && <Text color="red.500">{errors.email}</Text>}

                            <Input
                                bg="gray.600"
                                placeholder="(99) 99999-9999"
                                onChangeText={handleChange('telefone')}
                                onBlur={handleBlur('telefone')}
                                value={values.phone}
                                isInvalid={!!(errors.phone && touched.phone)}
                            />
                            {errors.phone && touched.phone && <Text color="red.500">{errors.phone}</Text>}
                        </Center>

                        <VStack px={6} mt={12} mb={9}>
                            <Heading color="gray.200" fontSize="md" fontFamily="heading" mb={2} pl={4}>
                                Alterar senha
                            </Heading>

                            <Input
                                bg="gray.600"
                                placeholder="Senha"
                                secureTextEntry
                                onChangeText={handleChange('senha')}
                                onBlur={handleBlur('senha')}
                                value={values.password}
                                isInvalid={!!(errors.password && touched.password)}
                            />
                            {errors.password && touched.password && <Text color="red.500">{errors.password}</Text>}

                            <Input
                                bg="gray.600"
                                placeholder="Confirme a senha"
                                secureTextEntry
                                onChangeText={handleChange('confirmeNovaSenha')}
                                onBlur={handleBlur('confirmeNovaSenha')}
                                value={values.password_confirm}
                                isInvalid={!!(errors.password_confirm && touched.password_confirm)}
                            />
                            {errors.password_confirm && touched.password_confirm && <Text color="red.500">{errors.password_confirm}</Text>}


                            <Center><Button title="Cadastrar" mt={4} onPress={() => handleSubmit()} /></Center>
                        </VStack>
                    </ScrollView>
                </VStack>
            )}
        </Formik>
    );
}
