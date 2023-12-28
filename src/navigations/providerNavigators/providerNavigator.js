import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppointmentScreen from "../../screens/userScreens/AppointmentScreen";
import { MaterialIcons, SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import ProfileScreen from "../../screens/providerScreens/ProviderProfileScreen";
import ProviderHomeScreen from "../../screens/providerScreens/ProviderHomeScreen";
import ProviderWalletScreen from "../../screens/providerScreens/ProviderWalletScreen";
import ProviderRequestScreen from "../../screens/providerScreens/ProviderRequestScreen";
import UserLoginScreen from "../../screens/commonScreens/UserLoginScreen";
import UserSignupScreen from "../../screens/commonScreens/UserSignupScreen";
import ProviderSignupScreen from "../../screens/commonScreens/ProviderSignupScreen";
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ProviderCommonNavigator() {
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

export function ProviderAuthOverview() {
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
        component={ProviderHomeScreen}
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
        name="Post Requests"
        component={ProviderRequestScreen}
        options={{
          title: "",
          tabBarLabel: "Post Requests",
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
        name="Wallet"
        component={ProviderWalletScreen}
        options={{
          title: "",
          tabBarLabel: "Wallet",
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

const ProviderNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProviderAuthOverview"
        component={ProviderAuthOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProviderCommonNavigator"
        component={ProviderCommonNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProviderNavigator;
