import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import Form from "../Form";
import { useEditCustomer } from "../../hooks";

const Edit = () => {
  const { params } = useRoute();
  const { customerID } = params;
  const { onSubmit, status } = useEditCustomer(customerID);

  return (
    <View>
      <Text>Edit Customer</Text>
      <Form handleSubmit={onSubmit} customerID={customerID} status={status} />
    </View>
  );
};

export default Edit;
