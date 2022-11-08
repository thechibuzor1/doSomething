import React, { useRef, useState } from "react";
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

export default function Main({ navigation }) {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get("window");
  const scrollViewRef = useRef(null);

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
          ref={scrollViewRef}
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
          <TouchableOpacity
            onPress={() => {
              scrollViewRef.current?.scrollTo({ x: width * 0, animated: true });
            }}
          >
            <FontAwesomeIcon icon={solid("house")} color={"white"} size={25} />
            <View
              key={0}
              style={[
                styles.semiCircle,
                { opacity: pageIndex === 0 ? 1 : 0.2 },
              ]}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              scrollViewRef.current?.scrollTo({ x: width * 1, animated: true });
            }}
          >
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
            <View key={1} style={[styles.semiCircle, { opacity: 0 }]}></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              scrollViewRef.current?.scrollTo({ x: width * 2, animated: true });
            }}
          >
            <FontAwesomeIcon
              icon={pageIndex === 2 ? solid("bell") : regular("bell")}
              color={"white"}
              size={25}
            />
            <View
              key={2}
              style={[
                styles.semiCircle,
                { opacity: pageIndex === 2 ? 1 : 0.2 },
              ]}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              scrollViewRef.current?.scrollTo({ x: width * 3, animated: true });
            }}
          >
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
