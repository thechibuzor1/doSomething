import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Divider } from "react-native-elements";
import CreateTaskContent from "../Components/NewTask";
import NewProject from "../Components/NewProject";
import CreateTeam from "../Components/CreateTeam";

const New = ({ navigation }) => {
  const [task, setTask] = useState<boolean>(false);
  const [project, setProject] = useState<boolean>(false);
  const [team, setTeam] = useState<boolean>(false);

  return (
    <>
      <Modal
        animated
        animationType="slide"
        visible={task}
        transparent
        onRequestClose={() => setTask(false)}
      >
        {CreateTaskContent()}
      </Modal>
      <Modal
        animated
        animationType="slide"
        visible={team}
        transparent
        onRequestClose={() => setTeam(false)}
      >
        {CreateTeam({ navigation })}
      </Modal>
      <Modal
        animated
        animationType="slide"
        visible={project}
        transparent
        onRequestClose={() => setProject(false)}
      >
        {NewProject({ navigation })}
      </Modal>
      <View style={styles.modalContainer}>
        <View style={styles.modalItemsContainer}>
          <Text style={styles.modalHead}>───────</Text>
          <Items
            name="Create Task"
            icon={solid("square-plus")}
            onPress={() => setTask(true)}
          />
          <Divider width={0.4} color={"gray"} />
          <Items
            onPress={() => setProject(true)}
            name="Create Project"
            icon={solid("diagram-project")}
          />
          <Divider width={0.4} color={"gray"} />
          <Items
            onPress={() => setTeam(true)}
            name="Create Team"
            icon={solid("people-group")}
          />
          <Divider width={0.4} color={"gray"} />
          <Items name="Create Event" icon={solid("calendar-days")} />
          <Divider width={0.4} color={"gray"} />
        </View>
      </View>
    </>
  );
};

export default New;
const Items = (props: any) => (
  <TouchableOpacity style={styles.modalItem} onPress={props.onPress}>
    <FontAwesomeIcon icon={props.icon} size={20} color={"blue"} />
    <Text style={styles.modalText}>{props.name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "black",
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
  modalText: {
    fontSize: 14,
    color: "white",
    marginLeft: 10,
    fontWeight: "500",
  },
  modalItem: {
    height: 40,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginBottom: 15,
    marginTop: 15,
  },
  modalHead: {
    color: "gray",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 15,
  },
});
