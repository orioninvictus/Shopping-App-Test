import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLOURS } from "../database/Database";

const Button = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        height: 55,
        width: "100%",
        backgroundColor: COLOURS.blue,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: COLOURS.white,
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
