import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import StackNavigator from "./src/navigations/StackNavigators/StackNavigator";
import AuthNavigator from "./src/HOC/AuthNavigator";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import { selectFromAuth, setAuth } from "./src/features/auth/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Navigation() {
  const dispatch = useDispatch();
  const auth = useSelector(selectFromAuth);
  console.log(auth, "AUTH");
  // const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        const jsonData = await AsyncStorage.getItem("userData");
        if (jsonData !== null) {
          const data = JSON.parse(jsonData);
          dispatch(setAuth(data));
        }
      } catch (error) {
        throw new Error(error);
      }
    };
    getData();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="default" />
      {auth?.token ? <AuthNavigator /> : <StackNavigator />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
