import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Button from "../components/Button";
import { colors } from "../colors";

export default function FallAlert({
  setScreen,
}) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <View style={styles.alertBadge}>
          <View style={styles.alertCircle}>
            <Text style={styles.icon}>
              !
            </Text>
          </View>
        </View>

        <Text style={styles.label}>
          ATENÇÃO
        </Text>

        <Text style={styles.title}>
          Possível queda detectada
        </Text>

        <Text style={styles.text}>
          Detectamos um movimento brusco.
          {"\n"}
          Você está bem?
        </Text>

        <View style={styles.timerArea}>
          <View style={styles.timerOuter}>
            <View style={styles.timer}>

              <Text style={styles.timerText}>
                30s
              </Text>

              <Text style={styles.timerLabel}>
                até o alerta
              </Text>

            </View>
          </View>
        </View>

        <View style={styles.actionArea}>
          <Button
            title="Estou bem"
            onPress={() =>
              setScreen("confirmed")
            }
          />

          <TouchableOpacity
            style={styles.historyButton}
            onPress={() =>
              setScreen("history")
            }
            activeOpacity={0.7}
          >
            <Text style={styles.link}>
              Ver histórico
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingVertical: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  alertBadge: {
    width: 108,
    height: 108,
    borderRadius: 54,
    backgroundColor: "#FFF8EC",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  alertCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "#FFF2DF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#F8D9A3",
  },

  icon: {
    color: "#D88900",
    fontSize: 42,
    fontWeight: "900",
  },

  label: {
    color: "#D88900",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
    marginBottom: 7,
  },

  title: {
    color: colors.text,
    fontSize: 23,
    fontWeight: "800",
    textAlign: "center",
  },

  text: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    marginTop: 9,
    marginBottom: 24,
  },

  timerArea: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },

  timerOuter: {
    width: 126,
    height: 126,
    borderRadius: 63,
    backgroundColor: "#FFF8EC",
    alignItems: "center",
    justifyContent: "center",
  },

  timer: {
    width: 108,
    height: 108,
    borderRadius: 54,
    borderWidth: 5,
    borderColor: "#F0A92D",
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },

  timerText: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.text,
  },

  timerLabel: {
    color: colors.muted,
    fontSize: 10,
    marginTop: 2,
  },

  actionArea: {
    width: "100%",
    alignItems: "center",
  },

  historyButton: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginTop: 10,
  },

  link: {
    color: colors.blue,
    fontSize: 13,
    fontWeight: "700",
  },
});