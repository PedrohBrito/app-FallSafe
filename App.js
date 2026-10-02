import { useState } from "react";
import { SafeAreaView } from "react-native";

import Splash from "./src/sreens/Splash";
import Home from "./src/sreens/Home";
import Monitoring from "./src/sreens/Monitoring";
import FallAlert from "./src/sreens/FallAlart";
import Confirmed from "./src/sreens/Confirmed";
import History from "./src/sreens/History";
import Settings from "./src/sreens/Settings";

export const colors = {
  blue: "#0077B6",
  lightBlue: "#EAF7FF",
  green: "#39D98A",
  text: "#263238",
  muted: "#7C8792",
  background: "#F7FAFC",
  white: "#FFFFFF",
};

export default function App() {
  const [started, setStarted] = useState(false);
  const [screen, setScreen] = useState("home");

  const navigate = (screenName) => {
    setScreen(screenName);
  };

  if (!started) {
    return <Splash onStart={() => setStarted(true)} />;
  }

  switch (screen) {
    case "monitoring":
      return (
        <Monitoring
          setScreen={setScreen}
          navigate={navigate}
        />
      );

    case "alert":
      return <FallAlert setScreen={setScreen} />;

    case "confirmed":
      return <Confirmed setScreen={setScreen} />;

    case "history":
      return <History navigate={navigate} />;

    case "settings":
      return <Settings navigate={navigate} />;

    default:
      return (
        <Home
          navigate={navigate}
          setScreen={setScreen}
        />
      );
  }
}