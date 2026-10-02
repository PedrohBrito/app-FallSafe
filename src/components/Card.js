import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";

export default function Card({
  children,
  style,
}) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 17,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#EDF1F4",
  },
});