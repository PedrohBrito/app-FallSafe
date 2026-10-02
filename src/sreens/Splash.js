import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import Button from "../components/Button";
import Card from "../components/Card";
import { colors } from "../colors";

export default function Splash({ onStart }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <View style={styles.logoArea}>
          <View style={styles.logoOuter}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>✓</Text>
            </View>
          </View>
        </View>

        <Text style={styles.brand}>FallSafe</Text>

        <Text style={styles.subtitle}>
          Monitoramento inteligente de quedas
        </Text>

        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.title}>
              Sua segurança, sempre por perto.
            </Text>

            <Text style={styles.text}>
              O FallSafe utiliza o sensor do seu celular
              para acompanhar movimentos e identificar
              possíveis quedas.
            </Text>
          </View>
        </Card>

        <View style={styles.buttonArea}>
          <Button
            title="Começar  →"
            onPress={onStart}
          />
        </View>

        <View style={styles.footerArea}>
          <View style={styles.footerLine} />

          <Text style={styles.footer}>
            Proteção simples e inteligente
          </Text>
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
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
    paddingVertical: 24,
  },

  logoArea: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  logoOuter: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: "#F1FAFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#D7F0FC",
  },

  logo: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: colors.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#B8E5FA",
    shadowColor: colors.blue,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },

  logoText: {
    fontSize: 38,
    color: colors.blue,
    fontWeight: "800",
  },

  brand: {
    fontSize: 34,
    fontWeight: "800",
    color: colors.text,
    letterSpacing: -0.8,
  },

  subtitle: {
    color: colors.muted,
    fontSize: 14,
    marginTop: 6,
    textAlign: "center",
  },

  card: {
    width: "100%",
    marginTop: 38,
    paddingVertical: 22,
    paddingHorizontal: 20,
  },

  cardContent: {
    alignItems: "center",
  },

  title: {
    fontSize: 17,
    fontWeight: "800",
    color: colors.text,
    textAlign: "center",
    marginBottom: 9,
  },

  text: {
    color: colors.muted,
    lineHeight: 20,
    fontSize: 13,
    textAlign: "center",
    maxWidth: 280,
  },

  buttonArea: {
    width: "100%",
    marginTop: 24,
  },

  footerArea: {
    alignItems: "center",
    marginTop: 24,
  },

  footerLine: {
    width: 28,
    height: 2,
    borderRadius: 2,
    backgroundColor: "#D7EAF3",
    marginBottom: 10,
  },

  footer: {
    color: "#9AA6AF",
    fontSize: 11,
    letterSpacing: 0.2,
  },
});