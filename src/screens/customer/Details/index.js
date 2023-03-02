import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Details from "../../../features/customer/component/Details";
import styles from "./style";

const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.view}>
      <ScrollView>
        <Details />
      </ScrollView>
    </SafeAreaView>
  );
};
export default DetailsScreen;
