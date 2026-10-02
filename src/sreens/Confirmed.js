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

export default function Confirmed({
  setScreen,
}) {

  return (
    <SafeAreaView style={styles.safe}>

      <View style={styles.container}>

        <View style={styles.circle}>

          <Text style={styles.icon}>
            ✓
          </Text>

        </View>

        <Text style={styles.title}>
          Tudo certo!
        </Text>

        <Text style={styles.text}>
          Ficamos felizes que você está bem.
          O alerta foi encerrado.
        </Text>

        <Card style={styles.card}>

          <Text style={styles.cardTitle}>
            Resumo da verificação
          </Text>

          <Text style={styles.text}>
            Alerta encerrado com sucesso.
          </Text>

          <Text style={styles.text}>
            Nenhuma emergência foi registrada.
          </Text>

        </Card>

        <Button
          title="Voltar ao monitoramento"
          onPress={() =>
            setScreen("monitoring")
          }
        />

        <Button
          title="Voltar ao início"
          secondary
          onPress={() =>
            setScreen("home")
          }
        />

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
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#DDF9EA",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    color: "#16A765",
    fontSize: 54,
    fontWeight: "800",
  },

  title: {
    fontSize: 25,
    fontWeight: "800",
    color: colors.text,
    marginTop: 18,
  },

  text: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    marginTop: 8,
  },

  card: {
    width: "100%",
    marginTop: 20,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: colors.text,
  },

});