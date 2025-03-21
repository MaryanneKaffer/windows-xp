"use client";
import { useEffect, useState } from "react";
import Startup from "./startup";

export default function Initializing() {
  const [visible, setVisible] = useState(true);
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev: any) => !prev);
    }, 200);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setShowComponent(false);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!showComponent) return <Startup />;

  return (
    <div className="text-4xl text-gray bg-black cursor-none">
      <h2 className={`mx-2 ${visible ? "" : "hidden"}`}>_</h2>
    </div>
  );
}
