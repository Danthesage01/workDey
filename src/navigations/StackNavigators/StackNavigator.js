import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "../../screens/commonScreens/LandingPage";
import ProviderSignupScreen from "../../screens/commonScreens/ProviderSignupScreen";
import UserLoginScreen from "../../screens/commonScreens/UserLoginScreen";
import UserSignupScreen from "../../screens/commonScreens/UserSignupScreen";
import OTPScreen from "../../screens/commonScreens/OTPScreen";
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{ headerShown: false }}
      />
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

      {/* <Stack.Screen
        name="OTP"
        component={OTPScreen}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="ProviderSignup"
        component={ProviderSignupScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
