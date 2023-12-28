import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";

const ReferralScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.center, styles.view]}>
        <Text style={styles.spacing}>My referral earnings</Text>
        <Text style={styles.text_spacing}>N 0</Text>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          onPress={() => {
            console.log(chat);
          }}
        >
          <View style={[styles.row, styles.rowWrapper1]}>
            <Image
              source={require("../../../../assets/download_fill.png")}
              style={styles.serviceImg}
            />
            <Text style={styles.buttonText}>Withdraw</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.info_wrapper}>
        <Text style={styles.spacing}>About Referrals</Text>
      </View>
      <View style={styles.center}>
        <Text style={styles.blue_highlight}>Earn N1,000 per referral</Text>
        <Text style={styles.view_text}>
          You get a ₦1,000 referral bonus instantly as soon as your friend signs
          up on SEWA
        </Text>
        <View style={[styles.row, styles.mini_view]}>
          <Pressable style={[styles.row, styles.view_copy]}>
            <Text style={{ color: "#ccc" }}>TheFemiJohn</Text>
            <Image source={require("../../../../assets/copy.png")} />
          </Pressable>
          <Pressable style={[styles.row, styles.view_share]}>
            <Text style={styles.text_share}>Share</Text>
          </Pressable>
        </View>
        <Image
          source={require("../../../../assets/noreferral.png")}
          style={styles.serviceImg}
        />
        <Text style={styles.view_text}>You have no referrals yet</Text>
      </View>
    </View>
  );
};

export default ReferralScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 20,
    padding: 10,
  },
  address_width: {
    maxWidth: 258,
  },
  button: {
    borderRadius: 6,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#1861D9",
    backgroundColor: "#1861D9",
    width: 139,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
  },
  mini_view: {
    marginVertical: 15,
  },
  view: {
    marginVertical: 30,
  },
  rowWrapper1: {
    alignItems: "center",

    justifyContent: "space-around",
  },
  serviceImg: {
    width: "20%",
    borderRadius: 6,
    objectFit: "cover",
  },
  spacing: {
    marginVertical: 10,
    fontSize: 14,
  },
  text_spacing: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "800",
  },
  blue_highlight: {
    color: "#1861D9",
  },
  view_text: {
    color: "#979797",
    fontSize: 14,
    width: 280,
    textAlign: "center",
    marginVertical: 10,
  },
  view_copy: {
    backgroundColor: "#efefef",
    width: 160,
    height: 52,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "space-around",
    gap: 5,
    paddingHorizontal: 8,
    marginVertical: 8,
    marginRight: 5,
  },
  view_share: {
    backgroundColor: "#1861D9",
    width: 160,
    height: 52,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingHorizontal: 8,
    marginVertical: 8,
    marginLeft: 5,
    elevation: 1,
    shadowColor: "#636363",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  text_share: {
    color: "white",
    textAlign: "center",
  },
});
