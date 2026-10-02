import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import Button from "../components/Button";
import Card from "../components/Card";

import { colors } from "../colors";

export default function Confirmed({
  setScreen,
}) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <View style={styles.successBadge}>
          <View style={styles.circle}>
            <Text style={styles.icon}>
              ✓
            </Text>
          </View>
        </View>

        <Text style={styles.label}>
          VERIFICAÇÃO CONCLUÍDA
        </Text>

        <Text style={styles.title}>
          Tudo certo!
        </Text>

        <Text style={styles.text}>
          Ficamos felizes que você está bem.
          {"\n"}
          O alerta foi encerrado.
        </Text>

        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIcon}>
              <Text style={styles.cardIconText}>
                ✓
              </Text>
            </View>

            <View style={styles.cardHeaderContent}>
              <Text style={styles.cardTitle}>
                Resumo da verificação
              </Text>

              <Text style={styles.cardStatus}>
                Alerta encerrado
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <View style={styles.infoDot} />

            <Text style={styles.infoText}>
              Alerta encerrado com sucesso.
            </Text>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoDot} />

            <Text style={styles.infoText}>
              Nenhuma emergência foi registrada.
            </Text>
          </View>
        </Card>

        <View style={styles.buttons}>
          <Button
            title="Voltar ao monitoramento"
            onPress={() =>
              setScreen("monitoring")
            }
          />

          <View style={styles.buttonSpacing} />

          <Button
            title="Voltar ao início"
            secondary
            onPress={() =>
              setScreen("home")
            }
          />
        </View>

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
    paddingHorizontal: 24,
    paddingVertical: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  successBadge: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: "#F0FCF6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 17,
  },

  circle: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: "#DDF9EA",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#BCEFD2",
  },

  icon: {
    color: "#16A765",
    fontSize: 46,
    fontWeight: "800",
  },

  label: {
    color: colors.green,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 7,
  },

  title: {
    fontSize: 25,
    fontWeight: "800",
    color: colors.text,
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
    marginTop: 24,
    paddingVertical: 17,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  cardIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#E8FAF1",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  cardIconText: {
    color: colors.green,
    fontSize: 17,
    fontWeight: "800",
  },

  cardHeaderContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: colors.text,
  },

  cardStatus: {
    color: colors.green,
    fontSize: 11,
    fontWeight: "600",
    marginTop: 3,
  },

  divider: {
    height: 1,
    backgroundColor: "#EDF1F3",
    marginVertical: 14,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  infoDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.green,
    marginRight: 9,
  },

  infoText: {
    flex: 1,
    color: colors.muted,
    fontSize: 12,
    lineHeight: 18,
  },

  buttons: {
    width: "100%",
    marginTop: 22,
  },

  buttonSpacing: {
    height: 10,
  },
});