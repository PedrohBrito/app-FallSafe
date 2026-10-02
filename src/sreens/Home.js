import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";
import BottomNav from "../components/BottomNav";

import { colors } from "../colors";

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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Card style={styles.statusCard}>
          <View style={styles.statusHeader}>
            <View>
              <Text style={styles.smallLabel}>
                MONITORAMENTO
              </Text>

              <Text style={styles.status}>
                Desativado
              </Text>
            </View>

            <View style={styles.statusIndicator}>
              <View style={styles.statusDot} />
            </View>
          </View>

          <View style={styles.statusInfo}>
            <View style={styles.infoIcon}>
              <Text style={styles.infoIconText}>
                !
              </Text>
            </View>

            <Text style={styles.description}>
              Ative o monitoramento para acompanhar
              sua segurança em tempo real.
            </Text>
          </View>

          <Button
            title="Iniciar monitoramento"
            onPress={() => setScreen("monitoring")}
          />
        </Card>

        <View style={styles.sectionHeader}>
          <Text style={styles.section}>
            Acesso rápido
          </Text>

          <Text style={styles.sectionHint}>
            Atalhos
          </Text>
        </View>

        <QuickCard
          icon="◷"
          title="Visualizar histórico"
          text="Veja seus últimos eventos."
          onPress={() => navigate("history")}
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
          <View style={styles.tipIcon}>
            <Text style={styles.tipIconText}>
              ✓
            </Text>
          </View>

          <View style={styles.tipContent}>
            <Text style={styles.tipTitle}>
              Dica de segurança
            </Text>

            <Text style={styles.tipText}>
              Mantenha o celular próximo durante
              o monitoramento.
            </Text>
          </View>
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
      activeOpacity={0.75}
    >
      <View style={styles.quickIcon}>
        <Text style={styles.quickIconText}>
          {icon}
        </Text>
      </View>

      <View style={styles.quickContent}>
        <Text style={styles.quickTitle}>
          {title}
        </Text>

        <Text style={styles.quickText}>
          {text}
        </Text>
      </View>

      <View style={styles.arrowContainer}>
        <Text style={styles.arrow}>
          ›
        </Text>
      </View>
    </TouchableOpacity>
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

  statusCard: {
    borderColor: "#BFE9D2",
    paddingVertical: 18,
  },

  statusHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  smallLabel: {
    color: colors.blue,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.7,
  },

  status: {
    fontSize: 21,
    fontWeight: "800",
    color: colors.text,
    marginTop: 4,
  },

  statusIndicator: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#EAF9F1",
    alignItems: "center",
    justifyContent: "center",
  },

  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.green,
  },

  statusInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 17,
  },

  infoIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  infoIconText: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: "800",
  },

  description: {
    flex: 1,
    color: colors.muted,
    lineHeight: 18,
    fontSize: 12,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 23,
    marginBottom: 10,
  },

  section: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "800",
  },

  sectionHint: {
    color: colors.muted,
    fontSize: 11,
  },

  quick: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E9EEF1",
  },

  quickIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  quickIconText: {
    color: colors.blue,
    fontSize: 20,
  },

  quickContent: {
    flex: 1,
  },

  quickTitle: {
    fontWeight: "800",
    color: colors.text,
    fontSize: 13,
  },

  quickText: {
    color: colors.muted,
    fontSize: 11,
    marginTop: 4,
  },

  arrowContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#F3F8FA",
    alignItems: "center",
    justifyContent: "center",
  },

  arrow: {
    color: colors.blue,
    fontSize: 21,
    lineHeight: 23,
  },

  tip: {
    backgroundColor: "#EFF6FF",
    borderColor: "#DDECF8",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    paddingVertical: 15,
  },

  tipIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  tipIconText: {
    color: colors.green,
    fontSize: 17,
    fontWeight: "800",
  },

  tipContent: {
    flex: 1,
  },

  tipTitle: {
    color: colors.blue,
    fontWeight: "800",
    fontSize: 13,
    marginBottom: 4,
  },

  tipText: {
    color: colors.muted,
    fontSize: 11,
    lineHeight: 17,
  },
});