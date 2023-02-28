import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import New from "../screens/customer/New";
import Welcome from "../screens/Welcome";
import Edit from "../screens/customer/Edit";
import ListCustomerByRegion from "../screens/region/ListCustomerByRegion";
import ListOfRegions from "../screens/region/ListOfRegions";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="New Customer" component={New} />
        <Stack.Screen name="Edit Customer" component={Edit} />
        <Stack.Screen name="Customer List" component={ListCustomerByRegion} />
        <Stack.Screen name="Region List" component={ListOfRegions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
