import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import AreaChartExample from "./src/charts/AreaGraph";
import LinearGradientChart from "./src/charts/LinearGradientChart";
import StackedAreaExample from "./src/charts/StackedAreaExample";
import DatePickerExample from "./src/DatePickerExample";
// import ExpoCamera from './src/ExpoCamera';
import ExpoCamera2 from "./src/ExpoCamera2";
import ExpoModal from "./src/ExpoModal";
import ImageInterpolator from "./src/ImageInterpolator";
import ModalBasicUsage from "./src/ModalBasicUsage";
import { YourComponent } from "./src/ModalLibrary";
import ModalTester from "./src/ModalTester";
import TestFormik from "./src/TestFormik";
import TestingOnBLur from "./src/TestingOnBLur";
import MyPager from "./src/ViewPager";

export default function App() {
  return (
    <MenuProvider>
      <SafeAreaView>
        <View style={styles.container}>
          {/* <DatePickerExample /> */}
          {/* <MyPager /> */}

          {/* <ModalBasicUsage /> */}
          {/* <ExpoModal /> */}
          {/* <MyComponent /> */}
          {/* <Example /> */}
          {/* <TestingOnBLur /> */}
          {/* <MenuProvider> */}
          {/* <YourComponent /> */}
          {/* </MenuProvider> */}
          {/* <ModalTester /> */}
          {/* <ImageInterpolator /> */}
          {/* <AreaChartExample /> */}
          <StackedAreaExample />
          {/* <LinearGradientChart /> */}
        </View>
      </SafeAreaView>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
