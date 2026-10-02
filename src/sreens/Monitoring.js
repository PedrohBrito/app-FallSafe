import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";
import BottomNav from "../components/BottomNav";

import { colors } from "../colors";

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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.statusArea}>
          <View style={styles.statusCircleOuter}>
            <View style={styles.statusCircle}>
              <View style={styles.statusIndicator} />

              <Text style={styles.statusLabel}>
                ATIVO
              </Text>

              <Text style={styles.statusTitle}>
                Postura Estável
              </Text>

              <Text style={styles.statusText}>
                O acelerômetro está analisando
                seus movimentos.
              </Text>
            </View>
          </View>
        </View>

        <Card style={styles.dataCard}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardTitle}>
                Últimos dados
              </Text>

              <Text style={styles.cardSubtitle}>
                Informações do monitoramento
              </Text>
            </View>

            <View style={styles.liveBadge}>
              <View style={styles.liveDot} />
              <Text style={styles.liveText}>
                AO VIVO
              </Text>
            </View>
          </View>

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
            last
          />
        </Card>

        <Card style={styles.greenCard}>
          <View style={styles.successIcon}>
            <Text style={styles.successIconText}>
              ✓
            </Text>
          </View>

          <View style={styles.successContent}>
            <Text style={styles.cardTitle}>
              Nenhum impacto detectado
            </Text>

            <Text style={styles.text}>
              O monitoramento está funcionando
              normalmente.
            </Text>
          </View>
        </Card>

        <View style={styles.buttons}>
          <Button
            title="Parar monitoramento"
            secondary
            onPress={() => setScreen("home")}
          />

          <View style={styles.buttonSpacing} />

          <Button
            title="Testar alerta"
            onPress={() => setScreen("alert")}
          />
        </View>
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
  last,
}) {
  return (
    <View
      style={[
        styles.dataRow,
        last && styles.dataRowLast,
      ]}
    >
      <Text style={styles.dataLabel}>
        {label}
      </Text>

      <View style={styles.valueContainer}>
        <View style={styles.valueDot} />

        <Text style={styles.dataValue}>
          {value}
        </Text>
      </View>
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

  statusArea: {
    alignItems: "center",
    marginTop: 12,
    marginBottom: 24,
  },

  statusCircleOuter: {
    width: 238,
    height: 238,
    borderRadius: 119,
    backgroundColor: "#EFFBF5",
    alignItems: "center",
    justifyContent: "center",
  },

  statusCircle: {
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#D5F4E3",
    shadowColor: colors.blue,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },

  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.green,
    marginBottom: 7,
  },

  statusLabel: {
    color: colors.green,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 5,
  },

  statusTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "800",
  },

  statusText: {
    color: colors.muted,
    fontSize: 11,
    lineHeight: 17,
    textAlign: "center",
    width: 165,
    marginTop: 7,
  },

  dataCard: {
    paddingVertical: 16,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: colors.text,
  },

  cardSubtitle: {
    color: colors.muted,
    fontSize: 11,
    marginTop: 3,
  },

  liveBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightBlue,
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },

  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.blue,
    marginRight: 5,
  },

  liveText: {
    color: colors.blue,
    fontSize: 9,
    fontWeight: "800",
  },

  dataRow: {
    minHeight: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#EEF1F3",
  },

  dataRowLast: {
    borderBottomWidth: 0,
  },

  dataLabel: {
    color: colors.muted,
    fontSize: 12,
  },

  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  valueDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.green,
    marginRight: 6,
  },

  dataValue: {
    color: colors.text,
    fontSize: 12,
    fontWeight: "700",
  },

  greenCard: {
    backgroundColor: "#F0FFF7",
    borderColor: "#C8F2DC",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    paddingVertical: 16,
  },

  successIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#DDF8E9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  successIconText: {
    color: colors.green,
    fontSize: 19,
    fontWeight: "800",
  },

  successContent: {
    flex: 1,
  },

  text: {
    color: colors.muted,
    fontSize: 11,
    lineHeight: 17,
    marginTop: 4,
  },

  buttons: {
    marginTop: 22,
  },

  buttonSpacing: {
    height: 10,
  },
});