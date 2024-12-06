import { userupdate } from "@services/userServices";

import { useContext, useState } from "react";
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
import AuthContext from "src/context/authContext";

const PHOTO_SIZE = 33;

const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Nome é obrigatório"),
    telefone: Yup.string()
        .required("Telefone é obrigatório"),
    senhaAntiga: Yup.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    novaSenha: Yup.string().min(
        6,
        "A nova senha deve ter pelo menos 6 caracteres"
    ),
    confirmeNovaSenha: Yup.string()
        .oneOf([Yup.ref("novaSenha"), ""], "As senhas não coincidem")
        .min(6, "A confirmação da senha deve ter pelo menos 6 caracteres"),
});

export function Profile() {
    const [photoIsLoading, setPhotoIsLoading] = useState(false);
    const { userToken, userId } = useContext(AuthContext);

    return (
        <Formik
            initialValues={{
                nome: "",
                telefone: "",
                senhaAntiga: "",
                novaSenha: "",
                confirmeNovaSenha: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                userupdate(
                    userId,
                    values.nome,
                    values.telefone,
                    values.novaSenha,
                    values.confirmeNovaSenha,
                    userToken
                )
                    .then((res) => alert(res.message))
                    .catch((err) => alert(err.message));
            }}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
            }) => (
                <VStack flex={1} bg="#121214">
                    <ScrollView p={5} contentContainerStyle={{ gap: 10 }}>
                        <Center>
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
                                >
                                    Alterar Foto
                                </Text>
                            </TouchableOpacity>
                        </Center>

                        <Input
                            bg="gray.600"
                            placeholder="Nome"
                            onChangeText={handleChange("nome")}
                            onBlur={handleBlur("nome")}
                            value={values.nome}
                            isInvalid={!!(errors.nome && touched.nome)}
                        />
                        {errors.nome && touched.nome && (
                            <Text color="red.500">{errors.nome}</Text>
                        )}

                        <Input
                            bg="gray.600"
                            placeholder="(99) 99999-9999"
                            onChangeText={handleChange("telefone")}
                            onBlur={handleBlur("telefone")}
                            value={values.telefone}
                            isInvalid={!!(errors.telefone && touched.telefone)}
                        />
                        {errors.telefone && touched.telefone && (
                            <Text color="red.500">{errors.telefone}</Text>
                        )}

                        <Heading
                            color="gray.200"
                            fontSize="md"
                            fontFamily="heading"
                        >
                            Alterar senha
                        </Heading>

                        <Input
                            bg="gray.600"
                            placeholder="Senha antiga"
                            secureTextEntry
                            onChangeText={handleChange("senhaAntiga")}
                            onBlur={handleBlur("senhaAntiga")}
                            value={values.senhaAntiga}
                            isInvalid={!!(errors.senhaAntiga && touched.senhaAntiga)}
                        />
                        {errors.senhaAntiga && touched.senhaAntiga && (
                            <Text color="red.500">{errors.senhaAntiga}</Text>
                        )}

                        <Input
                            bg="gray.600"
                            placeholder="Nova senha"
                            secureTextEntry
                            onChangeText={handleChange("novaSenha")}
                            onBlur={handleBlur("novaSenha")}
                            value={values.novaSenha}
                            isInvalid={!!(errors.novaSenha && touched.novaSenha)}
                        />
                        {errors.novaSenha && touched.novaSenha && (
                            <Text color="red.500">{errors.novaSenha}</Text>
                        )}

                        <Input
                            bg="gray.600"
                            placeholder="Confirme a nova senha"
                            secureTextEntry
                            onChangeText={handleChange("confirmeNovaSenha")}
                            onBlur={handleBlur("confirmeNovaSenha")}
                            value={values.confirmeNovaSenha}
                            isInvalid={
                                !!(errors.confirmeNovaSenha && touched.confirmeNovaSenha)
                            }
                        />
                        {errors.confirmeNovaSenha && touched.confirmeNovaSenha && (
                            <Text color="red.500">{errors.confirmeNovaSenha}</Text>
                        )}

                        <Center>
                            <Button
                                title="Atualizar"
                                mt={4}
                                onPress={() => handleSubmit()}
                            />
                        </Center>
                    </ScrollView>
                </VStack>
            )
            }
        </Formik >
    );
}
