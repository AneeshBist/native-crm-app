import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Edit from "../../../features/customer/component/Edit";

import styles from "./style";

const EditScreen = () => {
  return (
    <SafeAreaView style={styles.view}>
      <ScrollView>
        <Edit />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditScreen;
