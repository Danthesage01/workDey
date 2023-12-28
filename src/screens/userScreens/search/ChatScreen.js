import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ChatScreen = () => {
  const navigation = useNavigation();
  const [chat, setChat] = useState("");

  useEffect(() => {
    navigation.setOptions({
      title: "Mohammad Abdulkareem",
      headerBackTitleVisible: false,
      // headerRight: () => {
      //   return (
      //     <Image
      //       source={require("../../../assets/date.png")}
      //       style={styles.serviceImg}
      //     />
      //   );
      // },
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Pressable style={[styles.row, styles.view_time]}>
          <Text style={styles.view_text}>Mon, May 04</Text>
        </Pressable>
        <Text style={[styles.view_text, styles.view_wrapper]}>
          Send a message to Mohammad Abdulkareem Informing him/her about any
          specific needs
        </Text>
      </View>
      <ScrollView>
        <View></View>
        <View></View>
        <View style={[styles.row, styles.rowFooter]}>
          <TextInput
            style={[styles.input, styles.text_input]}
            autoCapitalize="sentences"
            keyboardType="default"
            value={chat}
            placeHolder="I need a Mechanic to fix my car"
            onChangeText={(text) => setChat(text)}
          />
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={() => {
              console.log(chat);
            }}
          >
            <View>
              <Text style={styles.buttonText}>Send</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChatScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
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
    justifyContent: "space-between",
    gap: 5,
    marginTop: 150,
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

  view_text: {
    color: "#979797",
    fontSize: 12,
  },
  view_wrapper: {
    width: 280,
    textAlign: "center",
  },
  view_time: {
    backgroundColor: "#ffffff",
    width: 90,
    height: 35,
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
    justifyContent: "center",
  },
  button: {
    borderRadius: 6,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#1861D9",
    width: "30%",
    backgroundColor: "#1861D9",
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 6,
    backgroundColor: "#f3f3f3",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#f3f3f3",
    fontSize: 16,
    marginVertical: 10,
    color: "#000",
    width: "65%",
  },
  text_input: {
    backgroundColor: "#f9f9f9",
    color: "#636363",
  },
});
