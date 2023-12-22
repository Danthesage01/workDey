import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/ui/Button";
import FlatButton from "../../components/ui/FlatButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

const ProviderSignupOne = () => {
  const navigation = useNavigation();
  const [loginInput, setLoginInputs] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  function handleChange(enteredValue, inputIdentifier) {
    setLoginInputs((currInputs) => {
      return {
        ...currInputs,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.layer1}>
        <Text style={styles.headerText}>Become a</Text>
        <Text style={styles.headerText}>Service Provider</Text>
        <Text style={styles.subtitle}>
          Available jobs in your city at your convenience
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.textNameContainer}>
          <TextInput
            style={styles.textInputName}
            placeholder="Legal First Name"
            autoCapitalize="words"
            keyboardType="default"
            onChangeText={(text) => handleChange(text, "firstName")}
            value={loginInput.firstName}
          />
          <TextInput
            style={styles.textInputName}
            placeholder="Legal Last Name"
            keyboardType="default"
            autoCapitalize="words"
            onChangeText={(text) => handleChange(text, "lastName")}
            value={loginInput.lastName}
          />
        </View>
        <View style={styles.textPureContainer}>
          <TextInput
            style={styles.input}
            autoCapitalize="sentences"
            keyboardType="phone-pad"
            onChangeText={(text) => handleChange(text, "mobileNumber")}
            placeholder="Mobile Number"
            value={loginInput.mobileNumber}
          />
        </View>
        <View style={styles.textPureContainer}>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            onChangeText={(text) => handleChange(text, "email")}
            placeholder="Email (example@example.com)"
            value={loginInput.email}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInputEye}
            placeholder="Password"
            secureTextEntry={passwordVisible}
            onChangeText={(text) => handleChange(text, "password")}
            value={loginInput.password}
          />
          <MaterialCommunityIcons
            name={passwordVisible ? "eye-off" : "eye"}
            size={24}
            color="#aaa"
            style={styles.icon}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInputEye}
            placeholder="Confirm Password"
            secureTextEntry={passwordVisible}
            onChangeText={(text) => handleChange(text, "confirmPassword")}
            value={loginInput.confirmPassword}
          />
        </View>
        <View style={styles.textCheckContainer}>
          <Checkbox
            style={styles.check}
            value={isChecked}
            onValueChange={setIsChecked}
          />
          <Text style={styles.checkText}>
            I reviewed and accept the Independent Contractor Agreement as a
            legally-binding contract between me and Sewa, Inc.
          </Text>
        </View>
        <View style={styles.textCheckContainer}>
          <Checkbox
            style={styles.check}
            value={isChecked2}
            onValueChange={setIsChecked2}
          />
          <Text>I reviewed and accept theTerms & Conditions</Text>
        </View>
      </View>

      <View>
        <Button onPress={() => navigation.navigate("ProviderSignupTwo")}>
          Create Account
        </Button>
      </View>
      <View style={styles.layer3}>
        <Text>Already have an account?</Text>
        <FlatButton onPress={() => navigation.navigate("UserLogin")}>
          Login Here
        </FlatButton>
      </View>
    </View>
  );
};

export default ProviderSignupOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    padding: 15,
    backgroundColor: "#fff",
    // justifyContent: "center",
  },
  layer1: {
    marginTop: 50,
    // marginBottom: 15,
  },
  layer3: {
    marginVertical: 25,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  layer4: {
    marginTop: 100,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "600",
  },
  subtitle: {
    marginVertical: 5,
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  inputContainer: {
    marginVertical: 8,
    marginBottom: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 6,
    backgroundColor: "#f3f3f3",
    borderRadius: 4,
    fontSize: 16,
    color: "#000",
  },

  textPureContainer: {
    backgroundColor: "white",
    borderRadius: 4,
    marginVertical: 10,
  },
  textNameContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 4,
    gap: 10,
    marginTop: 30,
  },
  textCheckContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderRadius: 4,
    gap: 10,
    marginTop: 30,
    paddingRight: 20,
  },
  check: {
    width: 25,
    height: 25,
  },
  checkText: {
    marginRight: 15,
  },
  textInputName: {
    flex: 1,
    color: "#333",
    backgroundColor: "#f3f3f3",
    fontSize: 16,
    paddingVertical: 15,
    paddingHorizontal: 6,
    borderRadius: 4,
  },

  textInputContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: 4,
    paddingVertical: 7,
    paddingHorizontal: 6,
  },

  textInputEye: {
    flex: 1,
    color: "#333",
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
});
