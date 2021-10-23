import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View styles= {styles.container}>
      <View style={styles.textArea}>
      <Text style= {styles.text}>WELCOME TO SHOES UNIVERSE!</Text>
      </View>
      <View>
      <TextInput
          style={styles.usernameInput}
          placeholder="Enter your username"
        />

        <View style={styles.passwordArea} >
          <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 5,
            borderWidth: 0.7,
            paddingHorizontal: 60,
            alignItems: 'center',
          }}
          placeholder="Enter your password"
        />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  usernameInput: {
    padding: 15,
    borderRadius: 5,
    borderWidth: 0.7,
    paddingHorizontal: 60,
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 600,
    marginRight: 600,
    alignContent: 'center'

  },
  textArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,
  },
  passwordArea: {
    marginLeft: 600,
    marginRight: 600,
    alignContent: 'center'
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 50,
  }

});
