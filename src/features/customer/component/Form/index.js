import { View, TextInput } from "react-native";
import Button from "../../../../components/Button";
import styles from "./styles";
import { useUpdateFields, useCreateCustomer } from "../../hooks";

const Form = ({ handleSubmit }) => {
  const { fields, setFormField } = useUpdateFields();
  const { firstName, lastName } = fields;
  const onPress = handleSubmit();

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

      <Button text="Submit" onPress={onPress} />
    </View>
  );
};

export default Form;
