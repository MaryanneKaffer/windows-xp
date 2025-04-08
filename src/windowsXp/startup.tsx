'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { useAudioStore } from "@/public/audio/audioStore";
import winXpLogo from "@/public/logo/winXpLogo.jpg";
import Desktop from "./Desktop";
import { currentResolution } from "./desktopComponents/windowComponents/desktopPropertiesComponent";

export default function Startup() {
  const [screen, setScreen] = useState<"startup" | "welcome" | "desktop">("startup");
  const playAudio = useAudioStore((state) => state.playAudio);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setScreen("welcome");
      setTimeout(() => setScreen("desktop"), 3000);
      setTimeout(() => playAudio(), 2000);
    }, 6000);

    return () => clearTimeout(timeout);
  }, [playAudio]);

  if (screen === "desktop") return <Desktop />;

  return (
    <>
      {screen === "startup" && (
        <section className="h-[100dvh] w-[100dvw] grid grid-rows-[1fr_auto] cursor-none" style={window.innerWidth > 1024 ? { width: `${currentResolution[0]}px`, height: `${currentResolution[1]}px` } : {}}>
          <div className="flex flex-col self-center mx-auto">
            <Image src={winXpLogo.src} alt="Windows XP Logo" className="lg:w-[450px] mb-10" width={300} height={200} />
            <div className="border-white border-3 rounded-lg p-[3px] w-72 overflow-hidden mx-auto">
              <div className="animate-moving flex gap-1">
                <span className="h-5 w-4 bg-startUp1 rounded-sm"></span>
                <span className="h-5 w-4 bg-startUp2 rounded-sm"></span>
                <span className="h-5 w-4 bg-startUp3 rounded-sm"></span>
              </div>
            </div>
          </div>
          <p className="text-md mx-2">Copyright © Microsoft Corporation</p>
        </section>
      )}
      {screen === "welcome" && (
        <section className="cursor-none h-[100dvh] w-[100dvw]" style={window.innerWidth > 1024 ? { width: `${currentResolution[0]}px`, height: `${currentResolution[1]}px` } : {}}>
          <div className="bg-blue-800 h-[100dvh] w-full flex relative">
            <div className="h-[3px] flex lg:w-[1000px] w-[400px] fixed top-[12.5dvh] lg:right-[580px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <div className="h-[3px] flex lg:w-[1000px] w-[400px] fixed bottom-[12.5dvh] lg:right-[580px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>

            <div className="bg-blue-500 h-[75dvh] w-full self-center flex items-center justify-center">
              <p className="lg:text-7xl text-4xl font-arial font-bold ml-[20dvh] italic drop-shadow-[4px_4px_1px_rgba(0,0,255,0.3)]">welcome</p>
            </div>
          </div>
        </section>
      )}
      <audio src="/audio/startUpSound.mp3" />
    </>
  );
}