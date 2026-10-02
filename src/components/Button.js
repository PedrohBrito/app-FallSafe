import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import { colors } from "../../App";

export default function Button({
  title,
  onPress,
  secondary = false,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
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
    backgroundColor: colors.blue,
    minHeight: 48,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 15,
    width: "100%",
  },

  secondary: {
    backgroundColor: "#EAF0F5",
  },

  text: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 14,
  },

  secondaryText: {
    color: colors.blue,
  },
});