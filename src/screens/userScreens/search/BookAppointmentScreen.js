import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import Button from "../../../components/ui/Button";
import { useNavigation } from "@react-navigation/native";
const BookAppointmentScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionText}>House Cleaning Service</Text>
      <View style={[styles.view, styles.column]}>
        <Text style={styles.view_header}>Your Address</Text>
        <Text style={styles.view_textDescription}>
          Suite 7 Rujoda Plaza Opposite old Benny Rose Guest House, Lugbe Abuja.
        </Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.headerText}>Select Booking Date and Time</Text>
        <View style={[styles.row, styles.rowRating]}>
          <Pressable style={[styles.row, styles.view_date]}>
            <Image source={require("../../../../assets/date.png")} />
            <Text style={{ color: "#ccc" }}>Date</Text>
          </Pressable>
          <Pressable style={[styles.row, styles.view_time]}>
            <Image source={require("../../../../assets/timer.png")} />
            <Text>Select Time</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Text style={styles.headerText}>Payment Method</Text>
        <Pressable
          style={({ pressed }) => [
            styles.row,
            styles.button,
            pressed && styles.pressed,
          ]}
        >
          <Image source={require("../../../../assets/visa.png")} />
          <View style={[styles.row, styles.mini_button]}>
            <Text style={styles.button_text}>6789 **** **** 1234</Text>
            <Image source={require("../../../../assets/check.png")} />
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.row,
            styles.button,
            pressed && styles.pressed,
          ]}
        >
          <Image source={require("../../../../assets/method-1.png")} />
          <View style={styles.row}>
            <Text style={styles.button_text}>Use a New Card</Text>
            <Image />
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.row,
            styles.button,
            pressed && styles.pressed,
          ]}
        >
          <Image source={require("../../../../assets/method-2.png")} />
          <View style={styles.row}>
            <Text style={styles.button_text}>Cash Payment</Text>
            <Image />
          </View>
        </Pressable>
      </View>

      <View style={[styles.view, styles.rowFooter]}>
        <Button
          onPress={() => {
            navigation.navigate("ConfirmBooking");
          }}
        >
          Book an Appointment
        </Button>
      </View>
    </ScrollView>
  );
};

export default BookAppointmentScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
    // justifyContent: "center",
  },
  pressable: {
    height: 120,
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  subtitle: {
    marginVertical: 5,
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  view: {
    marginVertical: 20,
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
  rowWrapper1: {
    alignItems: "center",
    gap: 15,
  },
  rowRating: {
    alignItems: "center",
    gap: 5,
    paddingVertical: 8,
  },
  rowFooter: {
    marginTop: 50,
  },
  footer_price: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1861D9",
  },
  rowWrapper2: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 20,
    paddingVertical: 10,
  },
  serviceImgWrapper: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },
  serviceText: {
    width: 225,
  },
  serviceImg: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
    objectFit: "cover",
  },
  card_footer: {
    gap: 5,
  },
  serviceCard: {
    alignItems: "flex-start",
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
  },
  rendering: {
    paddingVertical: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
  },
  view_header: {
    fontSize: 14,
    fontWeight: "500",
  },
  view_textDescription: {
    fontSize: 16,
    fontWeight: "200",
    maxWidth: 300,
  },
  sectionText: {
    fontSize: 16,
    fontWeight: "700",
  },
  view_available: {
    color: "#169440",
    marginLeft: 5,
    fontSize: 14,
  },
  view_text: {
    marginLeft: 5,
    fontSize: 14,
  },
  service_list: {
    marginTop: 5,
  },
  view_date: {
    backgroundColor: "#979797",
    backgroundColor: "#f9f9f9",
    width: 160,
    height: 52,
    borderRadius: 6,
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 8,
    marginVertical: 8,
    marginRight: 5,
  },
  view_time: {
    backgroundColor: "#ffffff",
    width: 160,
    height: 52,
    borderRadius: 6,
    alignItems: "center",
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
  button: {
    borderRadius: 6,
    paddingVertical: 15,
    paddingHorizontal: 12,
    alignItems: "center",
    minWidth: "70%",
    backgroundColor: "#fff",
    // justifyContent: "space-between",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0.6, height: 0.6 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    marginVertical: 20,
    gap: 10,
  },
  pressed: {
    opacity: 0.7,
    borderColor: "#1861D9",
    borderWidth: 1,
    borderStyle: "solid",
  },
  mini_button: {
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    width: "80%",
  },
  button_text: {
    color: "#1861D9",
    fontSize: 14,
  },
});
