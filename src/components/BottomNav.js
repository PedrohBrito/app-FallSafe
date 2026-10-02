import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { colors } from "../App";

export default function BottomNav({
  current,
  navigate,
}) {

  const items = [
    ["home", "Início", "⌂"],
    ["monitoring", "Monitoramento", "◉"],
    ["history", "Histórico", "↺"],
    ["settings", "Configurações", "⚙"],
  ];

  return (
    <View style={styles.nav}>

      {items.map(([key, label, icon]) => (

        <TouchableOpacity
          key={key}
          style={styles.item}
          onPress={() => navigate(key)}
        >

          <Text
            style={[
              styles.icon,
              current === key && styles.active,
            ]}
          >
            {icon}
          </Text>

          <Text
            style={[
              styles.label,
              current === key && styles.active,
            ]}
          >
            {label}
          </Text>

        </TouchableOpacity>

      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E8EDF1",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  item: {
    alignItems: "center",
    width: "25%",
  },

  icon: {
    color: "#9AA5AE",
    fontSize: 20,
    marginBottom: 2,
  },

  label: {
    color: "#9AA5AE",
    fontSize: 9,
  },

  active: {
    color: colors.blue,
    fontWeight: "800",
  },
});