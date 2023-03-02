import React from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";
import Form from "../../../features/customer/component/Form";
import {
  useCreateCustomer,
  useCreateCustomerStatus,
} from "../../../features/customer/hooks";
import styles from "./style";

const New = () => {
  const { onSubmit } = useCreateCustomer();
  const status = useCreateCustomerStatus();
  return (
    <SafeAreaView style={styles.view}>
      <ScrollView>
        <Text style={styles.title}>New Customer</Text>
        <Form handleSubmit={onSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default New;
