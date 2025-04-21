import Image from "next/image"
import { Appearance as Appearance } from "@/config/data/windowData/displayPropertiesData/appearanceData";

interface Appearance {
    name: string;
    taskbar: string;
    startbutton: string;
    window: string;
    systemtray: string;
    border: string;
    startmenu: string;
    sample: string;
    buttonborder: string;
    disabled?: boolean;
    shadow1: string;
    shadow2: string;
    light?: boolean;
    mainColor?: string;
}

interface AppearanceDisplayComponentProps {
    selectedAppearance: Appearance;
    setSelectedAppearance: (appearance: Appearance) => void;
    currentAppearance: Appearance;
}

export function AppearanceDisplayComponent({ selectedAppearance, setSelectedAppearance, currentAppearance }: AppearanceDisplayComponentProps) {
    return (
        <div className="w-full lg:h-[85%] h-[305px] border-gray-400 border-[2px] rounded-sm  rounded-t-none text-black lg:px-5 lg:py-3 py-1 px-3">
            {selectedAppearance.sample && (<Image src={selectedAppearance.sample} alt="Theme" width={500} height={220} className="mt-1 lg:h-[200px]" />)}
            <div className="place-items-center flex gap-2 lg:h-auto h-[140px]">
                <div className="w-[55%] lg:leading-[27px] leading-[20px]">
                    <p className="">Windows and buttons:</p>
                    <select className="w-full bg-white h-[25px] px-1" disabled>
                        <option>Windows XP style</option>
                    </select>
                    <p className="">Color scheme:</p>
                    <select value={selectedAppearance.name} onChange={(e) => setSelectedAppearance(Appearance.find(Appearance => Appearance.name === e.target.value) || selectedAppearance)} className="cursor-default w-full px-1 bg-white h-[25px]">
                        {Appearance.map((appearance, index) => (
                            <option key={index}>{appearance.name}</option>
                        ))}
                    </select>
                    <p className="">Font size:</p>
                    <select className="px-1 w-full bg-white h-[25px]" disabled>
                        <option>Normal</option>
                    </select>
                </div>
                <div className="w-[45%] lg:h-[162px] lg:mt-0 mt-auto flex flex-col gap-2 justify-end items-end">
                    <button className={`w-[110px] cursor-default h-[28px] ${currentAppearance.buttonborder} border-2 rounded-sm leading-none active:brightness-50`}>Effects...</button>
                    <button className={`w-[110px] cursor-default h-[28px] ${currentAppearance.buttonborder} border-2 rounded-sm leading-none active:brightness-50`}>Advanced</button>
                </div>
            </div>
        </div>
    )
}