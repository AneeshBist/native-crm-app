import React from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../../components/Button";
import { useCustomerList } from "../../hooks";
import ViewCustomer from "../View";

const List = ({ region }) => {
  const { navigate } = useNavigation();
  const allCustomers = useCustomerList();
  const fitleredCustomers = allCustomers
    ? allCustomers.filter((customer) => customer.region === region)
    : null;
  return (
    <View>
      <Text>Customers List</Text>

      {fitleredCustomers && fitleredCustomers.length > 0 ? (
        <FlatList
          data={fitleredCustomers || []}
          renderItem={(props) => <ViewCustomer {...props} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <>
          <Text>{"No Customers"}</Text>
          <Button
            text="Add Customer"
            onPress={() => {
              navigate("New Customer");
            }}
          />
        </>
      )}
    </View>
  );
};

export default List;
