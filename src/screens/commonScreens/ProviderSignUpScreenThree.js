import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/ui/Button";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const ProviderSignupThree = () => {
  const navigation = useNavigation();
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);
  const [openModal6, setOpenModal6] = useState(false);

  const services = ["Plumber", "Carpenter", "Cleaner", "Handyman"];
  const [selectedServices, setSelectServices] = useState([]);

  function checkServices(service) {
    if (selectedServices.includes(service)) {
      setSelectServices(selectedServices.filter((item) => item !== service));
      return;
    }
    setSelectServices(selectedServices.concat(service));
  }
  const renderModal1 = () => {
    return (
      <Modal
        visible={openModal1}
        animationType="slide"
        // transparent={true}
      >
        <View style={styles.viewModal}>
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              width: "100%",
              height: "100%",
            }}
          >
            <View style={styles.modalLayer1}>
              <Text style={styles.modalHeaderText}>Select services</Text>
              <Text style={styles.modalHeaderText}>you offer</Text>
            </View>
            {services.map((service) => (
              <Pressable
                key={service}
                onPress={() => checkServices(service)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "white",
                  elevation: 1,
                  shadowColor: "black",
                  shadowOffset: { width: 1, height: 1 },
                  shadowOpacity: 0.15,
                  shadowRadius: 2,
                  marginVertical: 8,
                  paddingVertical: 18,
                  paddingHorizontal: 15,
                  gap: 5,
                }}
              >
                <Ionicons
                  name="md-checkmark-circle-outline"
                  size={30}
                  color={
                    selectedServices.includes(service) ? "#1861D9" : "#ccc"
                  }
                />
                <Text style={{ fontSize: 20 }}>{service}</Text>
              </Pressable>
            ))}
            <View style={styles.modalLayer4}>
              <Button onPress={() => setOpenModal1(false)}>
                Select Services
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  const renderModal2 = () => {
    return (
      <Modal
        visible={openModal2}
        animationType="slide"
        // transparent={true}
      >
        <View style={styles.viewModal}>
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              width: "100%",
              height: "100%",
            }}
          >
            <View style={styles.modalLayer1}>
              <Text style={styles.modalHeaderText}>Biography</Text>
            </View>
            <View style={styles.modalLayer4}>
              <Button onPress={() => setOpenModal2(false)}>
                Submit Biography
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  const renderModal3 = () => {
    return (
      <Modal
        visible={openModal3}
        animationType="slide"
        // transparent={true}
      >
        <View style={styles.viewModal}>
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              width: "100%",
              height: "100%",
            }}
          >
            <View style={styles.modalLayer1}>
              <Text style={styles.modalHeaderText}>Screening Questions</Text>
            </View>
            <View style={styles.modalLayer4}>
              <Button onPress={() => setOpenModal3(false)}>
                Submit Answers
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  const renderModal4 = () => {
    return (
      <Modal
        visible={openModal4}
        animationType="slide"
        // transparent={true}
      >
        <View style={styles.viewModal}>
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              width: "100%",
              height: "100%",
            }}
          >
            <View style={styles.modalLayer1}>
              <Text style={styles.modalHeaderText}>Profile Picture</Text>
            </View>
            <View style={styles.modalLayer4}>
              <Button onPress={() => setOpenModal4(false)}>
                Upload Picture
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  const renderModal5 = () => {
    return (
      <Modal
        visible={openModal5}
        animationType="slide"
        // transparent={true}
      >
        <View style={styles.viewModal}>
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              width: "100%",
              height: "100%",
            }}
          >
            <View style={styles.modalLayer1}>
              <Text style={styles.modalHeaderText}>Availability</Text>
            </View>
            <View style={styles.modalLayer4}>
              <Button onPress={() => setOpenModal5(false)}>
                Update Availability
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  const renderModal6 = () => {
    return (
      <Modal
        visible={openModal6}
        animationType="slide"
        // transparent={true}
      >
        <View style={styles.viewModal}>
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              width: "100%",
              height: "100%",
            }}
          >
            <View style={styles.modalLayer1}>
              <Text style={styles.modalHeaderText}>Background Check</Text>
            </View>
            <View style={styles.modalLayer4}>
              <Button onPress={() => setOpenModal6(false)}>
                Update Details
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.layer1}>
        <Text style={styles.headerText}>Complete</Text>
        <Text style={styles.headerText}>your Application</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.profile}>
          <Pressable
            style={styles.childProfile}
            onPress={() => setOpenModal1(true)}
          >
            <View style={styles.childOne}>
              <Ionicons
                name="md-checkmark-circle-outline"
                size={30}
                color={selectedServices.length > 0 ? "#1861D9" : "#ccc"}
              />
              <Text>Select Services</Text>
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
            onPress={() => setOpenModal2(true)}
          >
            <View style={styles.childOne}>
              <Ionicons
                name="md-checkmark-circle-outline"
                size={30}
                color="#ccc"
              />
              <Text>Biography</Text>
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
            onPress={() => setOpenModal3(true)}
          >
            <View style={styles.childOne}>
              <Ionicons
                name="md-checkmark-circle-outline"
                size={30}
                color="#ccc"
              />
              <Text>Screening Questions</Text>
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
            onPress={() => setOpenModal4(true)}
          >
            <View style={styles.childOne}>
              <Ionicons
                name="md-checkmark-circle-outline"
                size={30}
                color="#ccc"
              />
              <Text>Profile Picture</Text>
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
            onPress={() => setOpenModal5(true)}
          >
            <View style={styles.childOne}>
              <Ionicons
                name="md-checkmark-circle-outline"
                size={30}
                color="#ccc"
              />
              <Text>Availability</Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={20}
              color="black"
            />
          </Pressable>
        </View>
        <View style={styles.profileLast}>
          <Pressable
            style={styles.childProfile}
            onPress={() => setOpenModal6(true)}
          >
            <View style={styles.childOne}>
              <Ionicons
                name="md-checkmark-circle-outline"
                size={30}
                color="#ccc"
              />
              <Text>Background Check</Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={20}
              color="black"
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.layer4}>
        <Button onPress={() => {}}>Create Account</Button>
      </View>
      {renderModal1()}
      {renderModal2()}
      {renderModal3()}
      {renderModal4()}
      {renderModal5()}
      {renderModal6()}
    </View>
  );
};

export default ProviderSignupThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#fff",
  },
  layer1: {
    marginTop: 50,
    padding: 15,
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
    borderTopWidth: 1,
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
