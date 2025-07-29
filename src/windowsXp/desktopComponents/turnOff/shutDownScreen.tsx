'use client';
import { useState, useEffect } from "react";
import OffScreen from "./offScreen";

export default function ShutdownScreen() {
  const [offScreen, setOffScreen] = useState(false)
  const messages = ["Loggin off...", "Saving your settings...", "Windows is shutting down..."];
  const [index, setIndex] = useState(0);
  const [hasPlayedSound, setHasPlayedSound] = useState(false);

  useEffect(() => {
    if (!hasPlayedSound) {
      const audio = new Audio("/audio/shutDownAudio.mp3");
      audio.play()
      setHasPlayedSound(true)
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeout(() => setOffScreen(true), 1000);
    }, 6000);
    return () => clearTimeout(timeout);
  }, [setOffScreen]);


  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex(prev => (prev + 1 < messages.length ? prev + 1 : 0));
    }, 2500);

    return () => clearInterval(intervalo);
  }, []);

  if (offScreen) return <OffScreen />;

  return (
    <section className="cursor-none h-[100dvh] w-[100dvw]">
      <div className="bg-[#00309C] h-[100dvh] w-full flex relative">
        <div className="h-[3px] flex lg:w-[1000px] w-[400px] fixed top-[12.5dvh] lg:right-[580px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="h-[3px] flex lg:w-[1000px] w-[400px] fixed bottom-[12.5dvh] lg:right-[580px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
        <div className="bg-[#5A7EDC] h-[75dvh] w-full self-center flex flex-col items-center justify-center px-[30%] gap-6">
          <img src="/logo/winXpLogo.png" className="w-[220px] ml-auto drop-shadow-[4px_4px_1px_rgba(0,0,255,0.3)]" />
          <p className="lg:text-4xl text-right w-full text-xl font-arial font-bold drop-shadow-[4px_4px_1px_rgba(0,0,255,0.1)]">{messages[index]}</p>
        </div>
      </div>
    </section>
  )
}

