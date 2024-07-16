
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectLogin from '../Auth/SelectLogin';
import Login from '../Auth/Login';
import Taps from '../Taps/Taps';
import ChatScreen from '../Taps/Chat';
import Onboarding from '../../Components/Onboarding';
import ForgetPassword from '../Auth/ForgetPassword';
import Register from '../Auth/Register';
import ProfileScreen from '../Auth/Profile';
import AudioRoom from './Room/AudioRoom';


const Stack = createNativeStackNavigator();
function IndexStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='onboarding'>
            <Stack.Screen name="onboarding" component={Onboarding} />
            <Stack.Screen name="selectLogin" component={SelectLogin} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen name="forgetPassword" component={ForgetPassword} />


            <Stack.Screen name="taps" component={Taps} />
            <Stack.Screen name="chatScreen" component={ChatScreen} />
            <Stack.Screen name="profileScreen" component={ProfileScreen} />
            <Stack.Screen name="audioRoom" component={AudioRoom} />

        </Stack.Navigator>
    );
}

export default IndexStack;