import Image from "next/image"
import { useState } from "react";
import monitor from "@/public/desktopImage/monitor.png";
import color from "@/public/other/colors.png";
import { currentAppearance } from "../desktopPropertiesComponent";

interface SettingsComponentProps {
    selectedResolution: string[];
    setSelectedResolution: (resolution: string[]) => void;
    currentResolution: string[];
}
export function SettingsComponent({ selectedResolution, setSelectedResolution, currentResolution }: SettingsComponentProps) {
    const resolutions = [["800", "600"], ["1024", "768"], ["1280", "720"], ["1440", "900"], ["1920", "1080"]];

    const getCurrentResolutionIndex = () => {
        return resolutions.findIndex(res => res[0] === currentResolution[0] && res[1] === currentResolution[1]) || 0;
    };

    const [selectedResolutionIndex, setSelectedResolutionIndex] = useState<number>(getCurrentResolutionIndex());

    const handleResolutionChange = (index: number) => {
        setSelectedResolutionIndex(index);
        setSelectedResolution(resolutions[index]);
    };

    return (
        <div className="w-full lg:h-[85%] h-[305px] border-gray-400 border-[2px] rounded-sm  rounded-t-none text-black px-5 py-3 ">
            <Image src={monitor.src} alt="Monitor" width={200} height={190} draggable={false} className="mt-1 lg:w-[200px] lg:h-[190px] w-[150px] justify-self-center " />
            <p className="mt-1 leading-[10px]">Display:</p>
            <p>Default Monitor on </p>
            <div className="flex gap-2 place-items-center h-[80px]">
                <div className="relative border-2 border-gray-300 rounded-md px-3 py-1 w-[50%] h-[90%] mt-3">
                    <p className={`absolute h-[20px] -top-[15px] bg-white`}>Screen Saver</p>
                    <div className="flex gap-2 place-items-center">
                        <p>Less</p>
                        <input type="range" min={0} max={resolutions.length - 1} value={selectedResolutionIndex} onChange={(e) => handleResolutionChange(Number(e.target.value))} />
                        <p>More</p>
                    </div>
                    <p className="self-center">{`${selectedResolution[0]} by ${selectedResolution[1]}`}</p>
                </div>
                <div className="relative border-2 border-gray-300 rounded-md px-3 py-1 w-[50%] h-[90%] mt-3">
                    <p className={`absolute h-[20px] -top-[15px] bg-white`}>Screen Saver</p>
                    <div className="flex flex-col gap-2 place-items-center mt-1 h-[40%]">
                        <select disabled className="bg-white w-[100%] h-full">
                            <option>Highest(32 bit)</option>
                        </select>
                        <Image src={color.src} alt="Color" width={20} height={20} draggable={false} className="w-full mt-1" />
                    </div>
                </div>
            </div>
            <div className="flex gap-1 mt-5 w-full h-full">
                <button className={`w-[110px] cursor-default h-[28px] ${currentAppearance.buttonborder} border-2 rounded-sm leading-none active:brightness-50 ml-auto`}>Troubleshoot...</button>
                <button className={`w-[110px] cursor-default h-[28px] ${currentAppearance.buttonborder} border-2 rounded-sm leading-none active:brightness-50`}>Advanced</button>
            </div>
        </div>
    )
}