import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "../../screens/commonScreens/LandingPage";
import ProviderSignupScreenOne from "./ProviderSignUpScreenOne";
import ProviderSignupScreenTwo from "./ProviderSignUpScreenTwo";
import ProviderSignupScreenThree from "./ProviderSignUpScreenThree";
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProviderSignupOne"
        component={ProviderSignupScreenOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProviderSignupTwo"
        component={ProviderSignupScreenTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProviderSignupThree"
        component={ProviderSignupScreenThree}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
