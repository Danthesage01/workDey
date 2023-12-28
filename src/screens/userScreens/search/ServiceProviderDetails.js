import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import Button from "../../../components/ui/Button";
import { useNavigation } from "@react-navigation/native";

const ServiceProviderDetails = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
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
            source={require("../../../../assets/service-img1.png")}
            style={styles.serviceImg}
          />
        </View>
        <View style={styles.serviceText}>
          <Text style={styles.name}>Mohammed Abdulkareem </Text>
          <Text style={styles.rendering}>House Cleaner</Text>
          <View style={[styles.row, styles.rowWrapper2]}>
            <View style={[styles.row, styles.card_footer]}>
              <Image source={require("../../../../assets/black_star.png")} />
              <Text>4.8</Text>
            </View>
            <Pressable
              onPress={() => {
                navigation.navigate("Chat");
              }}
              style={[styles.row, styles.card_footer]}
            >
              <Image source={require("../../../../assets/chat.png")} />
              <Text>Chat</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.view}>
        <View style={styles.row}>
          <Text style={styles.view_header}>Status:</Text>
          <Text style={styles.view_available}>Available</Text>
        </View>
        <View style={[styles.row, styles.service_list]}>
          <Text style={styles.view_header}>Services:</Text>
          <Text style={styles.view_text}>Plumbing, Mason</Text>
        </View>
      </View>
      <View style={[styles.view, styles.column]}>
        <Text style={styles.view_header}>Description</Text>
        <Text style={styles.view_textDescription}>
          This is a little description on mr kent where you get to know more and
          understand more about his service and how it best fit your challenge
        </Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.headerText}>Ratings and Reviews</Text>
        <Text style={styles.sectionText}>61 reviews 104 customers</Text>
        <View style={[styles.row, styles.rowRating]}>
          <Text>5</Text>
          <Image source={require("../../../../assets/star.png")} />
          <Image source={require("../../../../assets/5.png")} />
          <Text>(8)</Text>
        </View>
        <View style={[styles.row, styles.rowRating]}>
          <Text>4</Text>
          <Image source={require("../../../../assets/star.png")} />
          <Image source={require("../../../../assets/4.png")} />
          <Text>(23)</Text>
        </View>
        <View style={[styles.row, styles.rowRating]}>
          <Text>3</Text>
          <Image source={require("../../../../assets/star.png")} />
          <Image source={require("../../../../assets/5.png")} />
          <Text>(1)</Text>
        </View>
        <View style={[styles.row, styles.rowRating]}>
          <Text>2</Text>
          <Image source={require("../../../../assets/star.png")} />
          <Image source={require("../../../../assets/5.png")} />
          <Text>(2)</Text>
        </View>
        <View style={[styles.row, styles.rowRating]}>
          <Text>1</Text>
          <Image source={require("../../../../assets/star.png")} />
          <Image source={require("../../../../assets/1.png")} />
          <Text>(0)</Text>
        </View>
      </View>
      <View style={styles.view}>
        <View style={[styles.row, styles.rowRating]}>
          <Image source={require("../../../../assets/Ellipse.png")} />
          <View>
            <Text style={styles.name}>Emmanuel Avoseh</Text>
            <Text style={styles.sectionText}>01/02/2023</Text>
          </View>
        </View>
        <Text>
          Very experienced and professional. would definitely recommend to
          anyone. who needs a plumber
        </Text>
      </View>
      <View style={[styles.row, styles.rowFooter]}>
        <Text style={styles.footer_price}>N1000</Text>
        <View>
          <Button
            onPress={() => {
              navigation.navigate("BookAppointment");
            }}
          >
            Book an Appointment
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default ServiceProviderDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
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
  rowRating: {
    alignItems: "center",
    gap: 5,
    paddingVertical: 8,
  },
  rowFooter: {
    alignItems: "center",
    justifyContent: "space-around",
    gap: 5,
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
});
