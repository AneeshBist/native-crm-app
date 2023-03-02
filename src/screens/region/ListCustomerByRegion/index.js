import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import List from "../../../features/customer/component/List";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";

const ListByRegion = () => {
  const { params } = useRoute();

  return (
    <SafeAreaView style={styles.view}>
      <ScrollView>
        <List region={params.label} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListByRegion;
