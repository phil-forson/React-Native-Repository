import 'react-native-gesture-handler';
import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          transform: [{ rotate: "0deg" }],
          borderRadius: 20,
          marginBottom: 60,
          width: 200,
          height: 200,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyJTIwc2FsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        }}
      />
      <Text style={{ fontSize: 25, color: "red", fontWeight: 'bold'}}>Welcome to</Text>
      <Text style={{ fontSize: 35, fontWeight: "bold" }}>Your Dream Shop</Text>
      <View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
            marginTop: 10,
          }}
          placeholder="Enter your username"
        />
      </View> 
       <View style={{ marginTop: 10,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
            
          }}
          placeholder="Enter your password"
        />
      </View> 
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "red",
        }}
      >
        <Text style={{ paddingLeft: 5, color: "white" }}>Login</Text>
      </TouchableOpacity>
      <View style={{marginTop: 10, fontSize: 10, fontWeight: 'bold'}}>
      <Text>Don't have an account? <Text style={{color: 'red'}}
      onPress={() => Linking.openURL('http://google.com')}>
  Sign Up
</Text></Text>
      </View>
    </View>
  );
}