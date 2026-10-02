import React, { useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Switch,
  StyleSheet,
} from "react-native";

import Header from "../components/Header";
import Card from "../components/Card";
import BottomNav from "../components/BottomNav";

import { colors } from "../colors";

export default function Settings({ navigate }) {
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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.section}>
          Monitoramento e sensores
        </Text>

        <Card style={styles.card}>
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
            last
          />
        </Card>

        <Text style={styles.section}>
          Alertas e emergência
        </Text>

        <Card style={styles.card}>
          <View style={styles.infoBlock}>
            <Text style={styles.title}>
              Tempo de resposta do alerta
            </Text>

            <Text style={styles.value}>
              30 segundos
            </Text>
          </View>

          <View style={styles.separator} />

          <View style={styles.infoBlock}>
            <Text style={styles.title}>
              Contatos de emergência
            </Text>

            <View style={styles.contact}>
              <View style={styles.contactIcon}>
                <Text style={styles.contactIconText}>C</Text>
              </View>

              <View>
                <Text style={styles.contactName}>
                  Cintia
                </Text>

                <Text style={styles.contactNumber}>
                  (11) 99999-9999
                </Text>
              </View>
            </View>

            <View style={styles.contact}>
              <View style={styles.contactIcon}>
                <Text style={styles.contactIconText}>E</Text>
              </View>

              <View>
                <Text style={styles.contactName}>
                  Eleutério
                </Text>

                <Text style={styles.contactNumber}>
                  (11) 98888-8888
                </Text>
              </View>
            </View>
          </View>
        </Card>

        <Text style={styles.section}>
          Sobre e privacidade
        </Text>

        <Card style={styles.card}>
          <View style={styles.privacyHeader}>
            <View style={styles.privacyIcon}>
              <Text style={styles.privacyIconText}>✓</Text>
            </View>

            <Text style={styles.title}>
              Dados e privacidade
            </Text>
          </View>

          <Text style={styles.text}>
            Seus dados são utilizados apenas para melhorar
            a segurança e o funcionamento do FallSafe.
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
  last,
}) {
  return (
    <View
      style={[
        styles.setting,
        last && styles.settingLast,
      ]}
    >
      <Text style={styles.settingText}>
        {title}
      </Text>

      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{
          false: "#DCE3E8",
          true: "#9BE5C1",
        }}
        thumbColor={value ? colors.green : "#F7F9FA"}
        ios_backgroundColor="#DCE3E8"
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
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: 110,
  },

  section: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "800",
    marginTop: 18,
    marginBottom: 10,
  },

  card: {
    width: "100%",
    paddingVertical: 8,
  },

  setting: {
    minHeight: 58,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EDF1F3",
  },

  settingLast: {
    borderBottomWidth: 0,
  },

  settingText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "500",
    flex: 1,
    paddingRight: 15,
  },

  infoBlock: {
    paddingVertical: 8,
  },

  title: {
    fontSize: 14,
    fontWeight: "800",
    color: colors.text,
    marginBottom: 6,
  },

  value: {
    color: colors.blue,
    fontSize: 13,
    fontWeight: "600",
  },

  text: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 10,
  },

  separator: {
    height: 1,
    backgroundColor: "#EDF1F3",
    marginVertical: 8,
  },

  contact: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  contactIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  contactIconText: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: "800",
  },

  contactName: {
    color: colors.text,
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 2,
  },

  contactNumber: {
    color: colors.muted,
    fontSize: 12,
  },

  privacyHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  privacyIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#E8FAF1",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  privacyIconText: {
    color: colors.green,
    fontSize: 16,
    fontWeight: "800",
  },
});