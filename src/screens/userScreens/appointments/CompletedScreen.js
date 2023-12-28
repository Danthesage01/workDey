import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";

const CompletedScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.profileLast]}>
        <View
          style={[
            styles.row,
            styles.rowWrapper1,
            styles.serviceCard,
            styles.view,
          ]}
        >
          <View style={styles.serviceImgWrapper}>
            <Image
              source={require("../../../../assets/service-img3.png")}
              style={styles.serviceImg}
            />
          </View>
          <View style={styles.serviceText}>
            <Text style={styles.name}>Mohammed Abdulkareem </Text>
            <Text style={styles.rendering}>House Cleaner</Text>
            <View style={[styles.row, styles.card_footer]}>
              <Text style={styles.rendering}>2/12/2023</Text>
              <Text style={styles.rendering}>6:30 P.M</Text>
            </View>
            <View style={[styles.row, styles.rowWrapper2]}>
              <Text style={styles.price}>N13,500</Text>
              <View style={[styles.payment, styles.paid_bg]}>
                <Text style={[styles.payment_method, styles.paid_text]}>
                  Paid
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CompletedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  profileLast: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%",
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
    paddingHorizontal: 20,
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
    fontSize: 13,
    fontWeight: "200",
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
  view: {
    marginVertical: 10,
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
  price: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "800",
  },
  payment: {
    borderRadius: 2,
    paddingVertical: 7,
    width: 68,
    borderRadius: 4,
    borderRadius: "50%",
  },
  payment_method: {
    color: "#169440",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  paid_text: {
    color: "#169440",
  },
  paid_bg: {
    backgroundColor: "#e7fdee",
  },
  unpaid_text: {
    color: "#333333",
  },
  unpaid_bg: {
    backgroundColor: "#f9f9f9",
  },
  rowWrapper2: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 20,
    paddingVertical: 10,
  },
});
