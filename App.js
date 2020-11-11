import React from 'react';
import { StyleSheet, View, Text, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';


import SignInScreen from './src/components/SignIn';
import ProfileScreen from './src/components/Profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignInScreen} />
        <Stack.Screen options={{headerShown: false}} name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
    );
};

const styles = StyleSheet.create({
});

export default MyStack;

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}