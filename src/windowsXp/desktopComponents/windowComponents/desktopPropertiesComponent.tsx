import Image from "next/image";
import { useState } from "react";
import { propertiesData } from "@/config/data/windowData/desktopPropertiesData";
import zune from "@/public/themes/zune.png";
import windowsXp from "@/public/themes/windowsXp.png";
import windowsClassic from "@/public/themes/windowsClassic.png";
import { ThemesData } from "@/config/data/windowData/displayPropertiesData/themesData";

export default function DesktopPropertiesComponent() {
    const [hoveringIndex, setHoveringIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState<[number, string] | null>([0, "Themes"]);
    const [selectedTheme, setSelectedTheme] = useState<string>(ThemesData[0]?.name || "");

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
            {activeIndex?.[1] === "Themes" &&
                <div className="w-full lg:h-[85%] border-gray-400 border-[2px] rounded-md rounded-t-none text-black px-5 py-3 ">
                    <p className="lg:leading-[20px] leading-[13px]">A theme is a background plus a set of sounds, icons, and other elements to help you personalize your computer with one click.</p>
                    <p className="lg:mt-3 mt-1">Theme:</p>
                    <div className="place-items-center flex gap-2">
                        <select value={selectedTheme} onChange={(e) => setSelectedTheme(e.target.value)} className="w-[50%] bg-white   h-[25px]">
                            {ThemesData.map((theme, index) => (
                                <option key={index} disabled={theme.disabled}>{theme.name}</option>
                            ))}
                        </select>
                        <button className="w-[25%] cursor-default h-[28px] bg-gray-200 border-gray-500 border-2 rounded-md leading-none active:border-winXpBlue">Save as...</button>
                        <button disabled className="w-[25%] h-[28px] bg-gray-200 border-gray-500 border-2 rounded-md leading-none opacity-40">Delete</button>
                    </div>
                    <p className="lg:mt-2 mt-1">Sample:</p>
                    <Image src={selectedTheme === "Windows Classic" ? windowsClassic.src : selectedTheme === "Zune" ? zune.src : windowsXp.src} alt="Theme" width={500} height={0} className="mt-1 lg:h-[220px]" />
                </div>}
            <div className="text-black ml-auto flex gap-2 h-[50px] place-items-center">
                <button className="cursor-default ml-auto w-[23%] h-[28px] border-gray-500 border-2 rounded-md   leading-none active:border-winXpBlue">OK</button>
                <button className="cursor-default w-[23%] h-[28px] border-gray-500 border-2 rounded-md   leading-none active:border-winXpBlue">Cancel</button>
                <button className="cursor-default w-[23%] h-[28px] border-gray-500 border-2 rounded-md   leading-none active:border-winXpBlue">Apply</button>
            </div>
        </div>
    )
}