import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";
import TaskBar from "./desktopComponents/taskBar";
import { desktopData } from "@/config/data/desktopData";
import FloatingWindow from "./desktopComponents/floatingWindow";
import { ContextMenu } from "./desktopComponents/contextMenu";
import { useClickAway } from "react-use";

interface WindowData {
  name: string;
  icon: string;
}

export default function Desktop() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [openWindows, setOpenWindows] = useState<WindowData[]>([]);
  const [menuVisible, setMenuVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [item, setItem] = useState("");
  const ref = useRef(null);

  const handleDoubleClick = (name: string, icon: StaticImageData) => {
    if (!openWindows.some((win) => win.name === name)) {
      setOpenWindows((prev) => [...prev, { name, icon: icon.src }]);
    }
  }

  const Menu = (event: React.MouseEvent, name: string, index?: number) => {
    event.preventDefault();
    setPosition({ x: event.clientX, y: event.clientY });
    setMenuVisible(true);
    setItem(name);
    setActiveIndex(index!);
  };

  useClickAway(ref, () => { setMenuVisible(false), setActiveIndex(null) });

  return (
    <>
      <section className="bg-desktop h-[100dvh] w-full overflow-hidden bg-cover relative p-5">
        <div className="w-full h-full absolute bottom-0 right-0" onContextMenu={(e) => Menu(e, "Desktop")} ></div>
        <div className="flex flex-col">
          {desktopData.map((item, index) => (
            <button ref={ref} key={index} onContextMenu={(e) => Menu(e, "App", index)} className="w-[90px] h-[100px] place-items-center flex flex-col cursor-default" onClick={() => setActiveIndex(index)} onDoubleClick={() => handleDoubleClick(item.name, item.icon)} draggable="true">
              <Image src={item.icon} alt={item.name} draggable="false" className={`w-[50px] h-[50px] drop-shadow-[2px_3px_2px_rgba(0,0,0,0.3)] mt-auto mb-1 ${activeIndex === index ? "brightness-75 contrast-125 inset-0 opacity-60 " : ""}`} />
              <p className={`text-xl text-center w-[100px] mb-auto drop-shadow-[2px_3px_2px_rgba(0,0,0,0.7)] ${activeIndex === index ? "bg-winXpBlue" : ""}`}>{item.name}</p>
            </button>
          ))}
        </div>
        {openWindows.map((window, index) => (
          <FloatingWindow key={index} name={window.name} icon={window.icon} onClose={() => setOpenWindows((prev) => prev.filter((win) => win.name !== window.name))} />
        ))}
        <div onContextMenu={(e) => Menu(e, "Task Bar")}>
          <TaskBar />
        </div>
      </section>
      {menuVisible && (
        <div ref={ref}>
          <ContextMenu x={position.x} y={position.y} item={item} />
        </div>
      )}
    </>
  );
}