import { TurnOffProvider } from "@/src/windowsXp/desktopComponents/turnOff/turnOffContext";
import Initializing from "../src/windowsXp/initializing";

export default function Home() {
  return (
    <TurnOffProvider>
      <Initializing />
    </TurnOffProvider>)
    ;
}
