import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewScreen from "../screens/customer/New";
import WelcomeScreen from "../screens/welcome/Welcome";
import EditScreen from "../screens/customer/Edit";
import ListCustomerByRegion from "../screens/region/ListCustomerByRegion";
import ListOfRegions from "../screens/region/ListOfRegions";
import DetailsScreen from "../screens/customer/Details";
import NotificationScreen from "../screens/Notification";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="New Customer" component={NewScreen} />
        <Stack.Screen name="Edit Customer" component={EditScreen} />
        <Stack.Screen name="Customer List" component={ListCustomerByRegion} />
        <Stack.Screen name="Region List" component={ListOfRegions} />
        <Stack.Screen name="Customer Details" component={DetailsScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
