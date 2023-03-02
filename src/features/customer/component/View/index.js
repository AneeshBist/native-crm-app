import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ViewCustomer = ({ item }) => {
  const { navigate } = useNavigation();

  console.log("item: ", item);

  return (
    <TouchableOpacity onPress={() => navigate("Customer Details", { item })}>
      <View key={item.id} style={{ borderWidth: 1, padding: 10, margin: 10 }}>
        <Text key={"custId"}>ID: {item.id}</Text>
        <Text key={"fname"}>First Name: {item.firstName}</Text>
        <Text key={"lname"}>Last Name: {item.lastName}</Text>
        <Text key={"active"}>Active: {item.active ? "True" : "False"}</Text>
        <Text key={"region"}>Region: {item.region}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ViewCustomer;
