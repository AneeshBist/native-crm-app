import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import New from "../../../features/customer/component/New";
import styles from "./style";

const NewScreen = () => {
  return (
    <SafeAreaView style={styles.view}>
      <ScrollView>
        <New />
      </ScrollView>
    </SafeAreaView>
  );
};
export default NewScreen;
