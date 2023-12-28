import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Button from "../../components/ui/Button";
import { useNavigation } from "@react-navigation/native";
const FindServiceScreen = () => {
  const navigation = useNavigation();
  const [searchInputs, setSearchInputs] = useState({
    service: "",
    location: "",
  });

  const { service, location } = searchInputs;

  function handleChange(enteredValue, inputIdentifier) {
    setSearchInputs((currInputs) => {
      return {
        ...currInputs,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.layer1}>
        <Text style={styles.headerText}>Search for a service</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          autoCapitalize="sentences"
          keyboardType="default"
          onChangeText={(text) => handleChange(text, "service")}
          placeholder="House cleaning, replace light"
          value={service}
        />

        <TextInput
          style={styles.input}
          autoCapitalize="sentences"
          keyboardType="default"
          placeholder="Enter your location"
          onChangeText={(text) => handleChange(text, "location")}
          value={location}
        />
      </View>
      <View>
        <Button
          onPress={() => {
            navigation.navigate("SearchResultScreen");
            console.log(searchInputs);
          }}
        >
          Search
        </Button>
      </View>
    </View>
  );
};

export default FindServiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 15,
    backgroundColor: "#fff",
    // justifyContent: "center",
  },
  layer1: {
    marginVertical: 10,
  },
  layer3: {
    marginVertical: 25,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  layer4: {
    marginTop: 150,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: -7,
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
    marginVertical: 10,
    color: "#000",
  },
  subError: {
    marginTop: 10,
    fontSize: 10,
    color: "red",
    fontWeight: "400",
  },
  textInputContainer: {
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
