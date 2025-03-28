import Image from "next/image";
import { use, useState } from "react";
import { propertiesData } from "@/config/data/windowData/desktopPropertiesData";
import zune from "@/public/themes/zune.png";
import windowsXp from "@/public/themes/windowsXp.png";
import windowsClassic from "@/public/themes/windowsClassic.png";
import DesktopDisplayComponent from "./displayPropertiesComponents/desktopDisplayComponent";
import { Wallpapers } from "@/config/data/windowData/displayPropertiesData/wallpapersData";
import { ThemesDisplayComponent } from "./displayPropertiesComponents/themesDisplayComponents";
import { Themes } from "@/config/data/windowData/displayPropertiesData/themesData";

interface Theme {
    name: string;
    taskbar?: string;
    startbutton?: string;
    window?: string;
    systemtray?: string;
    border?: string;
    startmenu?: string;
    sample?: string;
    disabled?: boolean;
    shadow1?: string;
    shadow2?: string;
}

export let currentWallpaper: string = Wallpapers[3].wallpaper;
export let currentTheme: Theme = Themes[0];

export default function DesktopPropertiesComponent({ onClose }: { onClose: () => void }) {
    const [hoveringIndex, setHoveringIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState<[number, string] | null>([0, "Themes"]);
    const [selectedTheme, setSelectedTheme] = useState<Theme>(currentTheme.name === Themes[0].name ? Themes[0] : Themes[1]);
    const [selectedWallpaper, setSelectedWallpaper] = useState("");

    const Apply = () => {
        if (selectedWallpaper) {
            currentWallpaper = selectedWallpaper;
            setSelectedWallpaper("");
        }
        if (selectedTheme) {
            currentTheme = selectedTheme;
            setSelectedTheme(selectedTheme);
        }
    };

    const isAbleToApply = () => {
        if (selectedWallpaper && selectedWallpaper !== currentWallpaper || selectedTheme && selectedTheme.name !== currentTheme.name) return true;
    };

    return (
        <div className="w-full lg:h-[480px] relative lg:p-2 p-1 lg:text-xl">
            <div className="flex gap-[2px] h-[30px] relative">
                {propertiesData.map((item, index) => (
                    <div key={index} className="relative">
                        {(hoveringIndex === index || activeIndex?.[0] === index) && (
                            <div className={`absolute ${activeIndex?.[0] === index ? "top-[1px]" : "top-[5px]"} left-0 w-full h-[5px] bg-orange-300 rounded-t-lg`}></div>
                        )}
                        <button onClick={() => setActiveIndex([index, item.name])} onMouseEnter={() => setHoveringIndex(index)} onMouseLeave={() => setHoveringIndex(null)} className={`${activeIndex && activeIndex[0] === index ? "h-[40px]" : "h-[25px] translate-y-[5px]"} text-black leading-[10px] border-x-[2px] border-t-[2px] border-gray-400 lg:px-2 px-1 rounded-md rounded-b-none cursor-default ${activeIndex && activeIndex[0] === index && "border-t-transparent border-b-white rounded-b-xl border-box border-b-[10px]"} hover:border-t-transparent`}>{item.name}</button>
                    </div>
                ))}
            </div>
            {activeIndex?.[1] === "Themes" && <ThemesDisplayComponent selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} currentTheme={currentTheme} />}
            {activeIndex?.[1] === "Desktop" && <DesktopDisplayComponent selectedWallpaper={selectedWallpaper} setSelectedWallpaper={setSelectedWallpaper} currentWallpaper={currentWallpaper} />}

            <div className="text-black ml-auto flex gap-2 mx-auto h-[39px] lg:h-[53px] place-items-center">
                <button onClick={onClose} className="cursor-default ml-auto w-[23%] h-[28px] border-winXpBlue border-2 rounded-md leading-none active:border-gray-500">OK</button>
                <button disabled={!isAbleToApply()} onClick={() => setSelectedWallpaper("")} className={`cursor-default w-[23%] h-[28px] border-gray-500 border-2 rounded-md leading-none active:border-winXpBlue ${!isAbleToApply() ? "opacity-50" : ""}`}>Cancel</button>
                <button disabled={!isAbleToApply()} onClick={() => Apply()} className={`cursor-default w-[23%] h-[28px] border-gray-500 border-2 rounded-md leading-none active:border-winXpBlue ${!isAbleToApply() ? "opacity-50" : ""
                    }`}>Apply
                </button>
            </div>
        </div>
    )
}