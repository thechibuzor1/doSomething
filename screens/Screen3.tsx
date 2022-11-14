import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { demoNotifications } from "../data";
import { Divider } from "react-native-elements";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
const Screen3 = ({ navigation }) => {
  const Notification = ({ props }) => (
    <View>
      <Text style={{ color: "gray", marginLeft: 30 }}>{props.header}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: 15,
          marginTop: 10,
          width: "90%",
          alignSelf: "center",
          marginBottom: 30,
        }}
      >
        <Image
          source={{ uri: props.profile }}
          style={{
            height: 40,
            width: 40,
            marginRight: 15,
            borderRadius: 20,
            alignSelf: "center",
          }}
        />

        <View style={{ flex: 1, marginRight: 15 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>
              {props.username}
            </Text>
            <Text
              style={{
                color: props.color,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {props.date}
            </Text>
          </View>
          <Text style={{ color: "gray", marginTop: 5 }}>{props.body}</Text>
        </View>
      </View>
      <Divider
        width={0.4}
        color={"gray"}
        style={{ marginBottom: 15, width: "90%", alignSelf: "center" }}
      />
    </View>
  );

  return (
    <>
      <StatusBar barStyle="default" />
      <View
        style={{
          backgroundColor: "black",
          flex: 1,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              marginLeft: 30,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: "gray",
              height: 30,
              justifyContent: "center",
            }}
            onPress={() => navigation.goBack()}
          >
            <FontAwesomeIcon
              icon={solid("arrow-left")}
              size={15}
              color={"white"}
              style={{ marginHorizontal: 5, marginVertical: 5 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Notification
          </Text>
          <Image
            source={require("../assets/octocat.png")}
            style={{
              height: 40,
              width: 40,
              marginRight: 25,
              borderRadius: 20,
            }}
          />
        </View>
        <Animated.ScrollView
          style={{
            marginTop: 30,
          }}
          /* onScrollBeginDrag={() => setNavVisible(false)}
        onScroll */
          scrollEventThrottle={16}
        >
          {demoNotifications.map((data, index) => (
            <Notification key={index} props={data} />
          ))}
        </Animated.ScrollView>
      </View>
    </>
  );
};

export default Screen3;

const styles = StyleSheet.create({});
