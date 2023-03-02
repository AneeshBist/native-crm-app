import React from "react";
import { View, Text } from "react-native";
import Form from "../Form";
import { useCreateCustomer, useCreateCustomerStatus } from "../../hooks";

const New = () => {
  const { onSubmit } = useCreateCustomer();
  const status = useCreateCustomerStatus();
  return (
    <View>
      <Text>New Customer</Text>
      <Form handleSubmit={onSubmit} status={status} />
    </View>
  );
};

export default New;
