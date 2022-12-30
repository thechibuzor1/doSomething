import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { color } from "../screens/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput } from "react-native-paper";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CreateTaskContent = () => {
  const [dueDate, setDueDate] = useState<string>("Due Date");
  const [dueTime, setDueTime] = useState<string>("Today");
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<any>(null);
  const [items, setItems] = useState<any>([
    { label: "Unity Dashboard", value: "unity dashboard" },
    { label: "UI8 Products", value: "ui8 products" },
  ]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
    <View style={styles.modalContainer}>
      <View style={styles.modalItemsContainer}>
        <Text style={styles.modalHead}>───────</Text>

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          textStyle={{
            fontSize: 14,
            fontWeight: "normal",
            color: "white",
          }}
          placeholder="Select a project"
          style={{
            backgroundColor: "blue",
          }}
          placeholderStyle={{
            color: "black",
            fontWeight: "bold",
          }}
          dropDownContainerStyle={{ backgroundColor: "#393D47" }}
        />
        <View style={styles.taskInputContainer}>
          <View style={styles.colorSquare}></View>
          <TextInput
            placeholder="Task Name"
            placeholderTextColor={"gray"}
            style={styles.taskInputField}
            theme={{ colors: { text: "white" } }}
          />
          <TouchableOpacity>
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

        <View style={styles.icons}>
          <View style={styles.leftIcons}>
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={solid("tag")}
                size={22}
                style={{
                  marginRight: 25,
                }}
                color={"white"}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={solid("paperclip")}
                size={22}
                style={{
                  marginRight: 25,
                }}
                color={"white"}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={regular("flag")}
                size={22}
                style={{
                  marginRight: 25,
                }}
                color={"white"}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={regular("image")}
                size={22}
                style={{
                  marginRight: 5,
                }}
                color={"white"}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <FontAwesomeIcon
              icon={solid("circle-plus")}
              size={25}
              color={"blue"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateTaskContent;

const styles = StyleSheet.create({
  img: {
    height: 40,
    width: 40,
    marginRight: 15,
    borderRadius: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "black",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    alignItems: "center",
  },

  modalHead: {
    color: "gray",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 15,
  },
  taskInputField: {
    marginLeft: 5,
    flex: 1,
    marginRight: 5,
    height: 40,
    backgroundColor: "transparent",
  },
  colorSquare: {
    alignSelf: "center",
    backgroundColor: color,
    alignItems: "center",
    justifyContent: "center",
    height: 20,
    width: 20,
    borderRadius: 5,
  },
  modalItemsContainer: {
    borderRadius: 15,
    padding: 16,
    borderWidth: 1,
    justifyContent: "center",
    width: "95%",
    alignSelf: "center",
    marginBottom: 90,
    paddingBottom: 15,
  },
  taskInputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
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
    marginTop: 15,
  },
  leftIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
