import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";

const Screen4 = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
        }}
      >
        <Text>Screen4</Text>
      </View>
    </>
  );
};

export default Screen4;

const styles = StyleSheet.create({});
