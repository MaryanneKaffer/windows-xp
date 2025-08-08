"use client";
import { useState } from "react";
import { propertiesData } from "@/config/data/windowData/desktopPropertiesData";
import DesktopDisplayComponent from "./displayPropertiesComponents/desktopDisplayComponent";
import { Wallpapers } from "@/config/data/windowData/displayPropertiesData/wallpapersData";
import { ThemesDisplayComponent } from "./displayPropertiesComponents/themesDisplayComponents";
import { AppearanceDisplayComponent } from "./displayPropertiesComponents/appearanceDisplayComponent";
import { Appearance } from "@/config/data/windowData/displayPropertiesData/appearanceData";
import ScreenSaverComponent from "./displayPropertiesComponents/screenSaverComponent";
import { ScreenSavers } from "@/config/data/windowData/displayPropertiesData/screenSaversData";
import { SettingsComponent } from "./displayPropertiesComponents/settingsComponent";

interface Appearance {
    name: string; taskbar: string; startbutton: string; window: string; inactiveWindow: string; inactiveBorder: string; systemtray: string; border: string; startmenu: string; sample: string; buttonborder: string;
    disabled?: boolean; shadow1: string; shadow2: string; light?: boolean; mainColor?: string; activeTaskbarButton?: string; color: string; clickTaskbarButton?: string; taskbarButton?: string
}

export let currentWallpaper: string = typeof window !== "undefined" && localStorage.getItem("wallpaper")
    ? JSON.parse(localStorage.getItem("wallpaper")!)
    : Wallpapers[3].wallpaper;
export let currentAppearance: Appearance = typeof window !== "undefined" && localStorage.getItem("appearance")
    ? JSON.parse(localStorage.getItem("appearance")!)
    : Appearance[0];
export let currentScreenSaver: string = typeof window !== "undefined" && localStorage.getItem("screenSaver")
    ? JSON.parse(localStorage.getItem("screenSaver")!)
    : ScreenSavers[2].screenSaver;
export let currentResolution: string[] = ["1920", "1080"];

export default function DesktopPropertiesComponent({ onClose }: { onClose: () => void }) {
    const [hoveringIndex, setHoveringIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState<[number, string] | null>([0, "Themes"]);
    const [selectedWallpaper, setSelectedWallpaper] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("wallpaper");
            if (saved) { return JSON.parse(saved) }
        } return currentWallpaper;
    });
    const [selectedScreenSaver, setSelectedScreenSaver] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("screenSaver");
            if (saved) { return JSON.parse(saved) }
        } return currentScreenSaver;
    });;
    const [selectedResolution, setSelectedResolution] = useState<string[]>(currentResolution);
    const [selectedAppearance, setSelectedAppearance] = useState<Appearance>(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("appearance");
            if (saved) { return JSON.parse(saved) }
        } return currentAppearance;
    });

    const Apply = () => {
        if (selectedWallpaper) {
            currentWallpaper = selectedWallpaper;
            localStorage.setItem("wallpaper", JSON.stringify(selectedWallpaper));
            setSelectedWallpaper("");
        }
        if (selectedAppearance) {
            currentAppearance = selectedAppearance;
            localStorage.setItem("appearance", JSON.stringify(selectedAppearance));
        }
        if (selectedScreenSaver) {
            currentScreenSaver = selectedScreenSaver;
            localStorage.setItem("screenSaver", JSON.stringify(selectedScreenSaver));
            setSelectedScreenSaver("");
        }
        if (selectedResolution) {
            currentResolution = selectedResolution;
        }
    };

    const isAbleToApply = () => {
        if (selectedWallpaper && selectedWallpaper !== currentWallpaper || selectedAppearance && selectedAppearance.name !== currentAppearance.name ||
            selectedScreenSaver && selectedScreenSaver !== currentScreenSaver || selectedResolution && selectedResolution !== currentResolution) return true;
    };

    return (
        <div className="w-full lg:h-[480px] relative lg:p-2 p-1 lg:text-xl">
            <div className="flex gap-[2px] h-[30px] relative">
                {propertiesData.map((item, index) => (
                    <div key={index} className="relative">
                        {(hoveringIndex === index || activeIndex?.[0] === index) && (
                            <div className={`absolute ${activeIndex?.[0] === index ? "top-[1px]" : "top-[5px]"} left-0 w-full h-[5px] bg-orange-300 rounded-t-lg`}></div>
                        )}
                        <button onClick={() => setActiveIndex([index, item.name])} onMouseEnter={() => setHoveringIndex(index)} onMouseLeave={() => setHoveringIndex(null)} className={`${activeIndex && activeIndex[0] === index ? "h-[40px]" : "h-[25px] translate-y-[5px]"} text-black leading-[10px] border-x-[2px] border-t-[2px] border-gray-400 lg:px-2 px-1 rounded-sm rounded-b-none cursor-default ${activeIndex && activeIndex[0] === index && "border-t-transparent border-b-white rounded-b-xl border-box border-b-[10px]"} hover:border-t-transparent`}>{item.name}</button>
                    </div>
                ))}
            </div>

            {activeIndex?.[1] === "Themes" && <ThemesDisplayComponent />}
            {activeIndex?.[1] === "Desktop" && <DesktopDisplayComponent selectedWallpaper={selectedWallpaper} setSelectedWallpaper={setSelectedWallpaper} currentWallpaper={currentWallpaper} />}
            {activeIndex?.[1] === "Screen Saver" && <ScreenSaverComponent selectedScreenSaver={selectedScreenSaver} setSelectedScreenSaver={setSelectedScreenSaver} currentScreenSaver={currentScreenSaver} />}
            {activeIndex?.[1] === "Appearance" && <AppearanceDisplayComponent selectedAppearance={selectedAppearance} setSelectedAppearance={setSelectedAppearance} currentAppearance={currentAppearance} />}
            {activeIndex?.[1] === "Settings" && <SettingsComponent selectedResolution={selectedResolution} setSelectedResolution={setSelectedResolution} currentResolution={currentResolution} />}


            <div className="text-black ml-auto flex gap-2 mx-auto h-[39px] lg:h-[53px] place-items-center">
                <button onClick={onClose} className={`cursor-default ml-auto w-[23%] h-[28px] ${currentAppearance.buttonborder} active:brightness-50 border-2 rounded-sm  leading-none `}>OK</button>
                <button disabled={!isAbleToApply()} onClick={() => setSelectedWallpaper("")} className={`cursor-default w-[23%] h-[28px] border-2 rounded-sm  leading-none ${currentAppearance.buttonborder} active:brightness-50 ${!isAbleToApply() ? "opacity-50" : ""}`}>Cancel</button>
                <button disabled={!isAbleToApply()} onClick={() => Apply()} className={`cursor-default w-[23%] h-[28px] border-2 rounded-sm  leading-none ${currentAppearance.buttonborder} active:brightness-50 ${!isAbleToApply() ? "opacity-50" : ""
                    }`}>Apply
                </button>
            </div>
        </div>
    )
}