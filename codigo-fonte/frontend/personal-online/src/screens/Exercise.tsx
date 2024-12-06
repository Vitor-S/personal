import React, { useState, useEffect } from 'react';
import { HStack, Heading, Icon, Text, VStack, Image, Box, ScrollView } from 'native-base';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { Button } from '@components/Button';

import CheckSvg from '../assets/check.svg';
export function Exercise() {
    const navigation = useNavigation<AppNavigatorRoutesProps>();
    const route = useRoute();
    const exercise = route.params;


    useEffect(() => {
    }, []);

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <VStack flex={1}>

            <ScrollView>
                <VStack p={5}>
                    <Image
                        w="full"
                        h={80}
                        source={{ uri: exercise.demo }}
                        alt="Nome do exercício"
                        resizeMode="cover"
                        rounded="lg"
                    />

                    <Box bg="blueGray.800" rounded="md" p={5}>
                        <HStack>
                            <Icon as={Ionicons} name='barbell-outline' size={8} color='blue.300'></Icon>
                            <Text color="gray.200" ml="2" fontSize="25">
                                {exercise.series} Séries
                            </Text>
                        </HStack>

                        <HStack>
                            <Icon as={Ionicons} name='repeat-outline' size={8} color='blue.300'></Icon>
                            <Text color="gray.200" ml="2" fontSize="25">
                                {exercise.repetitions} Repetições
                            </Text>
                        </HStack>

                        <HStack>
                            <Icon as={Ionicons} name='alarm-outline' size={8} color='blue.300'></Icon>
                            <Text color="gray.200" ml="2" fontSize="25">
                                {exercise.restTime} {exercise.restTime === 1 ? 'Minuto' : 'Minutos'}
                            </Text>
                        </HStack>
                    </Box>
                </VStack>
            </ScrollView>
        </VStack>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
