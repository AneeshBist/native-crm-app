import React from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";
import Form from "../../../features/customer/component/Form";
import styles from "./style";

const Edit = () => {
  return (
    <SafeAreaView style={styles.view}>
      <ScrollView>
        <Text style={styles.title}>Edit Customer</Text>
        <Form />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Edit;
