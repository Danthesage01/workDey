import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/ui/Button";

const OTPScreen1 = ({ length = 4, value, disabled = false, onChange }) => {
  const navigation = useNavigation();
  const [loginInput, setLoginInputs] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
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
        <Text style={styles.headerText}>Enter OTP</Text>
        <Text style={styles.subtitle}>Your phone number is 08100885533</Text>
        <Text style={styles.subtitle}>
          Enter the OTP sent to your phone number
        </Text>
      </View>

      <View style={styles.containerOTP}>
        {[...new Array(length)].map((item, index) => {
          return (
            <TextInput
              style={styles.inputOTP}
              key={index}
              keyboardType="decimal-pad"
              onChangeText={(text) => handleChange(text, "first")}
              maxLength={1}
              contextMenuHidden
              selectTextOnFocus
              editable={!disabled}
              testID={`OTPInput-${index}`}
            />
          );
        })}
      </View>
      {/* <View style={styles.textOTPContainer}>
        <TextInput
          style={styles.textInputName}
          placeholder="|"
          keyboardType="number-pad"
          onChangeText={(text) => handleChange(text, "first")}
          value={loginInput.first}
          maxLength={1}
        />
        <TextInput
          style={styles.textInputName}
          placeholder="|"
          keyboardType="number-pad"
          onChangeText={(text) => handleChange(text, "second")}
          value={loginInput.second}
          maxLength={1}
        />
        <TextInput
          style={styles.textInputName}
          placeholder="|"
          keyboardType="number-pad"
          onChangeText={(text) => handleChange(text, "third")}
          maxLength={1}
          value={loginInput.third}
        />
        <TextInput
          style={styles.textInputName}
          placeholder="|"
          keyboardType="number-pad"
          onChangeText={(text) => handleChange(text, "fourth")}
          maxLength={1}
          value={loginInput.fourth}
        />
      </View> */}

      <View>
        <Button onPress={() => {}}>Verify</Button>
      </View>
    </View>
  );
};

export default OTPScreen1;

let styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    padding: 25,
    backgroundColor: "#fff",
  },
  layer1: {
    marginTop: 50,
  },

  headerText: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },

  containerOTP: {
    marginTop: 50,
    marginBottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  inputOTP: {
    flex: 1,
    color: "#333",
    backgroundColor: "#f3f3f3",
    fontSize: 24,
    width: 45,
    height: 55,
    borderRadius: 4,
    textAlign: "center",
  },
  textOTPContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 4,
    gap: 10,
    marginTop: 30,
  },
  textInputName: {
    flex: 1,
    color: "#333",
    backgroundColor: "#f3f3f3",
    fontSize: 16,
    paddingVertical: 15,
    paddingHorizontal: 6,
    borderRadius: 4,
    textAlign: "center",
  },
});



import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/ui/Button";

const OTPScreen2 = ({
  length = 4,
  value = [],
  disabled = false,
  onChange = () => {},
}) => {
  const navigation = useNavigation();
  const inputRefs = useRef([]);
  const [pin, setPin] = useState("");

  // const onChangeValue = (text, index) => {
  //   const newValue = value.map((item, valueIndex) => {
  //     if (valueIndex === index) {
  //       return text;
  //     }
  //     return item;
  //   });
  //   onChange(newValue);
  // };

  const handleChange = (text, index) => {
    console.log(text, index);
    setPin((currPin) => {
      if (text !== "") {
        return [...currPin, text];
      }
      return [...currPin];
    });
    if (text.length !== 0) {
      return inputRefs?.current[index + 1]?.focus();
    }
    return inputRefs?.current[index - 1]?.focus();
  };

  const handleBackspace = (event, index) => {
    const { nativeEvent } = event;

    if (nativeEvent.key === "Backspace") handleChange("", index);
  };

  const handleSubmit = () => {
    // console.log(pin.slice(-4));
    const pinArray = pin.slice(-4);
    let newElement;
    for (let index = 0; index < pinArray.length; index++) {
      console.log(pinArray[index]);
      newElement = pinArray[index];
      console.log(newElement, "here");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.layer1}>
        <Text style={styles.headerText}>Enter OTP</Text>
        <Text style={styles.subtitle}>Your phone number is 08100885533</Text>
        <Text style={styles.subtitle}>
          Enter the OTP sent to your phone number
        </Text>
      </View>

      <View style={styles.containerOTP}>
        {[...new Array(length)].map((item, index) => {
          return (
            <TextInput
              ref={(ref) => {
                if (ref && !inputRefs.current.includes(ref)) {
                  inputRefs.current = [...inputRefs.current, ref];
                }
              }}
              style={styles.inputOTP}
              key={index}
              keyboardType="decimal-pad"
              onChangeText={(text) => handleChange(text, index)}
              maxLength={1}
              contextMenuHidden
              selectTextOnFocus
              editable={!disabled}
              testID={`OTPInput-${index}`}
              onKeyPress={(event) => handleBackspace(event, index)}
            />
          );
        })}
      </View>

      <View>
        <Button onPress={handleSubmit}>Verify</Button>
      </View>
    </View>
  );
};

export default OTPScreen2;

let styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    padding: 25,
    backgroundColor: "#fff",
  },
  layer1: {
    marginTop: 50,
  },

  headerText: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },

  containerOTP: {
    marginTop: 50,
    marginBottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  inputOTP: {
    flex: 1,
    color: "#333",
    backgroundColor: "#f3f3f3",
    fontSize: 24,
    width: 45,
    height: 55,
    borderRadius: 4,
    textAlign: "center",
  },
});
