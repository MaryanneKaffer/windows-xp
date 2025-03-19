import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import TaskBar from "./desktopComponents/taskBar";
import { desktopData } from "@/config/data/desktopData";
import FloatingWindow from "./desktopComponents/floatingWindow";

interface WindowData {
  name: string;
  icon: string;
}

export default function desktop() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [openWindows, setOpenWindows] = useState<WindowData[]>([]);

  const handleDoubleClick = (name: string, icon: StaticImageData) => {
    if (!openWindows.some((win) => win.name === name)) {
      setOpenWindows((prev) => [...prev, { name, icon: icon.src }]);
    }
  };

  return (
    <>
      <section className="bg-desktop min-h-screen bg-cover relative p-5">
        <div className="flex flex-col">
          {desktopData.map((item, index) => (
            <button key={index} className="w-[90px] h-[100px] place-items-center flex flex-col cursor-default" onClick={() => setActiveIndex(index)} onDoubleClick={() => handleDoubleClick(item.name, item.icon)} draggable="true">
              <Image src={item.icon} alt={item.name} draggable="false" className={`w-[50px] h-[50px] drop-shadow-[2px_3px_2px_rgba(0,0,0,0.3)] mt-auto mb-1 ${activeIndex === index ? "brightness-75 contrast-125 inset-0 opacity-60 " : ""}`} />
              <p className={`text-xl text-center w-[100px] mb-auto drop-shadow-[2px_3px_2px_rgba(0,0,0,0.7)] ${activeIndex === index ? "bg-winXpBlue" : ""}`}>{item.name}</p>
            </button>
          ))}
        </div>
        {openWindows.map((window, index) => (
          <FloatingWindow key={index} name={window.name} icon={window.icon} onClose={() => setOpenWindows((prev) => prev.filter((win) => win.name !== window.name))} />
        ))}
        <TaskBar />
      </section>

    </>
  );
}
