import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../ui/Button";
import Input from "./Input";

function AuthLoginForm({ onSubmit }) {
  const [enteredNumber, setMobileNumber] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  return (
    <View style={styles.form}>
      <View>
        <Input
          onUpdateValue={updateInputValueHandler.bind(this, "email")}
          value={enteredNumber}
          keyboardType="phone-pad"
        />
        <Input
          onUpdateValue={updateInputValueHandler.bind(this, "password")}
          secure
          value={enteredPassword}
          keyboardType="visible-password"
        />
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>Login</Button>
        </View>
      </View>
    </View>
  );
}

export default AuthLoginForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});
