import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from "react-native";

import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";
import BottomNav from "../components/BottomNav";

import { colors } from "../colors";

export default function History({
  navigate,
}) {
  return (
    <SafeAreaView style={styles.safe}>
      <Header
        title="Histórico"
        subtitle="Eventos monitorados"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.sectionTitle}>
          Atividade recente
        </Text>

        <Event
          icon="!"
          iconType="warning"
          title="Possível queda detectada"
          info="Hoje, 14:32 • Alerta encerrado"
          status="✓ Verificação concluída"
        />

        <Event
          icon="●"
          iconType="active"
          title="Monitoramento iniciado"
          info="Hoje, 14:15 • 18 minutos"
        />

        <Event
          icon="✓"
          iconType="success"
          title="Calibração do sensor"
          info="Ontem, 08:20 • Concluída"
        />

        <Text style={styles.sectionTitle}>
          Relatórios
        </Text>

        <Card style={styles.reportCard}>
          <View style={styles.reportIcon}>
            <Text style={styles.reportIconText}>
              ≡
            </Text>
          </View>

          <View style={styles.reportContent}>
            <Text style={styles.title}>
              Relatório completo
            </Text>

            <Text style={styles.text}>
              Consulte os registros recentes
              do dispositivo.
            </Text>
          </View>

          <Button
            title="Exportar relatório"
            secondary
          />
        </Card>
      </ScrollView>

      <BottomNav
        current="history"
        navigate={navigate}
      />
    </SafeAreaView>
  );
}

function Event({
  icon,
  iconType,
  title,
  info,
  status,
}) {
  return (
    <Card style={styles.eventCard}>
      <View style={styles.eventHeader}>
        <View
          style={[
            styles.eventIcon,
            iconType === "warning" && styles.warningIcon,
            iconType === "active" && styles.activeIcon,
            iconType === "success" && styles.successIcon,
          ]}
        >
          <Text
            style={[
              styles.eventIconText,
              iconType === "warning" && styles.warningIconText,
              iconType === "active" && styles.activeIconText,
              iconType === "success" && styles.successIconText,
            ]}
          >
            {icon}
          </Text>
        </View>

        <View style={styles.eventInfo}>
          <Text style={styles.title}>
            {title}
          </Text>

          <Text style={styles.text}>
            {info}
          </Text>
        </View>
      </View>

      {status && (
        <View style={styles.status}>
          <Text style={styles.statusText}>
            {status}
          </Text>
        </View>
      )}
    </Card>
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

  sectionTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "800",
    marginTop: 16,
    marginBottom: 10,
  },

  eventCard: {
    marginBottom: 10,
    paddingVertical: 15,
  },

  eventHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  eventIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    backgroundColor: colors.lightBlue,
  },

  eventIconText: {
    fontSize: 16,
    fontWeight: "800",
    color: colors.blue,
  },

  warningIcon: {
    backgroundColor: "#FFF4E8",
  },

  warningIconText: {
    color: "#D9822B",
  },

  activeIcon: {
    backgroundColor: "#EAF7FF",
  },

  activeIconText: {
    color: colors.blue,
    fontSize: 13,
  },

  successIcon: {
    backgroundColor: "#E9FAF1",
  },

  successIconText: {
    color: colors.green,
  },

  eventInfo: {
    flex: 1,
  },

  title: {
    fontSize: 14,
    fontWeight: "800",
    color: colors.text,
    marginBottom: 5,
  },

  text: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 18,
  },

  status: {
    marginTop: 13,
    paddingVertical: 9,
    paddingHorizontal: 11,
    borderRadius: 10,
    backgroundColor: "#E9FAF1",
  },

  statusText: {
    color: "#168653",
    fontWeight: "700",
    fontSize: 11,
  },

  reportCard: {
    paddingVertical: 16,
  },

  reportIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },

  reportIconText: {
    color: colors.blue,
    fontSize: 20,
    fontWeight: "700",
  },

  reportContent: {
    marginBottom: 14,
  },
});