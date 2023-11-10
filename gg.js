


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import axios from "axios";
import { useState, useEffect, useRef } from 'react';

async function hello(){
	const {data} = await axios.get('http://localhost:3000');
	console.log(data);
	return data;
}

async function getAllUser(){
	const {data} = await axios.get('http://localhost:3000/user');
	console.log(data);
	return data;
}

// export default function App() {
export function Login() {
	console.log("gg");
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [counter, setCounter] = useState(0);
	const [message, setMessage] = useState("hi");
	const [arrayUser, setArrayUser] = useState([]);

	return (
		<View style={styles.container_global}> 
			<View style={styles.container_form}>
				<Text style={styles.text}>Google</Text>
				<Text style={styles.text}>Input your login</Text>
				<TextInput style={styles.input} onChangeText={setLogin} value={login}/>
				<Text style={styles.text}>Input your password</Text>
				<TextInput style={styles.input} onChangeText={setPassword} value={password}/>
				<Button title="Log In"  onPress={async () => setArrayUser(await getAllUser())}/>
			</View>
			
			<View style={styles.container_form}>
				<Text style={styles.text}>Login: {login}</Text>
				<Text style={styles.text}>Password: {password}</Text>
				<Text style={styles.text}>Hello, {message}</Text>
			</View>
			{/* <View style={styles.container_form}>
				<Text style={styles.text}>Array user:</Text>
				{ arrayUser.map((user) => <Text style={styles.text}>{ user.firstName}</Text>) }
			</View> */}
		</View>
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









	
	// useEffect(() => {
	// 	const gg = async () => setMessage(await hello(counter));
	// 	gg();
	// },[counter]);
	
	// return (
	// <View>
	// 	<Button title="+" onPress={() => setCounter(counter+1)}/>
	// 	<Button title="hi" onPress={async () => setMessage(await hello(counter))}/>
	// 	<Text>{counter}</Text>
	// 	<Text>{message}</Text>
	// </View>
	// );
