import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SearchResultScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.subtitle}>26 results for</Text>

      <Pressable
        style={[styles.pressable, styles.view]}
        onPress={() => {
          navigation.navigate("ServiceProviderDetail");
        }}
      >
        <View style={[styles.row, styles.rowWrapper1, styles.serviceCard]}>
          <View style={styles.serviceImgWrapper}>
            <Image
              source={require("../../../../assets/service-img1.png")}
              style={styles.serviceImg}
            />
          </View>
          <View style={styles.serviceText}>
            <View style={[styles.row, styles.rowWrapper2]}>
              <Text style={styles.name}>Mohammed Abdulkareem </Text>
              <Text style={styles.distance}>1.2km </Text>
            </View>
            <Text style={styles.rendering}>House Cleaner</Text>
            <Text style={styles.customers}>104 customers</Text>
            <View style={[styles.row, styles.rowWrapper2]}>
              <View style={[styles.row, styles.card_footer]}>
                <Image source={require("../../../../assets/star.png")} />
                <Text>4.8</Text>
              </View>
              <Text>N13,200</Text>
            </View>
          </View>
        </View>
      </Pressable>

      <Pressable style={[styles.pressable, styles.view]}>
        <View style={[styles.row, styles.rowWrapper1, styles.serviceCard]}>
          <View style={styles.serviceImgWrapper}>
            <Image
              source={require("../../../../assets/artisan3.png")}
              style={styles.serviceImg}
            />
          </View>
          <View style={styles.serviceText}>
            <View style={[styles.row, styles.rowWrapper2]}>
              <Text style={styles.name}>Mohammed Abdulkar </Text>
              <Text style={styles.distance}>1.2km </Text>
            </View>
            <Text style={styles.rendering}>House Cleaner</Text>
            <Text style={styles.customers}>104 customers</Text>
            <View style={[styles.row, styles.rowWrapper2]}>
              <View style={[styles.row, styles.card_footer]}>
                <Image source={require("../../../../assets/star.png")} />
                <Text>4.8</Text>
              </View>
              <Text>N13,200</Text>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.pressable, styles.view]}>
        <View style={[styles.row, styles.rowWrapper1, styles.serviceCard]}>
          <View style={styles.serviceImgWrapper}>
            <Image
              source={require("../../../../assets/artisan5.png")}
              style={styles.serviceImg}
            />
          </View>
          <View style={styles.serviceText}>
            <View style={[styles.row, styles.rowWrapper2]}>
              <Text style={styles.name}>Olorunfemi Olawale </Text>
              <Text style={styles.distance}>1.2km </Text>
            </View>
            <Text style={styles.rendering}>House Cleaner</Text>
            <Text style={styles.customers}>104 customers</Text>
            <View style={[styles.row, styles.rowWrapper2]}>
              <View style={[styles.row, styles.card_footer]}>
                <Image source={require("../../../../assets/star.png")} />
                <Text>4.8</Text>
              </View>
              <Text>N13,200</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default SearchResultScreen;

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
    elevation: 1,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
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
  rowWrapper1: {
    alignItems: "center",
    gap: 15,
  },
  rowWrapper2: {
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
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
});
