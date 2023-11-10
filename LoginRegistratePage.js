
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import axios from "axios";
import { useState, useEffect, useRef } from 'react';

async function getAllUser(){
	const {data} = await axios.get('http://localhost:3000/user');
	return data;
}

async function getUser(email,password){
	const {data} = await axios.get("http://localhost:3000/user/getUser/"+email+"&"+password);
	return data;
}

export function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState("");
	return (
		<View style={styles.container_global}> 
			<View style={styles.container_form}>
				<Text style={styles.text}>Giggle</Text>
				<Text style={styles.text}>Input your email</Text>
				<TextInput style={styles.input} onChangeText={setEmail} value={email}/>
				<Text style={styles.text}>Input your password</Text>
				<TextInput style={styles.input} onChangeText={setPassword} value={password}/>
				<Button title="Log In"  onPress={async () => setUser(await getUser(email,password))}/>
			</View>
			
			<View style={styles.container_form}>
				<Text style={styles.text}>Email: {email}</Text>
				<Text style={styles.text}>Password: {password}</Text>
				<Text style={styles.text}>User name: {user["firstName"]} {user["lastName"]}</Text>
			</View>
		</View>
	);
}

async function addUser(firstName,lastName,email,password){
	// const {data} = await axios.post("http://localhost:3000/user/getUser/"+email+"&"+password);
	// return data["firstName"];
}

export function Registrate() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<View style={styles.container_global}> 
			<View style={styles.container_form}>
				<Text style={styles.text}>Giggle</Text>
				<Text style={styles.text}>Input your first name</Text>
				<TextInput style={styles.input} onChangeText={setFirstName} value={firstName}/>
				<Text style={styles.text}>Input your second name</Text>
				<TextInput style={styles.input} onChangeText={setLastName} value={lastName}/>
				<Text style={styles.text}>Create your email</Text>
				<TextInput style={styles.input} onChangeText={setEmail} value={email}/>
				<Text style={styles.text}>Create your password</Text>
				<TextInput style={styles.input} onChangeText={setPassword} value={password}/>
				<Button title="Registrate"  onPress={async () => setUser(await addUser(firstName,lastName,email,password))}/>
			</View>
			
			<View style={styles.container_form}>
				<Text style={styles.text}>Name: {firstName} {lastName}</Text>
				<Text style={styles.text}>Email: {email}</Text>
				<Text style={styles.text}>Password: {password}</Text>
			</View>
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
