import { useState } from "react";
import { desktopMenuData } from "@/config/data/desktopContextMenuData";
import { appMenuData } from "@/config/data/appContextMenuData";
import { taskBarMenuData } from "@/config/data/taskBarContextMenuData";
import { StaticImageData } from "next/image";

interface WindowData {
    name: string;
    icon: string;
    type: string | null;
    fixedSize?: boolean;
    width?: string;
    height?: string;
}

interface ContextMenuProps {
    x: number;
    y: number;
    item: string;
    type: string;
    setOpenWindows: React.Dispatch<React.SetStateAction<WindowData[]>>;
    appName: string;
    appIcon: StaticImageData;
    setAdding: any,
    setType: any,
    setNewName: any
}

export function ContextMenu({ x, y, item, type, setOpenWindows, appName, appIcon, setAdding, setType, setNewName }: ContextMenuProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const menuData =
        item === "App"
            ? appMenuData(setOpenWindows, { name: appName, icon: appIcon, type })
            : item === "Desktop"
                ? desktopMenuData(setOpenWindows)
                : taskBarMenuData;
    const menuHeight = item === "Task Bar" ? 383 : 0;
    return (
        <div className="bg-white border-[1px] border-gray-400 text-black w-auto fixed" style={{ left: x, top: y - menuHeight }}>
            {menuData.map((menuItem, index) => (
                <div key={index} className="relative" >
                    <button disabled={menuItem.disabled} onClick={() => { typeof menuItem.function === 'function' && menuItem.function() }} className={`w-full
                         ${menuItem.disabled && "text-gray-500"} flex cursor-default px-5 ${menuItem.disabled ? "" : "group hover:bg-winXpBlue"} ${item === "Task Bar" ? "bottom-[2000px]" : ""}`}
                        onMouseEnter={() => setActiveIndex(menuItem.functionList ? index : null)} onMouseLeave={() => setActiveIndex(null)}>
                        <p className={`group-hover:text-white text-lg text-left ${menuItem.bold ? "font-bold" : ""}`}>{menuItem.name}</p>
                        {menuItem.functionList ? <p className="group-hover:text-white text-lg text-left ml-auto">►</p> : ""}
                    </button>
                    {activeIndex === index && menuItem.functionList && (
                        <div className="bg-white border-[1px] border-gray-400 text-black w-[150px] absolute right-[-140px] top-[-5px] z-[10]">
                            {menuItem.functionList?.map((submenuItem, subIndex) => (
                                <button key={subIndex} className="w-full px-5 text-left hover:bg-winXpBlue cursor-default group" onMouseEnter={() => setActiveIndex(index)}
                                    onMouseLeave={() => setActiveIndex(null)} onClick={() => {
                                        if (submenuItem.name === "Folder" || submenuItem.name === "Text Document") {
                                            setType(submenuItem.name);
                                            setNewName(`New ${submenuItem.name}`)
                                            setAdding(true);
                                        }
                                    }}>
                                    <p className="group-hover:text-white text-lg text-left">{submenuItem.name}</p>
                                </button>
                            ))}
                        </div>)}
                    {menuItem.divider && <div className="bg-gray-400 h-[1px] w-[93%] my-[2px] mx-auto" />}
                </div>
            ))}
        </div>
    )
}