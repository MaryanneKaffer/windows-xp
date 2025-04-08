"use client";
import { useEffect, useState } from "react";
import Startup from "./startup";
import { currentResolution } from "./desktopComponents/windowComponents/desktopPropertiesComponent";

export default function Initializing() {
  const [visible, setVisible] = useState(true);
  const [showStartup, setShowStartup] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    setIsLargeScreen(screen.width > 1024);

    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 200);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setShowStartup(false);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!showStartup) return <Startup />;

  return (
    <div className="text-4xl text-gray-400 cursor-none w-[100dvw]" style={isLargeScreen ? { width: `${currentResolution[0]}px`, height: `${currentResolution[1]}px` } : {}}>
      <p className={`mx-2 ${visible ? "" : "hidden"}`}>_</p>
    </div>
  );
}
