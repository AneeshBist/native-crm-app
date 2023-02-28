import { View, TextInput } from "react-native";
import Button from "../../../../components/Button";
import styles from "./styles";

const Form = () => {
  return (
    <View>
      <TextInput
        key={"firstName"}
        style={styles.textInput}
        placeholder="First Name..."
        value={""}
      />
      <TextInput
        key={"lastName"}
        style={styles.textInput}
        placeholder="Last Name..."
        value={""}
      />

      <Button text="Submit" />
    </View>
  );
};

export default Form;
