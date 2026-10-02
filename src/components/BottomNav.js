import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { colors } from "../colors";

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
      {items.map(([key, label, icon]) => {
        const isActive = current === key;

        return (
          <TouchableOpacity
            key={key}
            style={styles.item}
            onPress={() => navigate(key)}
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.iconContainer,
                isActive && styles.iconContainerActive,
              ]}
            >
              <Text
                style={[
                  styles.icon,
                  isActive && styles.active,
                ]}
              >
                {icon}
              </Text>
            </View>

            <Text
              style={[
                styles.label,
                isActive && styles.active,
              ]}
              numberOfLines={1}
            >
              {label}
            </Text>

            {isActive && (
              <View style={styles.activeIndicator} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 78,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: "#E8EDF1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 5,
    paddingBottom: 7,
    shadowColor: colors.text,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 5,
  },

  item: {
    width: "25%",
    height: 66,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  iconContainer: {
    width: 34,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },

  iconContainerActive: {
    backgroundColor: colors.lightBlue,
  },

  icon: {
    color: "#9AA5AE",
    fontSize: 19,
  },

  label: {
    color: "#9AA5AE",
    fontSize: 9,
    fontWeight: "600",
  },

  active: {
    color: colors.blue,
    fontWeight: "800",
  },

  activeIndicator: {
    position: "absolute",
    bottom: 0,
    width: 18,
    height: 3,
    borderRadius: 3,
    backgroundColor: colors.blue,
  },
});