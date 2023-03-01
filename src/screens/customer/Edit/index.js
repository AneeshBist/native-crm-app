import React from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";
import Form from "../../../features/customer/component/Form";
import { useCreateCustomer } from "../../../features/customer/hooks";
import styles from "./style";

const Edit = () => {
  const { onSubmit } = useCreateCustomer();
  return (
    <SafeAreaView style={styles.view}>
      <ScrollView>
        <Text style={styles.title}>Edit Customer</Text>
        <Form handleSubmit={onSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Edit;
