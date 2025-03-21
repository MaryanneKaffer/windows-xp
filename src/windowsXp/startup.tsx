'use client';
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useAudioStore } from "@/public/audio/audioStore";
import winXpLogo from "@/public/logo/winXpLogo.jpg";
import Desktop from "./Desktop";

export default function Startup() {
  const [showStartUp, setShowStartUp] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showDesktop, setShowDesktop] = useState(false);
  const playAudio = useAudioStore(
    (state: { playAudio: any }) => state.playAudio,
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowStartUp(false);
      setShowWelcome(true);
      setTimeout(() => {
        setShowWelcome(false);
        setShowDesktop(true);
      }, 3000);
      setTimeout(() => {
        playAudio();
      }, 2000);
    }, 6000);

    return () => clearTimeout(timeout);
  }, [playAudio]);

  if (showDesktop) return <Desktop />;
  return (
    <>
      {showStartUp && (
        <section className="h-[100dvh] grid place-items-center grid-rows-[1fr_auto] cursor-none overflow-hidden">
          <div className="flex flex-col">
            <Image
              src={winXpLogo.src}
              alt="Windows XP Logo"
              className="justify-self-center self-center lg:w-[450px] mb-10"
              width={300}
              height={200}
            />
            <div className="border-white border-3 rounded-lg p-[3px] w-72 justify-self-center self-center overflow-hidden">
              <div className="animate-moving flex gap-1">
                <div className="h-5 w-4 bg-startUp1 rounded-sm"></div>
                <div className="h-5 w-4 bg-startUp2 rounded-sm"></div>
                <div className="h-5 w-4 bg-startUp3 rounded-sm"></div>
              </div>
            </div>
          </div>
          <p className="text-md mx-2 self-end justify-self-start">
            Copyright © Microsoft Corporation
          </p>
        </section>
      )}
      {showWelcome && (
        <section className="cursor-none">
          <div className="bg-blue-900 h-[100dvh] flex relative">
            <div className="bg-blue-500 h-[75vh] w-full self-center flex items-center justify-center">
              <div className="h-[3px] flex lg:w-[1000px] w-[400px] fixed top-[12.5vh] lg:right-[580px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
              <p className="lg:text-7xl text-4xl font-arial font-bold ml-[20vh] italic drop-shadow-[4px_4px_1px_rgba(0,0,255,0.3)]">
                welcome
              </p>
            </div>
            <div className="h-[3px] flex lg:w-[1000px] w-[400px] fixed  bottom-[12.5vh] lg:right-[580px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
          </div>
        </section>
      )}
      <audio ref={audioRef} src="/audio/startUpSound.mp3" />
    </>
  );
}
