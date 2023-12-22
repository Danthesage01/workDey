import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserHomeScreen from "../../screens/userScreens/UserHomeScreen";
import FindServiceScreen from "../../screens/userScreens/FindServiceScreen";
import AppointmentScreen from "../../screens/userScreens/AppointmentScreen";
import { MaterialIcons, SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import ProfileScreen from "../../screens/userScreens/ProfileScreen";
import PostRequestScreen from "../../screens/userScreens/PostRequestScreen";
import AllRequestScreen from "../../screens/userScreens/AllRequestScreen";
import UserLoginScreen from "../../screens/commonScreens/UserLoginScreen";
import UserSignupScreen from "../../screens/commonScreens/UserSignupScreen";
import ProviderSignupScreen from "../../screens/commonScreens/ProviderSignupScreen";
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function CommonNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserLogin"
        component={UserLoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserSignup"
        component={UserSignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProviderSignup"
        component={ProviderSignupScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function UserAuthOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: "blue",

        // headerRight: ({ tintColor }) => (
        //   <IconButton
        //     icon="add"
        //     size={24}
        //     color={tintColor}
        //     onPress={() => {
        //       navigation.navigate("ManageExpense");
        //     }}
        //   />
        // ),
      })}
    >
      <BottomTabs.Screen
        name="Home"
        component={UserHomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="FindService"
        component={FindServiceScreen}
        options={{
          title: "",
          tabBarLabel: "Find Service",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="work-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          title: "",
          tabBarLabel: "Appointment",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons
              name="note"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="person-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

const UserNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserAuthOverview"
        component={UserAuthOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostRequest"
        component={PostRequestScreen}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AllRequest"
        component={AllRequestScreen}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CommonNavigator"
        component={CommonNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default UserNavigator;
