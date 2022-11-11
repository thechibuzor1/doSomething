import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import React from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { SwipeListView } from "react-native-swipe-list-view";
import { demoTasks } from "../data";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Screen2 = ({ setOuterScrollViewScrollEnabled }) => {
  const renderItem = (data) => (
    <View style={styles.rowFront}>
      <TaskBlock props={data.item} />
    </View>
  );
  const renderHiddenItem = (data, rowMap) => (
    <>
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
        >
          <FontAwesomeIcon icon={solid("trash-can")} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
        >
          <FontAwesomeIcon icon={solid("check")} color={"black"} />
        </TouchableOpacity>
      </View>
    </>
  );
  const TaskBlock = ({ props }) => (
    <TouchableOpacity
      onPress={() => setOuterScrollViewScrollEnabled(false)}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignSelf: "center",
        backgroundColor: props.done ? "transparent" : "#8A868E",
        borderRadius: 15,
        height: 70,
        borderWidth: props.done ? 2 : 0,
        borderColor: "#393D47",
        marginBottom: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: 15,
          alignSelf: "center",
        }}
      >
        <CircularProgress
          value={props.percent}
          valueSuffix={"%"}
          inActiveStrokeColor={"black"}
          progressValueColor={
            (props.percent < 75 && props.percent > 25 && "#E0E722") ||
            (props.percent < 25 && "#D22730") ||
            (props.percent > 75 && "#44D62C")
          }
          maxValue={100}
          radius={25}
          clockwise={false}
          activeStrokeWidth={3}
          activeStrokeColor={
            (props.percent < 75 && props.percent > 25 && "#E0E722") ||
            (props.percent < 25 && "#D22730") ||
            (props.percent > 75 && "#44D62C")
          }
        />
        <View style={{ marginLeft: 15 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              fontStyle: "normal",
              color: "white",
            }}
          >
            {props.name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              fontStyle: "normal",
              color: "#393D47",
            }}
          >
            {props.desc}
          </Text>
        </View>
      </View>

      <Text
        style={{
          alignSelf: "center",
          fontSize: 14,
          fontWeight: "bold",
          fontStyle: "normal",
          color: props.done ? "#393D47" : "#D22730",
          marginRight: 15,
        }}
      >
        {props.deadline}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
      }}
    >
      <Pressable
        style={{
          height: "100%",
          width: "100%",
        }}
        onPress={() => setOuterScrollViewScrollEnabled(true)}
      >
        <Text
          style={{
            color: "white",
            marginLeft: 15,
            fontSize: 27,
            fontWeight: "bold",
            fontStyle: "normal",
            marginTop: 15,
          }}
        >
          All Tasks
        </Text>

        <View
          style={{
            marginTop: 30,
            width: "90%",
            alignSelf: "center",
          }}
        >
          <SwipeListView
            data={demoTasks}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-150}
            previewRowKey={"0"}
            previewOpenValue={-40}
            previewOpenDelay={3000}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  backTextWhite: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 19,
    color: "#EEEEEE",
  },
  blacktxt: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 19,
    color: "#503C3B",
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#000000",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "rgba(118, 118, 128, 0.12)",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    width: "100%",
    alignSelf: "center",
    height: 70,
  },
  backMore: {
    backgroundColor: "rgba(118, 118, 128, 0.02)",
    right: 225,
  },
  backPin: {
    backgroundColor: "rgba(118, 118, 128, 0.08)",
    right: 150,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
    height: 70,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  backRightBtnLeft: {
    backgroundColor: "#44D62C",
    right: 0,
  },
  backRightBtnRight: {
    backgroundColor: "#C5B4E3",
    right: 75,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
