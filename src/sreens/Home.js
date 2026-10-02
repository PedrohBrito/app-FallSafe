import React from "react";

import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Header from "./Header";
import Card from "./Card";
import Button from "./Button";
import BottomNav from "./BottomNav";

import { colors } from "../App";

export default function Home({
  navigate,
  setScreen,
}) {

  return (
    <SafeAreaView style={styles.safe}>

      <Header
        title="Olá, Pedro Brito!"
        subtitle="Tudo tranquilo por aqui?"
      />

      <ScrollView
        contentContainerStyle={styles.content}
      >

        {/* STATUS */}

        <Card style={styles.statusCard}>

          <View style={styles.row}>

            <View>

              <Text style={styles.smallLabel}>
                MONITORAMENTO
              </Text>

              <Text style={styles.status}>
                Desativado
              </Text>

            </View>

            <View style={styles.dot} />

          </View>

          <Text style={styles.description}>
            Ative o monitoramento para acompanhar
            a segurança.
          </Text>

          <Button
            title="Iniciar monitoramento"
            onPress={() =>
              setScreen("monitoring")
            }
          />

        </Card>

        <Text style={styles.section}>
          Acesso rápido
        </Text>

        <QuickCard
          icon="◷"
          title="Visualizar histórico"
          text="Veja seus últimos eventos."
          onPress={() =>
            navigate("history")
          }
        />

        <QuickCard
          icon="☎"
          title="Contato de emergência"
          text="Configure pessoas de confiança."
        />

        <QuickCard
          icon="◌"
          title="Sensibilidade do sensor"
          text="Nível atual: Normal"
        />

        <Card style={styles.tip}>

          <Text style={styles.tipTitle}>
            Dica de segurança
          </Text>

          <Text style={styles.description}>
            Mantenha o celular próximo durante
            o monitoramento.
          </Text>

        </Card>

      </ScrollView>

      <BottomNav
        current="home"
        navigate={navigate}
      />

    </SafeAreaView>
  );
}

function QuickCard({
  icon,
  title,
  text,
  onPress,
}) {

  return (
    <TouchableOpacity
      style={styles.quick}
      onPress={onPress}
    >

      <Text style={styles.quickIcon}>
        {icon}
      </Text>

      <View style={{ flex: 1 }}>

        <Text style={styles.quickTitle}>
          {title}
        </Text>

        <Text style={styles.quickText}>
          {text}
        </Text>

      </View>

      <Text style={styles.arrow}>
        ›
      </Text>

    </TouchableOpacity>
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

  statusCard: {
    borderColor: "#BEE8D1",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  smallLabel: {
    color: colors.blue,
    fontSize: 10,
    fontWeight: "800",
  },

  status: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.text,
    marginTop: 3,
  },

  dot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: colors.green,
  },

  description: {
    color: colors.muted,
    lineHeight: 19,
    fontSize: 13,
    marginTop: 7,
  },

  section: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "800",
    marginTop: 8,
    marginBottom: 10,
  },

  quick: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 14,
    marginBottom: 9,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EDF1F4",
  },

  quickIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.lightBlue,
    color: colors.blue,
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
    marginRight: 12,
  },

  quickTitle: {
    fontWeight: "800",
    color: colors.text,
    fontSize: 13,
  },

  quickText: {
    color: colors.muted,
    fontSize: 11,
    marginTop: 3,
  },

  arrow: {
    color: colors.blue,
    fontSize: 24,
  },

  tip: {
    backgroundColor: "#EFF6FF",
  },

  tipTitle: {
    color: colors.blue,
    fontWeight: "800",
  },

});