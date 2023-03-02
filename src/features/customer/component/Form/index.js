import { View, TextInput } from "react-native";
import { Text } from "react-native";
import Button from "../../../../components/Button";
import styles from "./styles";
import { useUpdateFields, useCreateCustomer } from "../../hooks";
import RegionsDropdown from "../../../../components/Dropdown";
import ToggleSwitch from "../../../../components/Toggle";
import { PENDING, INPROGRESS } from "../../../../utils/helpers";

const Form = ({ handleSubmit, status, customerID }) => {
  const { fields, setFormField } = useUpdateFields(customerID);
  const { firstName, lastName } = fields;
  const onPress = () => {
    handleSubmit();
  };

  return (
    <View>
      <TextInput
        key={"firstName"}
        style={styles.textInput}
        placeholder="First Name Here"
        value={firstName || ""}
        onChangeText={(text) => setFormField("firstName", text)}
      />
      <TextInput
        key={"lastName"}
        style={styles.textInput}
        placeholder="Last Name Here"
        value={lastName || ""}
        onChangeText={(text) => setFormField("lastName", text)}
      />

      <RegionsDropdown setFormField={setFormField} />
      <View>
        <Text>Active: </Text>
        <ToggleSwitch setFormField={setFormField} />
      </View>

      <Button
        text="Submit"
        onPress={onPress}
        disabled={status !== PENDING && status !== INPROGRESS}
      />
    </View>
  );
};

export default Form;
