import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";
import Form from "../../../features/customer/component/Form";
import { useEditCustomer } from "../../../features/customer/hooks";
import styles from "./style";

const Edit = () => {
  const { params } = useRoute();
  const { customerID } = params;
  const { onSubmit, status } = useEditCustomer(customerID);
  return (
    <SafeAreaView style={styles.view}>
      <ScrollView>
        <Text style={styles.title}>Edit Customer</Text>
        <Form handleSubmit={onSubmit} customerID={customerID} status={status} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Edit;
