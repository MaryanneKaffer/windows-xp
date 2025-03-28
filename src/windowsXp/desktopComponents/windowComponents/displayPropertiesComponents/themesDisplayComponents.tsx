import Image from "next/image"
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

interface ThemesDisplayComponentProps {
    selectedTheme: Theme;
    setSelectedTheme: (theme: Theme) => void;
    currentTheme: Theme;
}

export function ThemesDisplayComponent({ selectedTheme, setSelectedTheme, currentTheme }: ThemesDisplayComponentProps) {
    return (
        <div className="w-full lg:h-[85%] h-[305px] border-gray-400 border-[2px] rounded-md rounded-t-none text-black px-5 py-3 ">
            <p className="lg:leading-[20px] leading-[13px]">A theme is a background plus a set of sounds, icons, and other elements to help you personalize your computer with one click.</p>
            <p className="lg:mt-3 mt-1">Theme:</p>
            <div className="place-items-center flex gap-2">
                <select value={selectedTheme.name} onChange={(e) => setSelectedTheme(Themes.find(theme => theme.name === e.target.value) || selectedTheme)} className="w-[50%] bg-white h-[25px]">
                    {Themes.map((theme, index) => (
                        <option key={index} disabled={theme.disabled}>{theme.name}</option>
                    ))}
                </select>
                <button className="w-[25%] cursor-default h-[28px] border-gray-500 border-2 rounded-md leading-none active:border-winXpBlue">Save as...</button>
                <button disabled className="w-[25%] h-[28px] border-gray-500 border-2 rounded-md leading-none opacity-40">Delete</button>
            </div>
            <p className="lg:mt-2 mt-1">Sample:</p>
            {Themes.map((theme, index) => (
                theme.sample && <Image key={index} src={selectedTheme.name === theme.name ? theme.sample : currentTheme.sample || ''} alt="Theme" width={500} height={0} className={`${selectedTheme.name !== theme.name && "hidden"} mt-1 lg:h-[220px]`} />
            ))}
        </div>
    )
}