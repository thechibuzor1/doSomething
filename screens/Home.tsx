import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions,
  Switch,
  Modal,
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
import CircularProgress from "react-native-circular-progress-indicator";
import { BarChart } from "react-native-chart-kit";
import Animated from "react-native-reanimated";
import { Divider } from "react-native-elements";

const Home = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const [isTaskEnabled, setIsTaskEnabled] = useState(false);
  const toggleSwitch = () =>
    setIsTaskEnabled((previousState) => !previousState);
  const [isComEnabled, setIsComEnabled] = useState(false);
  const toggleComSwitch = () =>
    setIsComEnabled((previousState) => !previousState);
  const [active, setActive] = useState("Overview");
  const [modal, setModal] = useState(false);
  const data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        data: [18, 6, 10, 20, 10, 4, 2],
      },
    ],
  };

  const modalContent = () => (
    <View style={styles.modalContainer}>
      <View style={styles.modalItemsContainer}>
        <Text
          style={{
            color: "gray",
            fontSize: 20,
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          ───────
        </Text>
        <View style={styles.modalC}>
          <View style={styles.modalA}>
            <FontAwesomeIcon
              icon={solid("circle-check")}
              size={20}
              color={"white"}
              style={{ marginRight: 15, marginLeft: 15 }}
            />
            <Text style={{ color: "white", marginLeft: 15 }}>Total Task</Text>
          </View>

          <Switch
            trackColor={{ false: "white", true: "white" }}
            thumbColor={isTaskEnabled ? "blue" : "gray"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isTaskEnabled}
          />
        </View>
        <Divider width={0.4} color={"gray"} />
        <View style={styles.modalC}>
          <View style={styles.modalA}>
            <FontAwesomeIcon
              icon={solid("box")}
              size={20}
              color={"white"}
              style={{ marginRight: 15, marginLeft: 15 }}
            />
            <Text style={{ color: "white", marginLeft: 15 }}>
              Tasks Due Soon
            </Text>
          </View>

          <Switch
            disabled
            trackColor={{ false: "gray", true: "white" }}
            thumbColor={"gray"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={false}
          />
        </View>
        <Divider width={0.4} color={"gray"} />
        <View style={styles.modalC}>
          <View style={styles.modalA}>
            <FontAwesomeIcon
              icon={solid("circle-check")}
              size={20}
              color={"blue"}
              style={{ marginRight: 15, marginLeft: 15 }}
            />
            <Text style={{ color: "white", marginLeft: 15 }}>Completed</Text>
          </View>

          <Switch
            trackColor={{ false: "white", true: "white" }}
            thumbColor={isComEnabled ? "blue" : "gray"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleComSwitch}
            value={isComEnabled}
          />
        </View>
        <Divider width={0.4} color={"gray"} />
        <View style={styles.modalC}>
          <View style={styles.modalA}>
            <FontAwesomeIcon
              icon={solid("flag")}
              size={20}
              color={"white"}
              style={{ marginRight: 15, marginLeft: 15 }}
            />
            <Text style={{ color: "white", marginLeft: 15 }}>Working On</Text>
          </View>

          <Switch
            disabled
            trackColor={{ false: "gray", true: "white" }}
            thumbColor={"gray"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={false}
          />
        </View>
        <Divider width={0.4} color={"gray"} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 30,
            justifyContent: "space-between",
            marginBottom: 15,
          }}
        >
          <TouchableOpacity
            onPress={() => setModal(false)}
            style={{ marginLeft: 15 }}
          >
            <Text
              style={{
                color: "gray",
                fontSize: 15,
                marginHorizontal: 20,
                marginVertical: 14,
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "blue",
              borderRadius: 30,
              marginRight: 15,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
                marginHorizontal: 20,
                marginVertical: 14,
              }}
            >
              Save Changes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <>
      <StatusBar barStyle="default" />
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
            <TouchableOpacity
              onPress={() => navigation.navigate("Chat")}
              style={{
                marginRight: 30,
                alignSelf: "center",
              }}
            >
              <FontAwesomeIcon icon={faRocketchat} size={25} color={"white"} />
            </TouchableOpacity>

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
          <TouchableOpacity
            onPress={() => setModal(true)}
            style={{ marginRight: 15, justifyContent: "center" }}
          >
            <FontAwesomeIcon icon={solid("sliders")} size={20} color={"gray"} />
          </TouchableOpacity>
        </View>
        {active === "Overview" ? (
          <View>
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
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 14,
                  fontWeight: "bold",
                  fontStyle: "normal",
                }}
              >
                Priority Task Progress
              </Text>
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
              numColor={"#E0E722"}
              icon={solid("tasks")}
            />
            <Block
              txt={"Completed"}
              num={32}
              numColor={"#44D62C"}
              icon={solid("list")}
            />
            <Block
              txt={"Total Projects"}
              num={8}
              numColor={"purple"}
              icon={solid("diagram-project")}
            />
          </View>
        ) : (
          <ScrollView>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 30,
                width: "90%",
                alignSelf: "center",
                backgroundColor: "#768692",
                paddingTop: 15,
                paddingBottom: 10,
                borderRadius: 15,
                height: 150,
              }}
            >
              <View style={{ marginLeft: 15 }}>
                <Text style={{ color: "#2E3033", marginBottom: 5 }}>
                  Daily Goal
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 5,
                  }}
                >
                  <View
                    style={{ backgroundColor: "#44D62C", borderRadius: 30 }}
                  >
                    <Text
                      style={{
                        color: "white",
                        marginHorizontal: 8,
                        marginVertical: 2,
                      }}
                    >
                      3/5
                    </Text>
                  </View>

                  <Text style={{ color: "white", alignSelf: "center" }}>
                    {" "}
                    tasks
                  </Text>
                </View>
                <Text style={{ color: "#2E3033", marginBottom: 5 }}>
                  You marked 3/5 tasks {"\n"} as done 🎉
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#9B26B6",
                    position: "absolute",
                    bottom: 0,
                    borderRadius: 30,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      marginHorizontal: 15,
                      marginVertical: 7,
                    }}
                  >
                    All Task
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginRight: 30 }}>
                <CircularProgress
                  value={68}
                  valueSuffix={"%"}
                  inActiveStrokeColor={"black"}
                  progressValueColor={"#44D62C"}
                  maxValue={100}
                  radius={40}
                  clockwise={false}
                  activeStrokeColor={"#44D62C"}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: 30,
                width: "90%",
                alignSelf: "center",
                backgroundColor: "#768692",

                borderRadius: 15,
              }}
            >
              <Text
                style={{
                  color: "#BEC3C6",
                  marginBottom: 5,
                  marginTop: 15,
                  marginLeft: 30,
                }}
              >
                Completed in the last 7 Days
              </Text>
              <BarChart
                showBarTops={false}
                data={data}
                withInnerLines={false}
                width={width * 0.9}
                height={160}
                fromZero={true}
                style={{
                  borderRadius: 15,
                  marginTop: 15,
                  marginBottom: 10,
                }}
                yAxisLabel=""
                yAxisSuffix=""
                chartConfig={{
                  backgroundGradientFrom: "#768692",
                  backgroundGradientFromOpacity: 1,
                  backgroundGradientTo: "#768692",
                  backgroundGradientToOpacity: 1,
                  color: () => `black`,
                  strokeWidth: 2, // optional, default 3
                  barPercentage: 0.5,
                  useShadowColorFromDataset: false, // optional
                  barRadius: 10,
                  backgroundColor: "#768692",
                  fillShadowGradientOpacity: 1,
                }}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 30,
                  marginTop: 5,
                  marginBottom: 15,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontWeight: "bold",
                    fontStyle: "normal",
                  }}
                >
                  108 Tasks
                </Text>
                <Text
                  style={{
                    color: "#221C35",
                    fontSize: 16,
                    fontWeight: "bold",
                    fontStyle: "normal",
                  }}
                >
                  {"      "}6 Projects
                </Text>
              </View>
            </View>
          </ScrollView>
        )}
        <Modal
          animated
          animationType="slide"
          visible={modal}
          transparent
          onRequestClose={() => setModal(false)}
        >
          {modalContent()}
        </Modal>
      </SafeAreaView>
    </>
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
      backgroundColor: "#393D47",
      height: 70,
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
        style={{
          color: "white",
          textAlign: "center",
          alignSelf: "center",
          fontSize: 14,
          fontWeight: "bold",
          fontStyle: "normal",
        }}
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
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalItemsContainer: {
    borderRadius: 15,
    backgroundColor: "black",
    padding: 16,
    borderWidth: 1,
    justifyContent: "center",
    width: "95%",
    alignSelf: "center",
    marginBottom: 5,
  },
  modalC: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 15,
  },
  modalA: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
  },
});
