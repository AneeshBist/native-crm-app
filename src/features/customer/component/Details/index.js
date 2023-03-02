import React from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Button from "../../../../components/Button";

const Details = () => {
  const { params } = useRoute();
  const { item } = params;
  const { navigate } = useNavigation();
  const onPress = () => navigate("Edit Customer", { customerID: item.id });
  console.log("Details Customer item: ", params);

  return (
    <View>
      <Text key={"custId"}>ID: {item.id}</Text>
      <Text key={"fname"}>First Name: {item.firstName}</Text>
      <Text key={"lname"}>Last Name: {item.lastName}</Text>
      <Text key={"active"}>Active: {item.active ? "True" : "False"}</Text>
      <Text key={"region"}>Region: {item.region}</Text>
      <Button text="Edit Customer" onPress={onPress} />
    </View>
  );
};
export default Details;
