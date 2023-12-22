import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/ui/Button";

const ProviderSignupTwo = () => {
  const navigation = useNavigation();
  const [loginInput, setLoginInputs] = useState({
    month: "",
    day: "",
    year: "",
    state: "",
    city: "",
    address: "",
    NIN: "",
  });

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
        <Text style={styles.screenInfo}>Birthday</Text>
        <View style={styles.textNameContainer}>
          <TextInput
            style={styles.textInputName}
            placeholder="Month"
            autoCapitalize="words"
            keyboardType="default"
            onChangeText={(text) => handleChange(text, "month")}
            value={loginInput.month}
          />
          <TextInput
            style={styles.textInputName}
            placeholder="Day"
            keyboardType="default"
            autoCapitalize="words"
            onChangeText={(text) => handleChange(text, "day")}
            value={loginInput.day}
          />
          <TextInput
            style={styles.textInputName}
            placeholder="Year"
            keyboardType="default"
            autoCapitalize="words"
            onChangeText={(text) => handleChange(text, "year")}
            value={loginInput.year}
          />
        </View>
        <View style={styles.textNameContainer}>
          <TextInput
            style={styles.textInputName}
            placeholder="State"
            autoCapitalize="words"
            keyboardType="default"
            onChangeText={(text) => handleChange(text, "state")}
            value={loginInput.state}
          />
          <TextInput
            style={styles.textInputName}
            placeholder="City"
            keyboardType="default"
            autoCapitalize="words"
            onChangeText={(text) => handleChange(text, "city")}
            value={loginInput.city}
          />
        </View>

        <View style={styles.textPureContainer}>
          <TextInput
            style={styles.input}
            keyboardType="default"
            onChangeText={(text) => handleChange(text, "address")}
            placeholder="Specific address location"
            value={loginInput.address}
          />
        </View>
        <View style={styles.textPureContainer}>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            onChangeText={(text) => handleChange(text, "NIN")}
            placeholder="Enter NIN"
            value={loginInput.NIN}
          />
        </View>
      </View>

      <View style={styles.layer4}>
        <Button onPress={() => navigation.navigate("ProviderSignupThree")}>
          Create Account
        </Button>
      </View>
    </View>
  );
};

export default ProviderSignupTwo;

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
  screenInfo: {
    fontSize: 18,
    marginTop: 40,
    marginBottom: -20,
  },
});
