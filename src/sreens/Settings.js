import React, { useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Switch,
  StyleSheet,
} from "react-native";

import Header from "./Header";
import Card from "./Card";
import BottomNav from "./BottomNav";

import { colors } from "../App";

export default function Settings({
  navigate,
}) {

  const [monitor, setMonitor] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [location, setLocation] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>

      <Header
        title="Configurações"
        subtitle="Preferências do aplicativo"
      />

      <ScrollView
        contentContainerStyle={styles.content}
      >

        <Text style={styles.section}>
          Monitoramento e sensores
        </Text>

        <Card>

          <Setting
            title="Monitoramento contínuo"
            value={monitor}
            onChange={setMonitor}
          />

          <Setting
            title="Notificações de alerta"
            value={notifications}
            onChange={setNotifications}
          />

          <Setting
            title="Acesso à localização"
            value={location}
            onChange={setLocation}
          />

        </Card>

        <Text style={styles.section}>
          Alertas e emergência
        </Text>

        <Card>

          <Text style={styles.title}>
            Tempo de resposta do alerta
          </Text>

          <Text style={styles.text}>
            30 segundos
          </Text>

          <View style={styles.separator} />

          <Text style={styles.title}>
            Contatos de emergência
          </Text>

          <Text style={styles.text}>
            Cristina • (11) 99999-9999
          </Text>

          <Text style={styles.text}>
            Elenice • (11) 98888-8888
          </Text>

        </Card>

        <Text style={styles.section}>
          Sobre e privacidade
        </Text>

        <Card>

          <Text style={styles.title}>
            Dados e privacidade
          </Text>

          <Text style={styles.text}>
            Seus dados são utilizados apenas
            para melhorar a segurança e o
            funcionamento do FallSafe.
          </Text>

        </Card>

      </ScrollView>

      <BottomNav
        current="settings"
        navigate={navigate}
      />

    </SafeAreaView>
  );
}

function Setting({
  title,
  value,
  onChange,
}) {

  return (
    <View style={styles.setting}>

      <Text style={styles.settingText}>
        {title}
      </Text>

      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{
          false: "#D5DDE3",
          true: "#8EDDB7",
        }}
      />

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

  section: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 10,
    marginTop: 8,
  },

  setting: {
    minHeight: 55,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F2F4",
  },

  settingText: {
    color: colors.text,
    fontSize: 13,
    flex: 1,
  },

  title: {
    fontSize: 15,
    fontWeight: "800",
    color: colors.text,
    marginBottom: 5,
  },

  text: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 4,
  },

  separator: {
    height: 1,
    backgroundColor: "#EEF1F3",
    marginVertical: 12,
  },

});