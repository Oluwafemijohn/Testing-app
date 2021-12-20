import React from "react";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from "react-native-popup-menu";
import { Text, TouchableHighlight, View } from "react-native";

export const YourComponent = () => (
  <Menu onSelect={(value) => alert(`Selected number: ${value}`)}>
    <MenuTrigger text="Select option" />
    <MenuOptions>
      <MenuOption value={1} text="One" />
      <MenuOption value={2}>
        <Text style={{ color: "red" }}>Two</Text>
      </MenuOption>
      <MenuOption value={3} disabled={true} text="Three" />
    </MenuOptions>
  </Menu>
);
