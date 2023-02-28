import React from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../../components/Button";

const List = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <Text>Customers List</Text>

      {/* {customers && customers.length > 0 ? (
        <FlatList
          data={customers || []}
          renderItem={(props) => <ShowCustomer {...props} />}
          keyExtractor={(item) => item.id}
        />
      ) : ( */}
      <>
        <Text>{"No Customers"}</Text>
        <Button
          text="Add Customer"
          onPress={() => {
            navigate("New Customer");
          }}
        />
      </>
    </View>
  );
};

export default List;
