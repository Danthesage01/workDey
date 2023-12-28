import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";

const PersonalDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.serviceImgWrapper}>
          <Image
            source={require("../../../../assets/about_img.png")}
            style={styles.serviceImg}
          />
          <Pressable
            onPress={() => {
              console.log("yes");
            }}
          >
            <Image
              source={require("../../../../assets/photo_camera.png")}
              style={styles.cameraImg}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.info_wrapper}>
        <Text style={styles.headerText}>PERSONAL INFORMATION</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.profile}>
          <Text>Name</Text>
          <Text>Olorunfemi John</Text>
        </View>
        <View style={styles.profile}>
          <Text>Phone</Text>
          <Text>08120588302</Text>
        </View>
        <View style={styles.profile}>
          <Text>Email Address</Text>
          <Text>Johny.whyte@gmail.com</Text>
        </View>
        <View style={styles.profile}>
          <Text>Address</Text>
          <Text style={styles.address_width}>
            Suite 7 Rujoda Plaza Opposite old Benny Rose Guest House, Lugbe
            Abuja.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PersonalDetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 16,
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

  center: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  inputContainer: {
    marginVertical: 20,
  },
  profile: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%",
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
  info_wrapper: {
    backgroundColor: "#f9f9f9",
    color: "#333333",
    marginTop: 20,
    padding: 10,
  },
  address_width: {
    maxWidth: 258,
  },
});
