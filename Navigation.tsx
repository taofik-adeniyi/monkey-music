import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import Register from './screens/Register';
import Home from './screens/Home';

export function Navigation (){
    return (
        <NavigationContainer>
        <Stack.Navigator
            // screenOptions={{
            // header: ()=> null
            // }}
        >
        <Stack.Screen
          options={{ 
            header: ()=> null 
          }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
        </NavigationContainer>
    )
}