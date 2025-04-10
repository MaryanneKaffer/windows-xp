import Image, { StaticImageData } from "next/image";
import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { currentWallpaper } from "./desktopComponents/windowComponents/desktopPropertiesComponent"
import FloatingWindow from "./desktopComponents/floatingWindow";
import { ContextMenu } from "./desktopComponents/contextMenu";
import ScreenSaverComponent from "./screenSaverComponent";
import defaultIcon from "@/public/icons/supportIcon.png";
import { desktopData } from "@/config/data/desktopData";
import TaskBar from "./desktopComponents/taskBar";
import { currentResolution } from "./desktopComponents/windowComponents/desktopPropertiesComponent";
import userAccountsIcon from "@/public/icons/userAccountsIcon.png";

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState<{ name: string; icon: string; type: string | null; fixedSize?: boolean; width?: string; height?: string; mobileWidth?: string; mobileHeight?: string; }[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [icon, setIcon] = useState<StaticImageData | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [screenSaving, setScreenSaving] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [item, setItem] = useState("");
  const [name, setName] = useState("");
  const refStart = useRef(null);
  const refApp = useRef(null);

  const handleDoubleClick = (name: string, icon: StaticImageData, type: string, fixedSize?: boolean, width?: string, height?: string, mobileHeight?: string, mobileWidth?: string) => {
    if (!openWindows.some((win) => win.name === name)) {
      setOpenWindows((prev) => [...prev, { name, icon: icon.src, type, fixedSize, width, height, mobileHeight, mobileWidth }]);
    }
  }

  const openContextMenu = (event: React.MouseEvent, name: string, index?: number, appName?: string, appIcon?: StaticImageData,) => {
    event.preventDefault();
    setPosition({ x: event.clientX, y: event.clientY });
    setMenuVisible(true);
    setItem(name);
    setActiveIndex(index!);
    setName(appName!);
    setIcon(appIcon!);
  };

  useClickAway(refStart, () => { setMenuVisible(false) });
  useClickAway(refApp, () => { setActiveIndex(null) });

  return (
    <div className="h-[100dvh] w-[100dvw] place-items-center justify-center flex flex-col">
      <ScreenSaverComponent screenSaving={screenSaving} setScreenSaving={setScreenSaving} />
      <section className="overflow-hidden bg-cover relative p-5 max-h-[100dvh] max-w-[100dvw]" style={screen.width > 1024 ? { width: `${currentResolution[0]}px`, height: `${currentResolution[1]}px` } : { width: "100dvw", height: "100dvh" }}>
        <Image src={currentWallpaper} alt="wallpaper" width={2000} height={2000} className="w-full h-full absolute bottom-0 right-0 object-cover" onContextMenu={(e) => openContextMenu(e, "Desktop")} />
        <div ref={refApp} className="flex flex-col">
          {desktopData.map((item, index) => (
            <button key={index} onContextMenu={(e) => openContextMenu(e, "App", index, item.name, item.icon)} className="w-[90px] h-[100px] place-items-center flex flex-col cursor-default" draggable="true" onClick={() => setActiveIndex(index)}
              onDoubleClick={() => { if (item.type === "link") { window.open(item.link, "_blank") } else { handleDoubleClick(item.name, item.icon, item.type, item.fixedSize, item.width, item.height, item.mobileHeight, item.mobileWidth) } }}>
              <Image src={item.icon} alt={item.name} draggable="false" className={`w-[50px] h-[50px] drop-shadow-[2px_3px_2px_rgba(0,0,0,0.3)] mt-auto mb-1 ${activeIndex === index ? "brightness-75 contrast-125 inset-0 opacity-60 " : ""}`} />
              <p className={`text-xl text-center w-[100px] mb-auto drop-shadow-[2px_3px_2px_rgba(0,0,0,0.7)] ${activeIndex === index ? "bg-winXpBlue" : ""}`}>{item.name}</p>
            </button>
          ))}
        </div>
        {openWindows.map((window, index,) => (
          <FloatingWindow key={window.name} name={window.name} icon={window.icon} type={window.type} onClose={() => setOpenWindows((prev) => prev.filter((win) => win.name !== window.name))} fixedSize={window.fixedSize ?? false} width={window.width ?? ""} height={window.height ?? ""} mobileWidth={window.mobileWidth ?? ""} mobileHeight={window.mobileHeight ?? "50%"} />
        ))}
        <div onContextMenu={(e) => openContextMenu(e, "Task Bar")}>
          <TaskBar setOpenWindows={setOpenWindows} name={"User Accounts"} icon={userAccountsIcon.src} type={"userAccounts"} fixedSize={false} width={"70%"} height={"90%"} />
        </div>
      </section >
      {menuVisible && (
        <div ref={refStart}>
          <ContextMenu x={position.x} y={position.y} item={item} setOpenWindows={setOpenWindows} appName={name} appIcon={icon ?? defaultIcon} type={""} />
        </div>
      )}
    </div>
  );
}