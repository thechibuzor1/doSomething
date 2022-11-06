import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import * as Progress from "react-native-progress";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRocketchat, faSlideshare } from "@fortawesome/free-brands-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const Home = () => {
  const [active, setActive] = useState("Overview");
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          marginLeft: 15,
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "500",
            fontStyle: "normal",
          }}
        >
          Dashboard
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <FontAwesomeIcon
            icon={faRocketchat}
            size={25}
            style={{
              marginRight: 30,
              alignSelf: "center",
            }}
            color={"white"}
          />
          <Image
            source={require("../assets/octocat.png")}
            style={{
              height: 40,
              width: 40,
              marginRight: 15,
              borderRadius: 20,
            }}
          />
        </View>
      </View>

      <Text
        style={{
          fontSize: 27,
          fontWeight: "bold",
          fontStyle: "normal",

          color: "white",
          marginLeft: 15,
        }}
      >
        Hello,{"\n"}Derek Doyle 👋
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: 15,
          marginTop: 30,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => setActive("Overview")}
            style={{
              backgroundColor: active == "Overview" ? "blue" : "transparent",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              borderRadius: 25,
              marginRight: 15,
            }}
          >
            <Text
              style={{
                color: active == "Overview" ? "white" : "gray",
                marginHorizontal: 10,
                marginVertical: 10,
                fontSize: 13,
                fontWeight: "700",
                fontStyle: "normal",
              }}
            >
              Overview
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActive("Productivity")}
            style={{
              backgroundColor:
                active == "Productivity" ? "blue" : "transparent",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              borderRadius: 25,
            }}
          >
            <Text
              style={{
                color: active == "Productivity" ? "white" : "gray",
                marginHorizontal: 10,
                marginVertical: 10,
                fontSize: 13,
                fontWeight: "700",
                fontStyle: "normal",
              }}
            >
              Productivity
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginRight: 15, justifyContent: "center" }}>
          <FontAwesomeIcon icon={solid("sliders")} size={20} color={"gray"} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "90%",
          backgroundColor: "#C5B4E3",
          alignSelf: "center",
          marginTop: 30,
          borderRadius: 15,
          height: 100,
          marginBottom: 15,
        }}
      >
        <TouchableOpacity
          style={{ alignSelf: "flex-end", marginRight: 10, marginTop: 5 }}
        >
          <FontAwesomeIcon icon={solid("circle-xmark")} color={"blue"} />
        </TouchableOpacity>
        <Text style={{ marginLeft: 15 }}>Priority Task Progress</Text>
        <Text style={{ marginLeft: 15 }}>3/5 is completed</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Progress.Bar
            progress={0.6899}
            width={200}
            color={"black"}
            unfilledColor={"white"}
            style={{ marginLeft: 15, marginTop: 10 }}
          />
          <Text
            style={{
              marginRight: 15,
            }}
          >
            68.99%
          </Text>
        </View>
      </View>
      <Block
        txt={"Total Task"}
        num={16}
        numColor={"yellow"}
        icon={solid("tasks")}
      />
      <Block
        txt={"Completed"}
        num={32}
        numColor={"green"}
        icon={solid("list")}
      />
      <Block
        txt={"Total Projects"}
        num={8}
        numColor={"purple"}
        icon={solid("diagram-project")}
      />
    </SafeAreaView>
  );
};

export default Home;

const Block = (props) => (
  <TouchableOpacity
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "90%",
      alignSelf: "center",
      marginTop: 15,
      backgroundColor: "gray",
      height: 60,
      alignItems: "center",
      alignContent: "center",
      borderRadius: 15,
    }}
  >
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <FontAwesomeIcon
        style={{
          marginLeft: 10,
          marginRight: 15,
        }}
        size={30}
        icon={props.icon}
        color={"blue"}
      />
      <Text
        style={{ color: "white", textAlign: "center", alignSelf: "center",  fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal", }}
      >
        {props.txt}
      </Text>
    </View>

    <View
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          color: props.numColor,
          textAlign: "center",
          alignSelf: "center",
          fontSize: 14,
          fontWeight: "bold",
          fontStyle: "normal",
        }}
      >
        {props.num}
      </Text>
      <FontAwesomeIcon
        icon={solid("greater-than")}
        color={"white"}
        style={{ marginRight: 15, marginLeft: 15, alignSelf: "center" }}
      />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
