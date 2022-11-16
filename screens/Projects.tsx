import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import { demoProjects } from "../data";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({});

const colors = [
  "#4D4DFF",
  "#E5E1E6",
  "#00AE58",
  "#FFAD00",
  "#FB48C4",
  "#ED1D24",
  "#C724B1",
  "#FFDE00",
];

const Component = ({ navigation, data }) => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate("Info", {
          task: data,
        })
      }
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          marginBottom: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          <View
            style={{
              backgroundColor: color,
              alignContent: "center",
              height: 50,
              width: 50,
              justifyContent: "center",
              marginRight: 15,
              borderRadius: 15,
              alignItems: "center",
            }}
          >
            <Ionicons
              name={"folder-open"}
              size={25}
              color={"white"}
              style={{}}
            />
          </View>
          <View style={{}}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {data.name}
            </Text>
            <Text style={{ color: "gray" }}>{data.desc}</Text>
          </View>
        </View>
        <View
          style={{
            marginRight: 15,
            backgroundColor: color,
            borderRadius: 30,
            height: 20,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 12 }}>
            {data.progress}/{data.total}
          </Text>
        </View>
      </View>
      <Progress.Bar
        progress={data.progress / data.total}
        width={width - 35}
        height={4}
        color={color}
        unfilledColor={"white"}
        style={{ marginLeft: 15, marginTop: 10 }}
      />
    </TouchableOpacity>
  );
};

const Projects = ({ navigation }) => {
  const [active, setActive] = useState("favorites");
  const [grid, setGrid] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
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
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Projects
        </Text>
        <TouchableOpacity>
          <Ionicons
            name={"add-circle-outline"}
            size={35}
            color={"blue"}
            style={{
              marginRight: 25,
            }}
          />
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
              backgroundColor: active === "favorites" ? "blue" : "transparent",
              borderRadius: 30,
              marginLeft: 15,
            }}
            onPress={() => setActive("favorites")}
          >
            <Text
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
                color: "white",
              }}
            >
              Favorites
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: active === "recent" ? "blue" : "transparent",
              borderRadius: 30,
              marginLeft: 15,
            }}
            onPress={() => setActive("recent")}
          >
            <Text
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
                color: "white",
              }}
            >
              Recent
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: active === "all" ? "blue" : "transparent",
              borderRadius: 30,
              marginLeft: 15,
            }}
            onPress={() => setActive("all")}
          >
            <Text
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
                color: "white",
              }}
            >
              All
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => setGrid(!grid)}>
          {!grid ? (
            <Ionicons
              name={"grid"}
              size={25}
              color={"white"}
              style={{
                marginRight: 25,
              }}
            />
          ) : (
            <Ionicons
              name={"list"}
              size={25}
              color={"white"}
              style={{
                marginRight: 25,
              }}
            />
          )}
        </TouchableOpacity>
      </View>

      <FlatList
        data={demoProjects}
        numColumns={1}
        renderItem={({ item }) => (
          <Component navigation={navigation} data={item} />
        )}
      />
    </View>
  );
};

export default Projects;
