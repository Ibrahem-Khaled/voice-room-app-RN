import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexStack from './Screen/IndexStack';

const Root = createNativeStackNavigator();

export default function IndexNav() {
    return (
        <NavigationContainer>
            <IndexStack />
        </NavigationContainer>
    );
}