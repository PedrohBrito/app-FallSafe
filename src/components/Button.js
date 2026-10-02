import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import { colors } from "../colors";

export default function Button({
  title,
  onPress,
  secondary = false,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.button,
        secondary && styles.secondary,
      ]}
    >
      <Text
        style={[
          styles.text,
          secondary && styles.secondaryText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    minHeight: 50,
    borderRadius: 14,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 15,
    shadowColor: colors.blue,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.14,
    shadowRadius: 7,
    elevation: 3,
  },

  secondary: {
    backgroundColor: "#EAF0F5",
    borderWidth: 1,
    borderColor: "#DCE5EB",
    shadowOpacity: 0,
    elevation: 0,
  },

  text: {
    color: colors.white,
    fontWeight: "800",
    fontSize: 14,
    letterSpacing: 0.1,
  },

  secondaryText: {
    color: colors.blue,
  },
});