import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { TextInput } from "react-native-paper";
import CheckBox from "expo-checkbox";
import { profiles } from "../data";

const CreateTeam = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 15,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
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
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Set Assignees
        </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            backgroundColor: "blue",
            height: 35,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 15,
            borderRadius: 17,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "700",
              marginHorizontal: 10,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#393D47",
            alignItems: "center",
            borderRadius: 5,
            marginTop: 15,
            width: "95%",
            alignSelf: "center",
            marginBottom: 15,
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
            style={{
              marginLeft: 5,
              flex: 1,
              marginRight: 5,
              height: 40,
              backgroundColor: "transparent",
            }}
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
        <ScrollView style={{ marginBottom: 15 }}>
          {profiles.map((profile) => Assign(profile))}
        </ScrollView>
        <View
          style={{
            alignSelf: "flex-end",
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: "100%",
            marginTop: 15,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              backgroundColor: "blue",
              height: 35,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 15,
              borderRadius: 15,
              marginBottom: 15,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "700",
                marginHorizontal: 15,
              }}
            >
              Add Members
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateTeam;

const Assign = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);

  return (
    <TouchableOpacity
      key={props.name}
      activeOpacity={0.5}
      onPress={() => setToggleCheckBox(!toggleCheckBox)}
      style={{
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: toggleCheckBox ? 2 : 0,
        borderColor: toggleCheckBox ? "#D22730" : "black",
        alignContent: "center",
        width: "95%",
        alignSelf: "center",
        borderRadius: 10,
        backgroundColor: toggleCheckBox ? "black" : "#393D47",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginLeft: 15,
          marginTop: 15,
          marginBottom: 15,
        }}
      >
        <Image source={{ uri: props.uri }} style={styles.img} />
        <View style={{}}>
          <Text style={{ color: "white" }}>{props.name}</Text>
          <Text style={{ color: "gray" }}>{props.role}</Text>
        </View>
      </View>
      <CheckBox
        value={toggleCheckBox}
        onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
        color={toggleCheckBox ? "#4630EB" : undefined}
        style={{
          height: 20,
          width: 20,
          marginRight: 15,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "black",
  },
  box: {
    flex: 1,
    borderRadius: 15,
    borderBottomColor: "black",
  },
  img: {
    height: 30,
    width: 30,
    marginRight: 15,
    borderRadius: 15,
  },
});
