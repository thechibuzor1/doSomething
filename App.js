import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Home from "./screens/Home";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";

export default function App() {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get("window");

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.round(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
    console.log(currentPage);
  };
  const { currentPage: pageIndex } = sliderState;

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          onScroll={(event: any) => {
            setSliderPage(event);
          }}
          showsHorizontalScrollIndicator={false}
        >
          <View style={{ width, height }}>
            <Home />
          </View>
          <View style={{ width, height }}>
            <Screen2 />
          </View>
          <View style={{ width, height }}>
            <Screen3 />
          </View>
          <View style={{ width, height }}>
            <Screen4 />
          </View>
        </ScrollView>
        <View style={styles.container}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={solid("house")} color={"white"} size={25} />
            <View
              key={0}
              style={[
                styles.semiCircle,
                { opacity: pageIndex === 0 ? 1 : 0.2 },
              ]}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon
              icon={solid("receipt")}
              color={"white"}
              size={25}
            />
            <View
              key={1}
              style={[
                styles.semiCircle,
                { opacity: pageIndex === 1 ? 1 : 0.2 },
              ]}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon
              icon={solid("circle-plus")}
              color={"blue"}
              size={50}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon icon={solid("bell")} color={"white"} size={25} />
            <View
              key={2}
              style={[
                styles.semiCircle,
                { opacity: pageIndex === 2 ? 1 : 0.2 },
              ]}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon
              icon={solid("magnifying-glass")}
              color={"white"}
              size={25}
            />
            <View
              key={3}
              style={[
                styles.semiCircle,
                { opacity: pageIndex === 3 ? 1 : 0.2 },
              ]}
            ></View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    paddingVertical: 7,
    marginBottom: "5%",
    paddingHorizontal: 8,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
    alignContent: "center",
    position: "absolute",
    bottom: 5,
    zIndex: 999,
  },
  semiCircle: {
    marginTop: 15,
    width: "100%",
    height: 10,
    borderRadius: 15,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
