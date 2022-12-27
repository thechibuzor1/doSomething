import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Task } from "./Screen2";

const Screen4 = () => {
  const { width, height } = Dimensions.get("window");
  const [active, setActive] = useState<string>("task");
  const [searchText, setSearchText] = useState<string>("");
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
            marginTop: 15,
            display: "flex",
            flexDirection: "row",
            height: 40,
            maxWidth: 500,
            justifyContent: "space-between",
            marginLeft: 15,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#393D47",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <FontAwesomeIcon
              icon={solid("magnifying-glass")}
              size={20}
              style={{
                marginLeft: 5,
                alignSelf: "center",
              }}
              color={"white"}
            />

            <TextInput
              placeholder="Search"
              placeholderTextColor={"gray"}
              value={searchText}
              style={{
                marginLeft: 5,
                width: 250,
                marginRight: 5,
                height: "100%",
                backgroundColor: "transparent",
              }}
              theme={{ colors: { text: "white" } }}
              onChangeText={(text) => setSearchText(text)}
            />
            <TouchableOpacity onPress={() => setSearchText("")}>
              <FontAwesomeIcon
                icon={solid("circle-xmark")}
                size={20}
                style={{
                  marginRight: 5,
                  alignSelf: "center",
                }}
                color={"white"}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: 5,
            }}
          >
            <Text style={{ color: searchText.length != 0 ? "white" : "gray" }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
            alignContent: "center",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: active === "task" ? "blue" : "transparent",
                borderRadius: 30,
                marginLeft: 15,
              }}
              onPress={() => setActive("task")}
            >
              <Text
                style={{
                  marginHorizontal: 10,
                  marginVertical: 10,
                  color: "white",
                }}
              >
                Task
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: active === "mention" ? "blue" : "transparent",
                borderRadius: 30,
                marginLeft: 15,
              }}
              onPress={() => setActive("mention")}
            >
              <Text
                style={{
                  marginHorizontal: 10,
                  marginVertical: 10,
                  color: "white",
                }}
              >
                Mention
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: active === "files" ? "blue" : "transparent",
                borderRadius: 30,
                marginLeft: 15,
              }}
              onPress={() => setActive("files")}
            >
              <Text
                style={{
                  marginHorizontal: 10,
                  marginVertical: 10,
                  color: "white",
                }}
              >
                Files
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <FontAwesomeIcon
              style={{ marginRight: 15 }}
              icon={solid("sliders")}
              size={20}
              color={"white"}
            />
          </TouchableOpacity>
        </View>

        <Task />
      </View>
    </>
  );
};

export default Screen4;

const styles = StyleSheet.create({});
