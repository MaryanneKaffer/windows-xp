import Image from "next/image"
import { useState } from "react";
import { Themes } from "@/config/data/windowData/displayPropertiesData/themesData";
import { currentAppearance } from "../desktopPropertiesComponent";

export function ThemesDisplayComponent() {
    const [selectedTheme, setSelectedTheme] = useState("Windows XP");

    return (
        <div className="w-full lg:h-[85%] h-[305px] border-gray-400 border-[2px] rounded-sm  rounded-t-none text-black px-5 py-3 ">
            <p className="lg:leading-[20px] leading-[13px]">A theme is a background plus a set of sounds, icons, and other elements to help you personalize your computer with one click.</p>
            <p className="lg:mt-3 mt-1">Theme:</p>
            <div className="place-items-center flex gap-2">
                <select value={selectedTheme} onChange={(e) => setSelectedTheme(e.target.value)} className="cursor-default w-[50%] bg-white h-[25px]">
                    {Themes.map((theme, index) => (
                        <option key={index} disabled={theme.disabled} >{theme.name}</option>
                    ))}
                </select>
                <button className={`w-[25%] cursor-default h-[28px] border-2 rounded-sm  leading-none ${currentAppearance.buttonborder} active:brightness-50`}>Save as...</button>
                <button disabled className={`w-[25%] h-[28px] ${currentAppearance.buttonborder} active:brightness-50 border-2 rounded-sm leading-none opacity-60`}>Delete</button>
            </div>
            <p className="lg:mt-2 mt-1">Sample:</p>
            {Themes.map((theme, index) => (
                <Image key={index} src={selectedTheme === theme.name && theme.sample || '/themes/windowsXp.png'} alt="Theme" width={500} height={0} className={`${selectedTheme !== theme.name && "hidden"} mt-1 lg:h-[220px]`} />
            ))}
        </div>
    )
}