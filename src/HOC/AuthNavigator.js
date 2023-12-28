import { useState } from "react";
import UserNavigator from "../navigations/userNavigators/userNavigator";
import ProviderNavigator from "../navigations/providerNavigators/providerNavigator";
import { useSelector } from "react-redux";
import { selectFromAuth } from "../features/auth/authSlice";
const AuthNavigator = () => {
  const auth = useSelector(selectFromAuth);
  return auth.user.artisan === null ? <UserNavigator /> : <ProviderNavigator />;
  // const [appUser, setAppUser] = useState("user");
  // return appUser === "user" ? <UserNavigator /> : <ProviderNavigator />;
};

export default AuthNavigator;
