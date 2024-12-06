import { useEffect, useState, useContext } from "react";
import {
    HStack,
    VStack,
    FlatList,
    Heading,
    Text,
    useNativeBase,
    Center,
    Box,
    Input,
    Icon,
} from "native-base";
import axios from "axios";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { ExerciseCard } from "@components/ExerciseCard";
import { HomeCard } from "@components/HomeCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ButtonApp } from "@components/ButtonApp";
import { Entypo, Ionicons, FontAwesome } from "@expo/vector-icons";
import AuthContext from "src/context/authContext";
import { URL_API } from '@env'

export function HomePersonal() {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]); // fixo
    const [users_filtered, setUsersFilter] = useState([]); //variavel
    const { userId } = useContext(AuthContext)

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleOpenAlunoDetails(id: any) {
        navigation.navigate('homeAluno', id);
    }

    function handleSubmit() {
        navigation.navigate('ClientRegistration')
    }

    const filtering = (string: String) => {
        setSearch(string)
        let array_clone = [...users];

        if (array_clone.length) {
            let res = array_clone.filter(item => item.name.toLowerCase().includes(string.toLowerCase()))
            setUsersFilter(res)
        }
    }

    useEffect(() => {
        async function getAlunos() {
            const response = await axios.get(`http://192.168.0.107:3333/users/admin/${userId}`);
            setUsers(response.data);
            setUsersFilter(response.data);
            console.log(response.data);
        }
        getAlunos();
    }, []);

    return (
        <VStack flex={1} p={5}>
            <VStack flex={1}>
                <Box>
                    <Input
                        placeholder="Pesquisar Aluno"
                        bg="#ffffff"
                        borderWidth={0}
                        borderRadius="sm"
                        color="white"
                        onChangeText={filtering}
                        value={search}
                        _focus={{ bg: "gray.600" }}
                        h={10}
                        InputRightElement={
                            <Icon
                                as={FontAwesome}
                                name="search"
                                size={5}
                                mr={3}
                                color="#29292e"
                            />
                        }
                    />
                </Box>

                <HStack justifyContent="space-between">
                    <Heading color="gray.200" fontSize="md" fontFamily="heading" py={3}>
                        Alunos
                    </Heading>

                    <Text color="gray.200" fontSize="sm">
                        {users_filtered.length}
                    </Text>
                </HStack>

                <FlatList
                    data={users_filtered}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <HomeCard
                            cardName={item.name}
                            data={item}
                            onPress={() => handleOpenAlunoDetails(item._id)}
                            padding={2}
                            key={item._id}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />

                <ButtonApp
                    title="Cadastrar Aluno"
                    bg="#ffffff"
                    _text={{ color: "#121214" }}
                    onPress={() => handleSubmit()} /*Ir pra tela de cadastro de alunos*/
                    w='full'
                    h={12}
                />
            </VStack>
        </VStack>
    );
}
