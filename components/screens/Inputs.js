import { View, Text, TextInput } from "react-native";
import React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { COLOURS } from "../database/Database";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "./Button";

const Inputs = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View
      style={{
        marginBottom: 20,
      }}
    >
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLOURS.red
              : isFocused
              ? COLOURS.darkBlue
              : COLOURS.light,
          },
        ]}
      >
        <Icon
          name={iconName}
          style={{
            color: COLOURS.darkBlue,
            fontSize: 22,
            marginRight: 10,
            top: 15,
          }}
        />
        <TextInput
          {...props}
          style={{
            color: COLOURS.darkBlue,
            flex: 1,
          }}
          autoCorrect={false}
          onFocus={() => {
            onFocus;
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          secureTextEntry={hidePassword}
        />
        {password && (
          <Icon
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={{ top: 15, fontSize: 20, color: COLOURS.darkBlue }}
            onPress={() => setHidePassword(!hidePassword)}
          />
        )}
      </View>
      {error && (
        <Text style={{ color: COLOURS.red, fontSize: 12, marginTop: 7 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: "#BABBC3",
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLOURS.light,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "gray",
    aliginItems: "center",
  },
});

export default Inputs;
