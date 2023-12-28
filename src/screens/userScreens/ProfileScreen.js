import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("userData");
      navigation.navigate("CommonNavigator");
      console.log("first");
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.center}>
        <View style={styles.serviceImgWrapper}>
          <Image
            source={require("../../../assets/about_img.png")}
            style={styles.serviceImg}
          />
          <Pressable
            onPress={() => {
              console.log("yes");
            }}
          >
            <Image
              source={require("../../../assets/photo_camera.png")}
              style={styles.cameraImg}
            />
          </Pressable>
        </View>
        <Text style={styles.headerText}>Olorunfemi John</Text>
        <View style={styles.locationStyle}>
          <Ionicons
            name="location"
            size={18}
            color="blue"
          />
          <Text style={styles.blue_highlight}>Wuse Nigeria</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.profile}>
          <Pressable
            style={styles.childProfile}
            onPress={() => navigation.navigate("PersonalDetails")}
          >
            <View style={styles.childOne}>
              <Image
                source={require("../../../assets/personal.png")}
                style={styles.iconImg}
              />
              <Text>Personal Details</Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={20}
              color="black"
            />
          </Pressable>
        </View>
        <View style={styles.profile}>
          <Pressable
            style={styles.childProfile}
            onPress={() => navigation.navigate("Referral")}
          >
            <View style={styles.childOne}>
              <Image
                source={require("../../../assets/referral.png")}
                style={styles.iconImg}
              />
              <Text>Refer a friend</Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={20}
              color="black"
            />
          </Pressable>
        </View>

        <View style={styles.profile}>
          <Pressable
            style={styles.childProfile}
            onPress={() => navigation.navigate("Payment")}
          >
            <View style={styles.childOne}>
              <Image
                source={require("../../../assets/payment.png")}
                style={styles.iconImg}
              />
              <Text>Payment Details</Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={20}
              color="black"
            />
          </Pressable>
        </View>
        <View style={styles.profile}>
          <Pressable
            style={styles.childProfile}
            // onPress={navigation.navigate("")}
          >
            <View style={styles.childOne}>
              <Image
                source={require("../../../assets/service_provider.png")}
                style={styles.iconImg}
              />
              <Text>Become a Service Provider</Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={20}
              color="black"
            />
          </Pressable>
        </View>
        <View style={styles.profile}>
          <Pressable
            style={styles.childProfile}
            onPress={() => navigation.navigate("Help")}
          >
            <View style={styles.childOne}>
              <Image
                source={require("../../../assets/help.png")}
                style={styles.iconImg}
              />
              <Text>Help and Support</Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={20}
              color="black"
            />
          </Pressable>
        </View>
        <View style={styles.profile}>
          <Pressable
            style={styles.childProfile}
            onPress={() => navigation.navigate("About")}
          >
            <View style={styles.childOne}>
              <Image
                source={require("../../../assets/sewa.png")}
                style={styles.iconImg}
              />
              <Text>About Sewa App</Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={20}
              color="black"
            />
          </Pressable>
        </View>
        <View style={styles.profile}>
          <Pressable
            style={styles.childProfile}
            onPress={logout}
          >
            <View style={styles.childOne}>
              <AntDesign
                name="logout"
                size={24}
                color="#1861D9"
              />
              <Text>Logout</Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={20}
              color="black"
            />
          </Pressable>
        </View>
      </View>

      {/* <Pressable
        onPress={logout}
        style={{}}
      >
        <Text>Logout</Text>
        <AntDesign
          name="logout"
          size={24}
          color="#1861D9"
        />
      </Pressable> */}
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  view: {
    marginVertical: 15,
  },
  image: {
    flex: 0.7,
    width: "100%",
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  rowWrapper: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 5,
  },

  subtitle: {
    marginVertical: 15,
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },

  serviceImgWrapper: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginRight: 10,
    position: "relative",
  },
  serviceImg: {
    width: "100%",
    borderRadius: 6,
    objectFit: "cover",
  },
  iconImg: {
    objectFit: "cover",
  },
  cameraImg: {
    borderRadius: 6,
    objectFit: "contain",
    position: "absolute",
    bottom: "10%",
    right: "0%",
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
  center: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  blue_highlight: {
    color: "#1861D9",
  },

  modalLayer1: {
    marginTop: 50,
    marginBottom: 40,
  },
  layer3: {
    marginVertical: 25,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  modalLayer4: {
    marginTop: 20,
    // padding: 15,
  },
  layer4: {
    marginTop: 10,
    padding: 15,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "600",
  },
  modalHeaderText: {
    fontSize: 24,
    fontWeight: "600",
  },
  subtitle: {
    marginVertical: 5,
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  inputContainer: {
    marginVertical: 50,
  },
  profile: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%",
  },
  profileLast: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%",
  },
  childProfile: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  childOne: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    justifyContent: "space-between",
  },
  viewModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundColor: "white",
  },
});
