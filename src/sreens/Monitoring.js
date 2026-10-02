import React from "react";

import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

import Header from "./Header";
import Card from "./Card";
import Button from "./Button";
import BottomNav from "./BottomNav";

import { colors } from "../App";

export default function Monitoring({
  setScreen,
  navigate,
}) {

  return (
    <SafeAreaView style={styles.safe}>

      <Header
        title="Monitoramento"
        subtitle="Proteção ativa em tempo real"
      />

      <ScrollView
        contentContainerStyle={styles.content}
      >

        <View style={styles.circle}>

          <Text style={styles.icon}>
            ◉
          </Text>

          <Text style={styles.title}>
            Postura Estável
          </Text>

          <Text style={styles.text}>
            O acelerômetro está analisando
            seus movimentos.
          </Text>

        </View>

        <Card>

          <Text style={styles.cardTitle}>
            Últimos dados
          </Text>

          <DataRow
            label="Aceleração"
            value="Normal"
          />

          <DataRow
            label="Sensibilidade"
            value="Normal"
          />

          <DataRow
            label="Impactos detectados"
            value="Nenhum"
          />

        </Card>

        <Card style={styles.greenCard}>

          <Text style={styles.cardTitle}>
            Nenhum impacto detectado
          </Text>

          <Text style={styles.text}>
            O monitoramento está funcionando
            normalmente.
          </Text>

        </Card>

        <Button
          title="Parar monitoramento"
          secondary
          onPress={() =>
            setScreen("home")
          }
        />

        <Button
          title="Testar alerta"
          onPress={() =>
            setScreen("alert")
          }
        />

      </ScrollView>

      <BottomNav
        current="monitoring"
        navigate={navigate}
      />

    </SafeAreaView>
  );
}

function DataRow({
  label,
  value,
}) {

  return (
    <View style={styles.dataRow}>

      <Text style={styles.dataLabel}>
        {label}
      </Text>

      <Text style={styles.dataValue}>
        {value}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    padding: 16,
    paddingBottom: 100,
  },

  circle: {
    backgroundColor: "#FFFFFF",
    borderRadius: 110,
    width: 210,
    height: 210,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    borderWidth: 10,
    borderColor: "#E3F6EC",
  },

  icon: {
    fontSize: 46,
    color: colors.blue,
  },

  title: {
    fontWeight: "800",
    color: colors.text,
    marginTop: 8,
  },

  text: {
    color: colors.muted,
    fontSize: 11,
    textAlign: "center",
    width: 170,
    marginTop: 5,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: colors.text,
    marginBottom: 7,
  },

  dataRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F2F4",
  },

  dataLabel: {
    color: colors.muted,
    fontSize: 12,
  },

  dataValue: {
    color: colors.text,
    fontSize: 12,
    fontWeight: "700",
  },

  greenCard: {
    backgroundColor: "#F0FFF7",
    borderColor: "#C8F2DC",
  },

});