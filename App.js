


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import axios from "axios";
import { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Registrate } from "./LoginRegistratePage";


const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
	return (
		<View>
			{/* <Button title="Go to Jane's profile" onPress={() => navigation.navigate('Profile', {name: 'Jane'})}/> */}
			<Button title="Login" onPress={() => navigation.navigate('Login')}/>
			<Button title="Registrate" onPress={() => navigation.navigate('Registrate')}/>
		</View>
	);
};

const ProfileScreen = ({navigation, route}) => {
	return <Text>This is {route.params.name}'s profile</Text>;
};

export default function App() {
	return(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} options={{title: 'Welcome'}}/>
				<Stack.Screen name="Profile" component={ProfileScreen}/>
				<Stack.Screen name="Login" component={Login}/>
				<Stack.Screen name="Registrate" component={Registrate}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}


const styles = StyleSheet.create({
	container_global: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#eee',
	},
	container_form: {
		gap: 5,
		borderColor: '#aaa',
		borderRadius: 10,
		borderWidth: 1,
		backgroundColor: '#fff',
		padding: 25,
		margin: 25
	},
	text: {
		textAlign: 'center',
	},
	input: {
		height: 40,
		borderWidth: 1,
		paddingHorizontal: 15,
	},
	
});
