import { useState } from "react";
import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "./styles";
import { regions } from "../../utils/helpers";

const RegionsDropdown = ({ setFormField }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  console.log("sel value: ", value);

  const onChange = (item) => {
    setValue(item.value);
    setIsFocus(false);
    setFormField("region", item.label);
  };

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={regions}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Choose a region" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={onChange}
      />
    </View>
  );
};

export default RegionsDropdown;
