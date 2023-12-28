import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserHomeScreen from "../../screens/userScreens/UserHomeScreen";
import FindServiceScreen from "../../screens/userScreens/FindServiceScreen";
import AppointmentScreen from "../../screens/userScreens/AppointmentScreen";
import { MaterialIcons, SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import ProfileScreen from "../../screens/userScreens/ProfileScreen";
import PostRequestScreen from "../../screens/userScreens/requests/PostRequestScreen";
import SearchResultScreen from "../../screens/userScreens/search/SearchResultScreen";
import AllRequestScreen from "../../screens/userScreens/requests/AllRequestScreen";
import ConfirmBooking from "../../screens/userScreens/search/ConfirmBooking";
import UserLoginScreen from "../../screens/commonScreens/UserLoginScreen";
import UserSignupScreen from "../../screens/commonScreens/UserSignupScreen";
import ProviderSignupScreen from "../../screens/commonScreens/ProviderSignupScreen";
import ServiceProviderDetails from "../../screens/userScreens/search/ServiceProviderDetails";
import BookAppointmentScreen from "../../screens/userScreens/search/BookAppointmentScreen";
import { Image } from "react-native";
import ChatScreen from "../../screens/userScreens/search/ChatScreen";
import PersonalDetailsScreen from "../../screens/userScreens/profile/PersonalDetailsScreen";
import ReferralScreen from "../../screens/userScreens/profile/ReferralScreen";
import PaymentScreen from "../../screens/userScreens/profile/PaymentScreen";
import HelpScreen from "../../screens/userScreens/profile/HelpSupport";
import AboutScreen from "../../screens/userScreens/profile/AboutSewa";

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

export function UserAuthOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "white" },
        tabBarStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: "blue",
      })}
    >
      <BottomTabs.Screen
        name="Home"
        component={UserHomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarActiveTintColor: "#1861D9",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={require("../../../assets/active_home.png")} />
            ) : (
              <Image source={require("../../../assets/inactive_home.png")} />
            ),
        }}
      />
      <BottomTabs.Screen
        name="FindService"
        component={FindServiceScreen}
        options={{
          title: "",
          tabBarLabel: "Service",
          tabBarActiveTintColor: "#1861D9",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={require("../../../assets/active_work.png")} />
            ) : (
              <Image source={require("../../../assets/inactive_work.png")} />
            ),
        }}
      />
      <BottomTabs.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          title: "Appointments",
          headerBack: true,
          tabBarLabel: "Appointment",
          tabBarActiveTintColor: "#1861D9",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={require("../../../assets/active_app.png")} />
            ) : (
              <Image source={require("../../../assets/inactive_app.png")} />
            ),
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "",
          tabBarLabel: "Profile",
          tabBarActiveTintColor: "#1861D9",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={require("../../../assets/active_profile.png")} />
            ) : (
              <Image source={require("../../../assets/inactive_profile.png")} />
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
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={{
          title: "Search Results",
        }}
      />
      <Stack.Screen
        name="ServiceProviderDetail"
        component={ServiceProviderDetails}
        // options={{ headerShown: false }}
        options={{
          title: "Service Provider Details",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="BookAppointment"
        component={BookAppointmentScreen}
        options={{
          title: "Book an Appointment",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="ConfirmBooking"
        component={ConfirmBooking}
        options={{
          title: "Book an Appointment",
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="Chat"
        component={ChatScreen}
      />
      <Stack.Screen
        name="PersonalDetails"
        component={PersonalDetailsScreen}
        options={{
          title: "Personal Details",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Referral"
        component={ReferralScreen}
        options={{
          title: "Referrals",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          title: "Payment",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "About",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Help"
        component={HelpScreen}
        options={{
          title: "Help",
          headerBackTitleVisible: false,
        }}
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
