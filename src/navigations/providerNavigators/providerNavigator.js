import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProviderHomeScreen from "../../screens/providerScreens/ProviderHomeScreen";

const Stack = createNativeStackNavigator();

const ProviderNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProviderHome"
        component={ProviderHomeScreen}
      />
    </Stack.Navigator>
  );
};

export default ProviderNavigator;
