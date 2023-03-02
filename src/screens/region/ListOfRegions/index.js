import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import Button from "../../../components/Button";
import { regions } from "../../../utils/helpers";
import styles from "./styles";

const ListOfRegions = () => {
  const navigation = useNavigation();
  console.log(regions);

  const renderRegions = ({ item }) => (
    <View>
      <Button
        onPress={() =>
          navigation.navigate("Customer List", { label: item.label })
        }
        text={item.label}
      />
    </View>
  );
  return (
    <SafeAreaView style={styles.view}>
      <FlatList
        data={regions}
        renderItem={renderRegions}
        keyExtractor={(item) => item.value}
      />
    </SafeAreaView>
  );
};

export default ListOfRegions;
