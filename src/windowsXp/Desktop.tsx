import Image, { StaticImageData } from "next/image";
import { useClickAway } from "react-use";
import { useEffect, useRef, useState } from "react";
import { currentWallpaper } from "./desktopComponents/windowComponents/desktopPropertiesComponent"
import FloatingWindow from "./desktopComponents/floatingWindow";
import { ContextMenu } from "./desktopComponents/contextMenu";
import ScreenSaverComponent from "./screenSaverComponent";
import defaultIcon from "@/public/icons/supportIcon.png";
import { desktopData } from "@/config/data/desktopData";
import TaskBar from "./desktopComponents/taskBar";
import { currentResolution } from "./desktopComponents/windowComponents/desktopPropertiesComponent";
import userAccountsIcon from "@/public/icons/userAccountsIcon.png";
import { useTurnOff } from "./desktopComponents/turnOff/turnOffContext";
import ShutdownScreen from "./desktopComponents/turnOff/shutDownScreen";
import folderClosedIcon from "@/public/icons/folderClosedIcon.png";
import textDocumentIcon from "@/public/icons/textDocumentIcon.png"

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState<{ name: string; icon: string; type: string | null; fixedSize?: boolean; isProperties?: boolean; width?: string; height?: string; mobileWidth?: string; mobileHeight?: string; }[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [icon, setIcon] = useState<StaticImageData | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [screenSaving, setScreenSaving] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeWindow, setActiveWindow] = useState("");
  const [isHidden, setIsHidden] = useState<string[]>([]);
  const [item, setItem] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const refStart = useRef(null);
  const refApp = useRef(null);
  const refNewItem = useRef(null);
  const { turnOff, setTurnOff } = useTurnOff();
  const [showOff, setShowOff] = useState(false)
  const [desktopItems, setDesktopItems] = useState(desktopData);
  const [newItemType, setNewItemType] = useState("")

  const handleDoubleClick = (name: string, icon: StaticImageData, type: string, fixedSize?: boolean, width?: string, height?: string, mobileHeight?: string, mobileWidth?: string) => {
    if (!openWindows.some((win) => win.name === name)) {
      setActiveWindow(name);
      setOpenWindows((prev) => [...prev, { name, icon: icon.src, type, fixedSize, width, height, mobileHeight, mobileWidth }]);
    }
  }
  const handleSetIsHidden = (windowName: string) => {
    setIsHidden((prev) => [...prev, windowName]);
    setActiveWindow("")
  };

  const handleShowWindow = (windowName: string) => {
    setIsHidden((prev) => prev.filter((name) => name !== windowName));
  };

  const openContextMenu = (event: React.MouseEvent, name: string, index?: number, appName?: string, appIcon?: StaticImageData,) => {
    event.preventDefault();
    setPosition({ x: event.clientX, y: event.clientY });
    setMenuVisible(true);
    setItem(name);
    setActiveIndex(index!);
    setName(appName!);
    setIcon(appIcon!);
    index !== undefined && setType(desktopData[index].type);
  };

  useClickAway(refStart, () => { setMenuVisible(false) });
  useClickAway(refApp, () => { setActiveIndex(null) });
  useClickAway(refNewItem, () => { confirmNewItem() });

  useEffect(() => {
    if (turnOff) {
      setTurnOff(false)
      setShowOff(true)
    }
  }, [turnOff, setTurnOff])

  const [isAdding, setIsAdding] = useState(false);
  const [newItemName, setNewItemName] = useState("");

  const confirmNewItem = () => {
    if (newItemName.trim() !== "") {
      const newItem = {
        name: newItemName,
        icon: newItemType === "Folder" ? folderClosedIcon : textDocumentIcon,
        type: newItemType === "Folder" ? "folder" : "notepad",
        fixedSize: false,
        width: "w-[60vw]",
        height: "h-[700px]",
        mobileWidth: "w-[90vw]",
        mobileHeight: "h-fit",
      };
      setDesktopItems(prev => [...prev, newItem]);
      setNewItemName("");
      setIsAdding(false);
    }
  };

  if (showOff) return <ShutdownScreen />

  return (
    <div className="h-[100dvh] w-[100dvw] place-items-center justify-center flex flex-col">
      <ScreenSaverComponent screenSaving={screenSaving} setScreenSaving={setScreenSaving} />
      <section className="overflow-hidden bg-cover relative p-5 max-h-[100dvh] max-w-[100dvw]" style={screen.width > 1024 ? { width: `${currentResolution[0]}px`, height: `${currentResolution[1]}px` } : { width: "100dvw", height: "100dvh" }}>
        <Image src={currentWallpaper} draggable={false} alt="wallpaper" width={2000} height={2000} className="w-full h-full absolute bottom-0 right-0 object-cover" onContextMenu={(e) => openContextMenu(e, "Desktop")} />
        <div ref={refApp} className="grid sm:[grid-template-columns:repeat(18,minmax(0,1fr))] grid-cols-4 grid-flow-col sm:grid-rows-8 grid-rows-6 max-h-[90dvh]">
          {desktopItems.map((item, index) => (
            <button key={index} onContextMenu={(e) => openContextMenu(e, "App", index, item.name, item.icon)} className="w-[90px] h-[100px] place-items-center flex flex-col cursor-default" draggable={false} onClick={() => setActiveIndex(index)}
              onDoubleClick={() => { if (item.type === "link") { window.open(item.link, "_blank") } else { handleDoubleClick(item.name, item.icon, item.type, item.fixedSize, item.width, item.height, item.mobileHeight, item.mobileWidth) } }}>
              <Image src={item.icon} alt={item.name} draggable="false" width={50} height={50} className={`drop-shadow-[2px_3px_2px_rgba(0,0,0,0.3)] mb-1 ${activeIndex === index && "brightness-75 contrast-125 opacity-60"}`} />
              <p className={`text-xl text-center w-[100px] mb-auto drop-shadow-[2px_3px_2px_rgba(0,0,0,0.7)] leading-[0.8] ${activeIndex === index ? "bg-winXpBlue" : ""}`}>{item.name}</p>
            </button>
          ))}
          {isAdding &&
            <button ref={refNewItem} className="w-[90px] h-[100px] place-items-center flex flex-col cursor-default" >
              <Image src={newItemType === "Folder" ? folderClosedIcon : textDocumentIcon} alt="temporary" width={50} height={50}
                className="drop-shadow-[2px_3px_2px_rgba(0,0,0,0.3)] mb-1 brightness-75 contrast-125 opacity-60" />
              <p className={`text-xl text-center w-[100px] mb-auto drop-shadow-[2px_3px_2px_rgba(0,0,0,0.7)] leading-[0.8]`}>
                <textarea className="bg-white w-[90px] h-fit text-black px-1 text-center border-[2px] resize-none"
                  onChange={(e) => setNewItemName(e.target.value)} autoFocus
                  onKeyDown={(e) => { e.key === "Enter" && confirmNewItem() }} defaultValue={newItemName} />
              </p>
            </button>}
        </div>
        {
          openWindows.map((window) => (
            <FloatingWindow key={window.name} name={window.name} icon={window.icon} type={window.type} onClose={() => setOpenWindows((prev) => prev.filter((win) => win.name !== window.name))} fixedSize={window.fixedSize ?? false} isProperties={window.isProperties ?? false} width={window.width ?? ""} height={window.height ?? ""}
              mobileWidth={window.mobileWidth ?? "80%"} mobileHeight={window.mobileHeight ?? "50%"} activeWindow={activeWindow} setActiveWindow={setActiveWindow} isHidden={isHidden} setIsHidden={handleSetIsHidden}
            />
          ))
        }
        <div onContextMenu={(e) => openContextMenu(e, "Task Bar")}>
          <TaskBar setOpenWindows={setOpenWindows} name={"User Accounts"} icon={userAccountsIcon.src} type={"userAccounts"} fixedSize={false} width={"w-[64dvw]"} height={"h-[80dvh]"} mobileWidth={"w-[95dvw]"} mobileHeight={"h-[58dvh]"} openWindows={openWindows} activeWindow={activeWindow} setActiveWindow={setActiveWindow} setIsHidden={handleShowWindow} />
        </div>
      </section >
      {menuVisible && (
        <div ref={refStart}>
          <ContextMenu x={position.x} y={position.y} item={item} setOpenWindows={setOpenWindows} appName={name} appIcon={icon ?? defaultIcon} type={type} setAdding={setIsAdding} setType={setNewItemType} setNewName={setNewItemName} />
        </div>
      )
      }
    </div >
  );
}