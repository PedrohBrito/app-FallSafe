import React from "react";

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Button from "./Button";
import { colors } from "../App";

export default function FallAlert({
  setScreen,
}) {

  return (
    <SafeAreaView style={styles.safe}>

      <View style={styles.container}>

        <View style={styles.circle}>

          <Text style={styles.icon}>
            !
          </Text>

        </View>

        <Text style={styles.title}>
          Possível queda detectada
        </Text>

        <Text style={styles.text}>
          Detectamos um movimento brusco.
          {"\n"}
          Você está bem?
        </Text>

        <View style={styles.timer}>

          <Text style={styles.timerText}>
            30s
          </Text>

          <Text style={styles.timerLabel}>
            até o alerta
          </Text>

        </View>

        <Button
          title="Estou bem"
          onPress={() =>
            setScreen("confirmed")
          }
        />

        <TouchableOpacity
          onPress={() =>
            setScreen("history")
          }
        >

          <Text style={styles.link}>
            Ver histórico
          </Text>

        </TouchableOpacity>

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
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  circle: {
    width: 85,
    height: 85,
    borderRadius: 43,
    backgroundColor: "#FFF2DF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  icon: {
    color: "#D88900",
    fontSize: 44,
    fontWeight: "900",
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
    marginTop: 8,
    marginBottom: 20,
  },

  timer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 6,
    borderColor: "#F0A92D",
    alignItems: "center",
    justifyContent: "center",
  },

  timerText: {
    fontSize: 27,
    fontWeight: "800",
    color: colors.text,
  },

  timerLabel: {
    color: colors.muted,
    fontSize: 10,
  },

  link: {
    color: colors.blue,
    fontWeight: "700",
    marginTop: 18,
  },

});