import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { selectFromAuth } from "../../features/auth/authSlice";
const HomeScreen = () => {
  const navigation = useNavigation();
  const auth = useSelector(selectFromAuth);
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.row, styles.rowWrapper, styles.view]}>
        <View>
          <Text style={styles.subtitle}>Welcome</Text>
          <Text style={styles.headerText}>
            {auth.user.first_name} {auth.user.last_name}
          </Text>
        </View>
        <Pressable
          onPress={() => {
            console.log("pressed");
          }}
        >
          <FontAwesome5
            name="bell"
            size={24}
            color="black"
          />
        </Pressable>
      </View>
      <View style={[styles.row, styles.rowWrapper, styles.extra_view]}>
        <View style={styles.locationStyle}>
          <Ionicons
            name="location"
            size={18}
            color="blue"
          />
          <Text>Wuse Nigeria</Text>
        </View>

        <Pressable
          onPress={() => {
            console.log("pressed");
          }}
        >
          <Text style={styles.changeLocation}>Change Location</Text>
        </Pressable>
      </View>

      <View style={[styles.view, styles.row, styles.rowWrapper]}>
        <Text style={styles.sectionText}>Appointments</Text>
        <Pressable
          onPress={() => {}}
          style={[styles.row, styles.rowWrapper]}
        >
          <Text style={styles.viewAllText}>View all</Text>
          <Ionicons
            name="arrow-forward"
            size={24}
            color="#1861D9"
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  view: {
    marginVertical: 25,
  },
  extra_view: {
    marginVertical: 25,
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
    marginTop: 20,
    flexDirection: "row",
  },
  changeLocation: {
    color: "blue",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "900",
    textTransform: "capitalize",
    marginTop: -10,
  },
  sectionText: {
    fontSize: 16,
    fontWeight: "700",
  },
  subtitle: {
    marginVertical: 15,
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  searchWrapper: {
    backgroundColor: "#f9f9f9",
    width: "100%",
    height: 50,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  searchText: {
    color: "#636363",
    fontSize: 12,
    paddingHorizontal: 8,
  },
  postText: {
    color: "#1861D9",
    marginTop: 4,
    fontSize: 14,
  },
  viewAllText: {
    color: "#1861D9",
    fontSize: 16,
  },
  requestText: {
    color: "#0e7932",
    marginTop: 4,
    fontSize: 14,
  },
  postLinkWrapper: {
    backgroundColor: "#b7d2ff",
    width: 162,
    height: 100,
    paddingHorizontal: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 12,
  },
  requestLinkWrapper: {
    backgroundColor: "#e4fbec",
    width: 162,
    height: 100,
    paddingHorizontal: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 12,
  },
  serviceImgWrapper: {
    width: 115,
    height: 130,
    borderRadius: 12,
    marginRight: 10,
  },
  serviceImg: {
    width: "100%",
    borderRadius: 6,
    objectFit: "fill",
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
