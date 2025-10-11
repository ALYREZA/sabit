import { useColor } from "@/hooks";
import Icon from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Pressable } from "react-native-gesture-handler";
import { Input, InputProps } from "./Input";
interface PasswordInputProps extends Omit<InputProps, "secureTextEntry"> {
  // secureTextEntry is controlled internally
}

export function PasswordInput(props: PasswordInputProps) {
  const [isSecure, setIsSecure] = useState(true);
  const iconColor = useColor("text");

  const toggleSecureTextEntry = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={styles.container}>
      <Input
        {...props}
        secureTextEntry={isSecure}
        style={[props.style, styles.input]}
      />
      <Pressable style={[styles.eyeIcon]} onPress={toggleSecureTextEntry}>
        <Text style={[styles.eyeIconText, { color: iconColor }]}>
          {isSecure ? (
            <Icon name="eye" size={12} color={iconColor} />
          ) : (
            <Icon name="eye-off" size={12} color={iconColor} />
          )}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  input: {
    paddingRight: 50, // Make space for the eye icon
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: "30%",
    transform: [{ translateY: -12 }], // Center vertically
    padding: 8,
    borderRadius: 20,
    zIndex: 200,
  },
  eyeIconText: {
    fontSize: 18,
  },
});
