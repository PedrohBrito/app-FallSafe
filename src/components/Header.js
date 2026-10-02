import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { colors } from "../colors";

export default function Header({
  title,
  subtitle,
  onBack,
}) {
  return (
    <View style={styles.header}>

      {onBack ? (
        <TouchableOpacity
          onPress={onBack}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Text style={styles.backText}>
            ‹
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.backPlaceholder} />
      )}

      <View style={styles.titleArea}>
        <Text
          style={styles.title}
          numberOfLines={1}
        >
          {title}
        </Text>

        {subtitle && (
          <Text
            style={styles.subtitle}
            numberOfLines={1}
          >
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
    minHeight: 76,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: "#EEF2F5",
  },

  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  backPlaceholder: {
    width: 36,
    marginRight: 10,
  },

  backText: {
    color: colors.blue,
    fontSize: 29,
    lineHeight: 30,
    marginTop: -2,
  },

  titleArea: {
    flex: 1,
    paddingRight: 12,
  },

  title: {
    fontSize: 19,
    fontWeight: "800",
    color: colors.text,
    letterSpacing: -0.2,
  },

  subtitle: {
    color: colors.muted,
    fontSize: 11,
    marginTop: 3,
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#D8EEF8",
  },

  avatarText: {
    color: colors.blue,
    fontSize: 13,
    fontWeight: "800",
  },
});