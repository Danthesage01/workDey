import { View, Text, Button, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LandingPage = () => {
  const navigation = useNavigation();
  // const { user } = useSelector((state) => state.auth);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/landing-image.png")}
        style={styles.image}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.headerText}>Instantly Book House</Text>
        <Text style={styles.headerText}>Cleaners & Handymen</Text>
        <Text style={styles.subtitle}>
          The best handymen available in your city
        </Text>
      </View>
      <View style={styles.btnWrapper}>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          onPress={() => navigation.navigate("UserLogin")}
        >
          <View>
            <Text style={styles.buttonText}>Continue</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    padding: 0,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    flex: 0.7,
    width: "100%",
  },
  textWrapper: {
    alignItems: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "900",
    marginTop: -7,
  },
  subtitle: {
    marginVertical: 15,
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  button: {
    borderRadius: 6,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#1861D9",
    minWidth: "80%",
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    color: "#1861D9",
    fontSize: 16,
    fontWeight: "bold",
  },
});
