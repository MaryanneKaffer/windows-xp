import { useState } from "react";
import { desktopMenuData } from "@/config/data/desktopContextMenuData";
import { appMenuData } from "@/config/data/appContextMenuData";
import { taskBarMenuData } from "@/config/data/taskBarContextMenuData";
import { StaticImageData } from "next/image";

interface WindowData {
    name: string;
    icon: string;
    fixedSize?: boolean;
    width?: string;
    height?: string;
}

export function ContextMenu(position: { x: number, y: number, item: string, setOpenWindows: React.Dispatch<React.SetStateAction<WindowData[]>>, appName: string, appIcon: StaticImageData }) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const menuData = position.item === "App" ? appMenuData(position.setOpenWindows, { name: position.appName, icon: position.appIcon }) : position.item === "Desktop" ? desktopMenuData(position.setOpenWindows) : taskBarMenuData;
    const menuHeight = position.item === "Task Bar" ? 383 : 0;
    return (
        <div className="bg-white border-[1px] border-gray-400 text-black w-auto fixed" style={{ left: position.x, top: position.y - menuHeight }}>

            {menuData.map((item, index) => (
                <div key={index} className="relative" >
                    <button disabled={item.disabled} onClick={() => typeof item.function === 'function' && item.function()} className={`w-full ${item.disabled ? "text-gray-500" : ""} flex cursor-default px-5 ${item.disabled ? "" : "group hover:bg-winXpBlue"} ${position.item === "Task Bar" ? "bottom-[2000px]" : ""}`} onMouseEnter={() => setActiveIndex(item.functionList ? index : null)} onMouseLeave={() => setActiveIndex(null)}>
                        <p className={`group-hover:text-white text-lg text-left ${item.bold ? "font-bold" : ""}`}>{item.name}</p>
                        {item.functionList ? <p className="group-hover:text-white text-lg text-left ml-auto">►</p> : ""}
                    </button>

                    {activeIndex === index && item.functionList && (
                        <div className="bg-white border-[1px] border-gray-400 text-black w-[150px] absolute right-[-140px] top-[-5px] z-[10]">
                            {item.functionList?.map((subItem, subIndex) => (
                                <button key={subIndex} className="w-full px-5 text-left hover:bg-winXpBlue cursor-default group" onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(null)}>
                                    <p className="group-hover:text-white text-lg text-left">{subItem.name}</p>
                                </button>
                            ))}
                        </div>)}
                    {item.divider ? <div className="bg-gray-400 h-[1px] w-[93%] my-[2px] mx-auto"></div> : ''}
                </div>
            ))}
        </div>
    )
}