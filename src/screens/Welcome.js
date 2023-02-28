import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import Button from "../components/Button";
import styles from "./styles";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Text style={styles.title}>CRM Application</Text>
      <Button
        onPress={() => navigation.navigate("New Customer")}
        text="Add Customer"
      />
      <Button
        onPress={() => navigation.navigate("Region List")}
        text="View Customers"
      />

      <Button text="Reset" />
    </View>
  );
};

export default Welcome;
