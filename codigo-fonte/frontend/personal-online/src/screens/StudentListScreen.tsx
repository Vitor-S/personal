import React, { useState } from 'react';
import { VStack, HStack, Input, IconButton, Icon, FlatList, Box, Text, Button, Avatar, Heading, Pressable } from 'native-base';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function StudentListScreen()
const [exercises, students] = useState(['Aluno 1', 'Aluno 2', 'Aluno 3', 'Aluno 4']);

// Função para abrir detalhes do aluno
const handleStudentDetails = (student) => {
    // Navega para a tela de detalhes do aluno
    navigation.navigate('StudentDetails', { student });
};

return (
    <VStack flex={1} bg="blueGray.900">
        {/* Header */}
        <HStack justifyContent="space-between" alignItems="center" p={4} bg="blueGray.800">
            <HStack alignItems="center">
                <Avatar
                    size="md"
                    source={{ uri: 'https://github.com/rafabelisario.png' }} // Substitua pelo link da imagem do perfil
                />
                <VStack ml={3}>
                    <Text color="gray.100" fontSize="sm">Olá,</Text>
                    <Heading color="gray.100" fontSize="md">Administrador</Heading>
                </VStack>
            </HStack>
            <IconButton
                icon={<Icon as={Feather} name="log-out" color="gray.100" size="sm" />}
                onPress={() => console.log('Logout')} // Adionar funcionalidade de logout aqui :D
            />
        </HStack>

        {/* Campo de Pesquisa */}
        <HStack px={4} py={2} alignItems="center" bg="blueGray.900">
            <Input
                placeholder="Pesquisar Aluno"
                variant="filled"
                width="85%"
                borderRadius="10"
                py="1"
                px="3"
                borderWidth="0"
                InputLeftElement={<Icon as={Feather} name="search" size="sm" ml="2" color="gray.400" />}
                onChangeText={(value) => setSearch(value)}
            />
        </HStack>

        {/* Lista de Alunos */}
        <FlatList
            data={students.filter((student) =>
                student.name.toLowerCase().includes(search.toLowerCase())
            )}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Pressable onPress={() => handleStudentDetails(item)}>
                    <Box bg="blueGray.800" px={5} py={3} mb={2} borderRadius="10" mx={4}>
                        <HStack justifyContent="space-between" alignItems="center">
                            <Text color="gray.200" fontSize="lg">{item.name}</Text>
                            <Icon as={FontAwesome5} name="chevron-right" color="gray.400" />
                        </HStack>
                    </Box>
                </Pressable>
            )}
            showsVerticalScrollIndicator={false}
        />

        {/* Botão Cadastrar Aluno */}
        <Button
            mt={5}
            mb={10}
            mx={4}
            bg="gray.100"
            _text={{ color: 'blueGray.900', fontWeight: 'bold' }}
            onPress={() => navigation.navigate('StudentRegister')}
        >
            Cadastrar Aluno
        </Button>

        {/* Barra de Navegação Inferior */}
        <HStack bg="blueGray.800" py={3} justifyContent="space-around" alignItems="center">
            <IconButton icon={<Icon as={FontAwesome5} name="home" size="sm" color="gray.200" />} />
            <IconButton icon={<Icon as={FontAwesome5} name="redo" size="sm" color="gray.200" />} />
            <IconButton icon={<Icon as={FontAwesome5} name="user" size="sm" color="gray.200" />} />
        </HStack>
    </VStack>
);
