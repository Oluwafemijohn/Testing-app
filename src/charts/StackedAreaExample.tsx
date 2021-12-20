import React from "react";
import { AreaChart, StackedAreaChart } from "react-native-svg-charts";
import * as shape from "d3-shape";
import { string } from "yup/lib/locale";
import { LinearGradient } from "expo-linear-gradient";

export default class StackedAreaExample extends React.PureComponent {
  render() {
    const data = [
      {
        month: new Date(2015, 0, 1),
        apples: 3840,
        // bananas: 1920,
        // cherries: 960,
        // dates: 400,
      },
      {
        month: new Date(2015, 1, 1),
        apples: 1600,
        // bananas: 1440,
        // cherries: 960,
        // dates: 400,
      },
      {
        month: new Date(2015, 2, 1),
        apples: 640,
        // bananas: 960,
        // cherries: 3640,
        // dates: 400,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 3320,
        // bananas: 480,
        // cherries: 640,
        // dates: 400,
      },
    ];

    const colors = [
      "#8800cc",
      //  "#aa00ff",
      //  "#cc66ff",
      //   "#eeccff"
    ];
    const keys = [
      "apples",
      //  "bananas",
      //   "cherries",
      //    "dates"
    ];
    const svgs = [
      { onPress: () => console.log("apples") },
      // { onPress: () => console.log("bananas") },
      // { onPress: () => console.log("cherries") },
      // { onPress: () => console.log("dates") },
    ];

    return (
      <StackedAreaChart
        style={{ height: 200, paddingVertical: 16 }}
        data={data}
        keys={keys}
        colors={colors}
        curve={shape.curveNatural}
        showGrid={true}
        svgs={svgs}
        // renderGradient={({ id }) => (
        //   <LinearGradient id={id} x1={"0%"} y1={"0%"} x2={"0%"} y2={"100%"}>
        //     <Stop
        //       offset={"0%"}
        //       stopColor={"rgb(134, 65, 244)"}
        //       stopOpacity={0.8}
        //     />
        //     <Stop
        //       offset={"100%"}
        //       stopColor={"rgb(134, 65, 244)"}
        //       stopOpacity={0.2}
        //     />
        //   </LinearGradient>
        // )}
      />
    );
  }
}
// 0081038753
// 22204397292
