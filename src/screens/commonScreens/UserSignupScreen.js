import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/ui/Button";
import FlatButton from "../../components/ui/FlatButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setAuth } from "../../features/auth/authSlice";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserSignupScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [registerInput, setRegisterInputs] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    hearAboutUs: "",
  });
  const {
    email,
    firstName,
    lastName,
    mobileNumber,
    password,
    confirmPassword,
    hearAboutUs,
  } = registerInput;
  const [passwordVisible, setPasswordVisible] = useState(true);

  function handleChange(enteredValue, inputIdentifier) {
    setRegisterInputs((currInputs) => {
      return {
        ...currInputs,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  const verifySignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }
    setIsLoading(true);
    const userData = {
      first_name: firstName,
      last_name: lastName,
      phone: mobileNumber,
      email: email,
      password: password,
      hearAboutUs,
    };
    try {
      const response = await axios.post(
        `http://ec2-18-191-219-31.us-east-2.compute.amazonaws.com:8000/v1/register`,
        userData
      );

      setIsLoading(false);
      if (response?.data?.status === "success") {
        setMessage("successful");
        setData(response.data?.data);
        dispatch(setAuth(response.data?.data));
      }
      if (response?.data?.status === "error") {
        setMessage("error occurred");
      }
    } catch (error) {
      console.log(error.response.data.error);
      setIsLoading(false);
      setMessage(error.response?.data?.error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (data) {
      const storedData = async () => {
        try {
          const jsonData = JSON.stringify(data);
          await AsyncStorage.setItem("userData", jsonData);
        } catch (error) {
          throw new Error(error);
        }
      };
      storedData();
    }
  }, [data]);

  useEffect(() => {
    if (message) {
      let timer = setTimeout(() => {
        setMessage("");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <View style={styles.container}>
      <View style={styles.layer1}>
        <Text style={styles.headerText}>Create an Account</Text>
        <Text style={styles.subtitle}>
          Available jobs in your city at your convenience
        </Text>
      </View>
      <View style={styles.inputContainer}>
        {message && <Text style={styles.subError}>{message}</Text>}

        <View style={styles.textNameContainer}>
          <TextInput
            style={styles.textInputName}
            placeholder="First Name"
            autoCapitalize="words"
            keyboardType="default"
            onChangeText={(text) => handleChange(text, "firstName")}
            value={firstName}
          />
          <TextInput
            style={styles.textInputName}
            placeholder="Last Name"
            keyboardType="default"
            autoCapitalize="words"
            onChangeText={(text) => handleChange(text, "lastName")}
            value={lastName}
          />
        </View>
        <View style={styles.textPureContainer}>
          <TextInput
            style={styles.input}
            autoCapitalize="sentences"
            keyboardType="phone-pad"
            onChangeText={(text) => handleChange(text, "mobileNumber")}
            placeholder="Mobile Number"
            value={mobileNumber}
          />
        </View>
        <View style={styles.textPureContainer}>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            onChangeText={(text) => handleChange(text, "email")}
            placeholder="Email (example@example.com)"
            value={email}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInputEye}
            placeholder="Password"
            secureTextEntry={passwordVisible}
            onChangeText={(text) => handleChange(text, "password")}
            value={password}
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
            value={confirmPassword}
          />
        </View>
        <View style={styles.textPureContainer}>
          <TextInput
            style={styles.input}
            autoCapitalize="sentences"
            keyboardType="default"
            onChangeText={(text) => handleChange(text, "hearAboutUs")}
            placeholder="How did you hear about us?"
            value={hearAboutUs}
          />
        </View>
      </View>
      <View>
        <Button onPress={verifySignup}>
          {isLoading ? "Loading..." : "Create Account"}
        </Button>
      </View>
      <View style={styles.layer3}>
        <Text>Already have an account?</Text>
        <FlatButton onPress={() => navigation.navigate("UserLogin")}>
          Login Here
        </FlatButton>
      </View>
      <View style={styles.layer4}>
        <FlatButton onPress={() => navigation.navigate("ProviderSignup")}>
          Become a Service Provider
        </FlatButton>
      </View>
    </View>
  );
};

export default UserSignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    padding: 15,
    backgroundColor: "#fff",
  },
  layer1: {
    marginTop: 50,
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
  subError: {
    marginTop: 10,
    fontSize: 10,
    color: "red",
    fontWeight: "400",
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
