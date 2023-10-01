import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = ({ navigation }) => {
  return (
    <View>
      <SafeAreaView>
        <Text style={{ fontSize: 20 }}>Settings</Text>
      </SafeAreaView>
    </View>
  );
};

export default SettingsScreen;
