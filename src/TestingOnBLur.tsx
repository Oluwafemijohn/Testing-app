import React from "react";
import { View, Text, TextInput } from "react-native";

function TestingOnBLur() {
  return (
    <View>
      <Text>TestingOnBLur</Text>
      <TextInput
        placeholder="Enter your name"
        onBlur={() => {
          console.log("onBlur");
        }}
        onChangeText={() => {
          console.log("onChangeText");
        }}
        onFocus={() => {
          console.log("onFocus");
        }}
        onSubmitEditing={() => {
          console.log("onSubmitEditing");
        }}
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
      />
      <TextInput
        placeholder="Enter your name2"
        onBlur={() => {
          console.log("onBlur 2");
        }}
        onChangeText={() => {
          console.log("onChangeText 2");
        }}
        onFocus={() => {
          console.log("onFocus 2");
        }}
        onSubmitEditing={() => {
          console.log("onSubmitEditing 2");
        }}
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
      />
    </View>
  );
}

export default TestingOnBLur;
