import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";
import { clear } from "../../utils/async_storage";
import Notification from "../../features/customer/component/Notification";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  console.log("Welcome screen");
  return (
    <View style={styles.view}>
      <Notification />
      <Text style={styles.title}>CRM Application</Text>
      <Button
        onPress={() => navigation.navigate("New Customer")}
        text="Add Customer"
      />
      <Button
        onPress={() => navigation.navigate("Region List")}
        text="View Customers"
      />

      <Button
        text="Reset"
        onPress={() => {
          console.log("Clearing data...");
          clear();
        }}
      />
    </View>
  );
};

export default WelcomeScreen;
