import Image from "next/image"
import { useState } from "react";
import monitor from "@/public/desktopImage/monitor.png";

export function SettingsComponent() {
    const [selectedIndex, setSelectedIndex] = useState(2); 
    const resolutions = ["800 by 600", "1024 by 764", "1280 by 720", "1440 by 900", "1920 by 1080"];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedIndex(Number(e.target.value));
    };
    return (
        <div className="w-full lg:h-[85%] h-[305px] border-gray-400 border-[2px] rounded-sm  rounded-t-none text-black px-5 py-3 ">
            <Image src={monitor.src} alt="Monitor" width={200} height={190} draggable={false} className="mt-1 lg:w-[200px] lg:h-[190px] w-[150px] justify-self-center " />
            <p className="mt-1 leading-[10px]">Display:</p>
            <p>Default Monitor on </p>
            <div className="relative border-2 border-gray-300 rounded-md px-3 py-1 w-[50%] h-auto mt-3">
                <p className={`absolute h-[20px] -top-[15px] bg-white`}>Screen Saver</p>
                <div className="flex gap-2 place-items-center">
                    <p>Less</p>
                    <input type="range" min={0} max={resolutions.length - 1} value={selectedIndex} onChange={handleChange} />
                    <p>More</p>
                </div>
                <p className="self-center">{resolutions[selectedIndex]}</p>
            </div>
        </div>
    )
}