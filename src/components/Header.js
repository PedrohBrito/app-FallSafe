import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { colors } from "../App";

export default function Header({
  title,
  subtitle,
  onBack,
}) {
  return (
    <View style={styles.header}>

      {onBack && (
        <TouchableOpacity
          onPress={onBack}
          style={styles.backButton}
        >
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>
      )}

      <View style={styles.titleArea}>
        <Text style={styles.title}>
          {title}
        </Text>

        {subtitle && (
          <Text style={styles.subtitle}>
            {subtitle}
          </Text>
        )}
      </View>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          P
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 12,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: "#EEF2F5",
  },

  backButton: {
    marginRight: 10,
  },

  backText: {
    fontSize: 34,
    color: colors.blue,
  },

  titleArea: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.text,
  },

  subtitle: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 3,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.lightBlue,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: colors.blue,
    fontWeight: "800",
  },
});