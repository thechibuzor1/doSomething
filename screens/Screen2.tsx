import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  FlatList,
  Dimensions,
  Modal,
} from "react-native";
import React, { useState } from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { SwipeListView } from "react-native-swipe-list-view";
import { demoProjects, demoTasks, demoProjectSubcategories } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Divider } from "react-native-elements";
const { width, height } = Dimensions.get("window");
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
const color = colors[Math.floor(Math.random() * colors.length)];

const modalContent = () => (
  <View style={styles.modalContainer}>
    <View style={styles.modalItemsContainer}>
      <View style={{ marginBottom: 30 }}>
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
        <TouchableOpacity style={styles.modalC}>
          <View style={styles.modalA}>
            <FontAwesomeIcon
              icon={solid("share-nodes")}
              size={20}
              color={"blue"}
              style={{ marginRight: 15, marginLeft: 15 }}
            />
            <Text style={{ color: "white", marginLeft: 15 }}>
              Share Project
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.modalC}>
          <View style={styles.modalA}>
            <FontAwesomeIcon
              icon={regular("circle-check")}
              size={20}
              color={"blue"}
              style={{ marginRight: 15, marginLeft: 15 }}
            />
            <Text style={{ color: "white", marginLeft: 15 }}>
              Mark all completed
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.modalC}>
          <View style={styles.modalA}>
            <FontAwesomeIcon
              icon={solid("hashtag")}
              size={20}
              color={"blue"}
              style={{ marginRight: 15, marginLeft: 15 }}
            />
            <Text style={{ color: "white", marginLeft: 15 }}>Copy</Text>
          </View>
          <Text style={{ color: "blue", alignSelf: "center", marginTop: 15 }}>
            skjnkdjnc
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.modalC}>
          <View style={styles.modalA}>
            <FontAwesomeIcon
              icon={regular("copy")}
              size={20}
              color={"blue"}
              style={{ marginRight: 15, marginLeft: 15 }}
            />
            <Text style={{ color: "white", marginLeft: 15 }}>
              Duplicate Project
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.modalC}>
          <View style={[styles.modalA, { marginTop: 10 }]}>
            <FontAwesomeIcon
              icon={solid("palette")}
              size={20}
              color={"blue"}
              style={{ marginRight: 15, marginLeft: 15 }}
            />
            <Text style={{ color: "white", marginLeft: 15 }}>Set Color</Text>
          </View>
          <View
            style={{
              alignSelf: "center",
              backgroundColor: color,
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              width: 40,
              borderRadius: 15,
            }}
          ></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.modalC}>
          <View style={styles.modalA}>
            <FontAwesomeIcon
              icon={solid("box-archive")}
              size={20}
              color={"blue"}
              style={{ marginRight: 15, marginLeft: 15 }}
            />
            <Text style={{ color: "white", marginLeft: 15 }}>
              Archive Project
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.modalC}>
          <View style={styles.modalA}>
            <FontAwesomeIcon
              icon={solid("trash")}
              size={20}
              color={"white"}
              style={{ marginRight: 15, marginLeft: 15 }}
            />
            <Text style={{ color: "#D22730", marginLeft: 15 }}>
              Delete Project
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
const renderItem = (data) => (
  <View style={styles.rowFront}>
    <TaskBlock props={data.item} />
  </View>
);
const renderHiddenItem = (data, rowMap) => (
  <>
    <View style={styles.rowBack}>
      <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <FontAwesomeIcon icon={solid("trash-can")} color={"black"} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]}>
        <FontAwesomeIcon icon={solid("check")} color={"black"} />
      </TouchableOpacity>
    </View>
  </>
);
const TaskBlock = ({ props }) => (
  <TouchableOpacity
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      alignSelf: "center",
      backgroundColor: props.done ? "transparent" : "#393D47",
      height: 90,
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
            color: "#D9D9D6",
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
const DropDown = ({ item }) => {
  const [show, setShow] = useState(true);
  return (
    <View
      style={{
        marginTop: 15,
        width: "90%",
        alignSelf: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => setShow(!show)}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <Text style={{ color: "gray", marginBottom: 15 }}>
          {item.name} ({demoTasks.length})
        </Text>
        {show ? (
          <FontAwesomeIcon
            style={{}}
            icon={solid("caret-down")}
            size={20}
            color={"white"}
          />
        ) : (
          <FontAwesomeIcon
            style={{}}
            icon={solid("caret-up")}
            size={20}
            color={"white"}
          />
        )}
      </TouchableOpacity>
      {show && (
        <SwipeListView
          data={demoTasks}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-200}
          previewRowKey={"0"}
          previewOpenValue={-40}
          previewOpenDelay={3000}
        />
      )}
    </View>
  );
};
const Screen2 = ({ route }) => {
  const { task } = route.params;
  const [active, setActive] = useState("all");
  const [modal, setModal] = useState(false);
  const [favourite, setFavourite] = useState(false);

  return (
    <>
      <StatusBar barStyle="default" />
      <Modal
        animated
        animationType="slide"
        visible={modal}
        transparent
        onRequestClose={() => setModal(false)}
      >
        {modalContent()}
      </Modal>
      <View
        style={{
          backgroundColor: "black",
          flex: 1,
        }}
      >
        <>
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
                  {task.name}
                </Text>
                <Text style={{ color: "gray" }}>{task.desc}</Text>
              </View>
            </View>
            <View
              style={{ display: "flex", flexDirection: "row", marginRight: 15 }}
            >
              <TouchableOpacity onPress={() => setFavourite(!favourite)}>
                <Ionicons
                  name={favourite ? "star" : "star-outline"}
                  size={25}
                  color={"white"}
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModal(true)}>
                <FontAwesomeIcon
                  icon={solid("ellipsis")}
                  size={25}
                  color={"white"}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Progress.Bar
            progress={task.progress / task.total}
            width={width - 35}
            height={4}
            color={color}
            unfilledColor={"white"}
            style={{ marginLeft: 15, marginTop: 10 }}
          />
        </>
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
                All Tasks
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
                backgroundColor: active === "starred" ? "blue" : "transparent",
                borderRadius: 30,
                marginLeft: 15,
              }}
              onPress={() => setActive("starred")}
            >
              <Text
                style={{
                  marginHorizontal: 10,
                  marginVertical: 10,
                  color: "white",
                }}
              >
                Starred
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

        <FlatList
          style={{ paddingBottom: 15 }}
          data={demoProjectSubcategories}
          numColumns={1}
          renderItem={({ item }) => <DropDown item={item} />}
        />
      </View>
    </>
  );
};

export default Screen2;

const styles = StyleSheet.create({
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
    height: 90,
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
    width: 90,
    height: 90,
  },
  backRightBtnLeft: {
    backgroundColor: "#44D62C",
    right: 0,
  },
  backRightBtnRight: {
    backgroundColor: "#C5B4E3",
    right: 90,
  },
});
