import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";

import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";
import BottomNav from "../components/BottomNav";

import { colors } from "../App";

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
        contentContainerStyle={styles.content}
      >

        <Event
          title="Possível queda detectada"
          info="Hoje, 14:32 • Alerta encerrado"
          status="✓ Verificação concluída"
        />

        <Event
          title="Monitoramento iniciado"
          info="Hoje, 14:15 • 18 minutos"
        />

        <Event
          title="Calibração do sensor"
          info="Ontem, 08:20 • Concluída"
        />

        <Card>

          <Text style={styles.title}>
            Relatório completo
          </Text>

          <Text style={styles.text}>
            Consulte os registros recentes
            do dispositivo.
          </Text>

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
  title,
  info,
  status,
}) {

  return (
    <Card>

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.text}>
        {info}
      </Text>

      {status && (
        <Text style={styles.status}>
          {status}
        </Text>
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
    padding: 16,
    paddingBottom: 100,
  },

  title: {
    fontSize: 15,
    fontWeight: "800",
    color: colors.text,
    marginBottom: 7,
  },

  text: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 19,
  },

  status: {
    marginTop: 12,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#E9FAF1",
    color: "#168653",
    fontWeight: "700",
    fontSize: 12,
  },

});