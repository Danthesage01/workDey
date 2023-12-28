import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Button from "../../../components/ui/Button";
import { useNavigation } from "@react-navigation/native";

const SearchResultScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionText}>House Cleaning Service</Text>

      <View style={[styles.row, styles.rowWrapper1, styles.view]}>
        <View style={styles.serviceImgWrapper}>
          <Image
            source={require("../../../../assets/service-img1.png")}
            style={styles.serviceImg}
          />
        </View>
        <View style={styles.serviceText}>
          <View style={[styles.row, styles.rowWrapper2]}>
            <Text style={styles.name}>Mohammed Abdulkareem </Text>
          </View>
          <Text style={styles.rendering}>Plumber</Text>
          <View style={[styles.row, styles.rowWrapper2]}>
            <View style={[styles.row, styles.card_footer]}>
              <Image source={require("../../../../assets/black_star.png")} />
              <Text>4.8</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.extra_view, styles.column]}>
        <Text style={styles.view_header}>Your Address</Text>
        <Text style={styles.view_textDescription}>
          Suite 7 Rujoda Plaza Opposite old Benny Rose Guest House, Lugbe Abuja.
        </Text>
      </View>
      <View style={[styles.view, styles.column]}>
        <Text style={styles.view_header}>Your Contact Details</Text>
        <Text style={styles.view_textDescription}>08100885736</Text>
      </View>
      <View style={[styles.view, styles.column]}>
        <Text style={styles.view_header}>Date and Time</Text>
        <Text style={styles.view_header}>2/12/2023 6:30PM</Text>
      </View>
      <View style={[styles.view, styles.column]}>
        <Text style={styles.view_header}>Private Note</Text>
        <Text style={styles.view_textDescription}>
          This is a little description on mr kent where you get to know more and
          understand more about his service and how it best fit your challenge
        </Text>
      </View>

      <View style={[styles.row, styles.rowWrapper3]}>
        <Text style={styles.price}>N13,500</Text>
        <View style={styles.payment}>
          <Text style={styles.payment_method}> Cash Payment</Text>
        </View>
      </View>
      <View style={[styles.extra_view]}>
        <Button
          onPress={() => {
            console.log("run am");
          }}
        >
          Confirm
        </Button>
      </View>
    </ScrollView>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },

  subtitle: {
    marginVertical: 5,
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  view: {
    marginVertical: 15,
  },
  extra_view: {
    marginTop: 50,
  },
  image: {
    flex: 0.7,
    width: "100%",
  },
  sectionText: {
    fontSize: 16,
    fontWeight: "700",
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
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginVertical: 10,
  },
  rowWrapper2: {
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    paddingVertical: 5,
  },
  rowWrapper3: {
    alignItems: "center",
    gap: 15,
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginVertical: 10,
  },
  serviceImgWrapper: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },
  serviceText: {
    width: 225,
    alignSelf: "stretch",
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
  name: {
    fontSize: 14,
    fontWeight: "500",
  },
  rendering: {
    paddingVertical: 5,
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
  price: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "800",
  },
  payment: {
    backgroundColor: "#e7fdee",
    borderRadius: 2,
    paddingVertical: 15,
    width: 150,
    borderRadius: 4,
  },
  payment_method: {
    color: "#169440",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});
