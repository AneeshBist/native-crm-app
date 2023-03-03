import React, { useEffect, useState } from "react";
import { Keyboard, TextInput, View, Button, Text } from "react-native";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

const onSubmit = (seconds) => {
  Keyboard.dismiss();
  const schedulingOptions = {
    content: {
      title: "Customer Update",
      body: "Remeber to check the customers and update accordingly.",
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: "blue",
    },
    trigger: {
      seconds: seconds,
    },
  };
  Notifications.scheduleNotificationAsync(schedulingOptions);
};

const handleNotification = () => {
  console.warn("Your notification ran, but won`t show up in the app!");
};

const askNotification = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  if (Constants.isDevice && status === "granted")
    console.log("Notification permissions granted.");
};

const Notification = () => {
  useEffect(() => {
    askNotification();

    const listener =
      Notifications.addNotificationReceivedListener(handleNotification);
    return () => listener.remove();
  }, []);
  console.log("running notifuications");
  return onSubmit(10);
};

export default Notification;
