import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/ui/Button";
import FlatButton from "../../components/ui/FlatButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { setAuth } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const UserLoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [loginInput, setLoginInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginInput;

  const [passwordVisible, setPasswordVisible] = useState(true);

  function handleChange(enteredValue, inputIdentifier) {
    setLoginInputs((currInputs) => {
      return {
        ...currInputs,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  const verifyLogin = async () => {
    const userData = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        `http://ec2-18-191-219-31.us-east-2.compute.amazonaws.com:8000/v1/login`,
        userData
      );
      // console.log(response?.data);
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
      console.log(error);
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
          if (data.user.artisan === null) {
            navigation.navigate("UserAuthOverview");
          }
          if (data.user.artisan) {
            navigation.navigate("ProviderAuthOverview");
          }
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
        <Text style={styles.headerText}>Login</Text>
        <Text style={styles.subtitle}>Enter your Account</Text>
      </View>
      {message && <Text style={styles.subError}>{message}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          autoCapitalize="sentences"
          keyboardType="email-address"
          onChangeText={(text) => handleChange(text, "email")}
          placeholder="Email"
          value={email}
        />
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
      </View>
      <View>
        <Button onPress={verifyLogin}>
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </View>
      <View style={styles.layer3}>
        <Text>Don't have an account?</Text>
        <FlatButton onPress={() => navigation.navigate("UserSignup")}>
          Create an Account
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

export default UserLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    padding: 15,
    backgroundColor: "#fff",
    // justifyContent: "center",
  },
  layer1: {
    marginTop: 100,
    marginBottom: 15,
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
    fontSize: 28,
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
