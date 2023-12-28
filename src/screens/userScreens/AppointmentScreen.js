import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UpcomingScreen from "./appointments/UpcomingScreen";
import PendingScreen from "./appointments/PendingScreen";
import CompletedScreen from "./appointments/CompletedScreen";

const Tab = createMaterialTopTabNavigator();

export default function AppointmentScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#1861d9",
        tabBarInactiveTintColor: "#505050",
      }}
    >
      <Tab.Screen
        name="UPCOMING"
        component={UpcomingScreen}
      />
      <Tab.Screen
        name="PENDING"
        component={PendingScreen}
      />
      <Tab.Screen
        name="COMPLETED"
        component={CompletedScreen}
      />
    </Tab.Navigator>
  );
}
