import { Platform } from "react-native";
import { useTheme } from "native-base";
import { useContext } from "react";
import AuthContext from "../context/authContext";
import {
    createBottomTabNavigator,
    BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import HomeSvg from "@assets/Home.svg";
import HistorySvg from "@assets/history.svg";
import ProfileSvg from "@assets/profile.svg";

import { Home } from "@screens/Home";
import { HomePersonal } from "@screens/HomePersonal";
import { ClientRegistration } from "@screens/ClientRegistration";
//import { HomeAluno } from "@screens/HomeAluno";
import { Workout } from "@screens/Workout";
import { WorkoutRegistration } from "@screens/WorkoutRegistration";
import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Profile } from "@screens/Profile";
import { Program } from "@screens/program";

import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/Header";


type AppRoutes = {
    home: undefined;
    // HomeAluno: undefined;
    ClientRegistration: undefined;
    program: undefined;
    exercise: undefined;
    history: undefined;
    profile: undefined;
    workout: undefined;
    homeAluno: undefined;
    workoutRegistration: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();
const Stack = createStackNavigator();

function HomePersonalStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
                name="home"
                component={HomePersonal}
            />

            <Stack.Screen
                name="homeAluno"
                component={Home}
            />

            <Stack.Screen
                name="program"
                component={Program}
            />

            <Screen
                name="ClientRegistration"
                component={ClientRegistration}
            />

            <Screen
                name="workoutRegistration"
                component={WorkoutRegistration}
            />
        </Stack.Navigator>
    )
}

function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
                name="home"
                component={Home}
            />

            <Stack.Screen
                name="exercise"
                component={Exercise}
            />

            <Stack.Screen
                name="program"
                component={Program}
            />

            <Stack.Screen
                name="workout"
                component={Workout}
            />
        </Stack.Navigator>
    )
}

export function AppRoutes() {
    const { sizes, colors } = useTheme();

    const iconSize = sizes[7];

    const { userType } = useContext(AuthContext);

    return (
        <Navigator
            screenOptions={{
                header: () => <Header />,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.blue[300],
                tabBarInactiveTintColor: colors.gray[200],
                tabBarStyle: {
                    backgroundColor: "#032243",
                    borderTopWidth: 0,
                    height: Platform.OS === "android" ? "auto" : 96,
                    paddingBottom: sizes[10],
                    paddingTop: sizes[10],
                },
            }}
        >
            {userType == "admin" ? (
                <Screen
                    name="home"
                    component={HomePersonalStack}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <HomeSvg fill={color} width={iconSize} height={iconSize} />
                        ),
                    }}
                />
            ) : (
                <Screen
                    name="home"
                    component={HomeStack}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <HomeSvg fill={color} width={iconSize} height={iconSize} />
                        ),
                    }}
                />
            )}

            <Screen
                name="history"
                component={History}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HistorySvg fill={color} width={iconSize} height={iconSize} />
                    ),
                }}
            />

            <Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <ProfileSvg fill={color} width={iconSize} height={iconSize} />
                    ),
                }}
            />
        </Navigator>
    );
}
