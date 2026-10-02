import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import Button from "./Button";
import Card from "./Card";
import { colors } from "../App";

export default function Splash({
  onStart,
}) {

  return (
    <SafeAreaView style={styles.safe}>

      <View style={styles.container}>

        <View style={styles.logo}>
          <Text style={styles.logoText}>
            ✓
          </Text>
        </View>

        <Text style={styles.brand}>
          FallSafe
        </Text>

        <Text style={styles.subtitle}>
          Monitoramento inteligente de quedas
        </Text>

        <Card style={styles.card}>

          <Text style={styles.title}>
            Sua segurança, sempre por perto.
          </Text>

          <Text style={styles.text}>
            Acompanhe o monitoramento e receba
            alertas rapidamente.
          </Text>

        </Card>

        <Button
          title="Começar →"
          onPress={onStart}
        />

        <Text style={styles.footer}>
          Proteção simples e inteligente
        </Text>

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
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  logo: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: colors.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#B8E5FA",
  },

  logoText: {
    fontSize: 40,
    color: colors.blue,
    fontWeight: "800",
  },

  brand: {
    fontSize: 32,
    fontWeight: "800",
    color: colors.text,
    marginTop: 14,
  },

  subtitle: {
    color: colors.muted,
    marginTop: 5,
  },

  card: {
    marginTop: 35,
    width: "100%",
    alignItems: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "800",
    color: colors.text,
    marginBottom: 7,
  },

  text: {
    color: colors.muted,
    lineHeight: 19,
    fontSize: 13,
    textAlign: "center",
  },

  footer: {
    color: "#A2ABB3",
    fontSize: 10,
    marginTop: 18,
  },
});