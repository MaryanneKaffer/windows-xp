"use client";
import { useEffect, useState } from "react";
import Startup from "./startup";

export default function Initializing() {
  const [visible, setVisible] = useState(true);
  const [showStartup, setShowStartup] = useState(true);

  useEffect(() => {
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
    <div className="text-4xl text-gray-400 cursor-none w-screen">
      <p className={`mx-2 ${visible ? "" : "hidden"}`}>_</p>
    </div>
  );
}
