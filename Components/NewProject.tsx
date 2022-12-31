import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { colors } from "../screens/Projects";
import { Task } from "../screens/Screen2";
import CreateTaskContent from "./NewTask";

const NewProject = ({ navigation }) => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const [dueDate, setDueDate] = useState<string>("Due Date");
  const [task, setTask] = useState<boolean>(false);
  const [dueTime, setDueTime] = useState<string>("Today");
  const [name, setName] = useState<string>("New Project");
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (data) => {
    let date = new Date(data);
    setDueDate(date.toDateString());
    setDueTime(date.toLocaleTimeString());

    hideDatePicker();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            height: 30,
            marginLeft: 15,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: "gray",
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
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.rightIcon} activeOpacity={0.5}>
            <FontAwesomeIcon icon={solid("check")} size={25} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightIcon} activeOpacity={0.5}>
            <FontAwesomeIcon
              icon={solid("folder-tree")}
              size={25}
              color={"white"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightIcon} activeOpacity={0.5}>
            <FontAwesomeIcon
              icon={regular("thumbs-up")}
              size={25}
              color={"white"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightIcon} activeOpacity={0.5}>
            <FontAwesomeIcon
              icon={solid("ellipsis")}
              size={25}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 27,
              fontWeight: "bold",
              fontStyle: "normal",
              color: "white",
              marginLeft: 15,
            }}
          >
            New{"\n"}Project✨
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{ marginLeft: 5, alignSelf: "flex-end" }}
          >
            <FontAwesomeIcon icon={solid("pen")} size={25} color={"white"} />
          </TouchableOpacity>
        </View>
        <View style={styles.dateContainer}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image
              source={require("../assets/octocat.png")}
              style={styles.img}
            />
            <View>
              <Text style={{ color: "gray" }}>Assigned to</Text>
              <Text style={{ color: "white" }}>Dereck Boyle</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={showDatePicker}
            activeOpacity={0.5}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <View style={styles.calendarIcon}>
              <FontAwesomeIcon
                size={17}
                icon={regular("calendar")}
                color={"white"}
              />
            </View>
            <View>
              <Text style={{ color: "blue" }}>{dueDate}</Text>
              <Text style={{ color: "gray" }}>{dueTime}</Text>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "80%",
            alignSelf: "center",
            flexDirection: "row",
            marginTop: 15,
            marginBottom: 30,
          }}
        >
          <View
            style={{
              backgroundColor: color,
              alignContent: "center",
              height: 40,
              width: 40,
              justifyContent: "center",
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={regular("bookmark")}
              size={20}
              color={"white"}
            />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              {name}
            </Text>
            <Text style={{ color: "gray", fontSize: 13, fontWeight: "300" }}>
              Task List
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              marginLeft: 15,
              color: "white",
              fontSize: 13,
            }}
          >
            Description
          </Text>
          <TouchableOpacity activeOpacity={0.5} style={{ marginLeft: 10 }}>
            <FontAwesomeIcon icon={solid("pen")} size={14} color={"white"} />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            marginLeft: 15,
            color: "gray",
            fontSize: 13,
            marginBottom: 15,
          }}
        >
          Add description
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              marginLeft: 15,
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 15,
            }}
          >
            Tasks
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{ marginRight: 15 }}
            onPress={() => setTask(true)}
          >
            <FontAwesomeIcon icon={solid("plus")} size={22} color={"white"} />
          </TouchableOpacity>
          <Modal
            animated
            animationType="slide"
            visible={task}
            transparent
            onRequestClose={() => setTask(false)}
          >
            {CreateTaskContent()}
          </Modal>
        </View>

        <Text
          style={{
            marginLeft: 15,
            color: "gray",
            fontSize: 13,
            marginBottom: 15,
          }}
        >
          No tasks created
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewProject;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  rightIcon: {
    marginRight: 15,
  },
  calendarIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 15,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    width: "80%",
    alignSelf: "center",
  },
  img: {
    height: 40,
    width: 40,
    marginRight: 15,
    borderRadius: 20,
  },
});
