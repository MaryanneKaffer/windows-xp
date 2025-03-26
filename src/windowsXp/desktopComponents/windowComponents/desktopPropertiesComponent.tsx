import Image from "next/image";
import { useState } from "react";
import { propertiesData } from "@/config/data/windowData/desktopPropertiesData";
import Bliss from "@/public/desktopImage/bliss.jpg";

export default function DesktopPropertiesComponent() {
    const [hoveringIndex, setHoveringIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState<[number, string] | null>([0, "Themes"]);
    return (
        <div className="w-full h-full relative p-2">
            <div className="flex gap-[2px] h-[30px] relative">
                {propertiesData.map((item, index) => (
                    <div key={index} className="relative">
                        {(hoveringIndex === index || activeIndex?.[0] === index) && (
                            <div className={`absolute ${activeIndex?.[0] === index ? "top-[1px]" : "top-[5px]"} left-0 w-full h-[5px] bg-orange-300 rounded-t-lg`}></div>
                        )}
                        <button onClick={() => setActiveIndex([index, item.name])} onMouseEnter={() => setHoveringIndex(index)} onMouseLeave={() => setHoveringIndex(null)} className={`${activeIndex && activeIndex[0] === index ? "h-[40px]" : "h-[25px] translate-y-[5px]"} text-black text-xl border-x-[2px] border-t-[2px] border-gray-400 px-2 rounded-md rounded-b-none cursor-default ${activeIndex && activeIndex[0] === index && "border-t-transparent border-b-white rounded-b-xl border-box border-b-[10px]"} hover:border-t-transparent`}>{item.name}</button>
                    </div>
                ))}
            </div>
            {activeIndex?.[1] === "Themes" &&
                <div className="w-full h-[85%] border-gray-400 border-[2px] rounded-md rounded-t-none text-black px-5 py-3 ">
                    <p className="leading-[20px] text-xl">A theme is a background plus a set of sounds, icons, and other elements to help you personalize your computer with one click.</p>
                    <p className="text-xl mt-3">Theme:</p>
                    <div className="place-items-center flex gap-2">
                        <select className="w-[50%] bg-white text-xl h-[25px]">
                            <option>My Current Theme</option>
                            <option>Windows XP</option>
                            <option>Windows Classic</option>
                            <option>Zune</option>
                            <option disabled>More Themes Online...</option>
                            <option disabled>Browse</option>
                        </select>
                        <button className="w-[25%] cursor-default h-[28px] bg-gray-200 border-gray-500 border-2 rounded-md text-xl leading-none active:border-winXpBlue">Save as...</button>
                        <button disabled className="w-[25%] h-[28px] bg-gray-200 border-gray-500 border-2 rounded-md text-xl leading-none opacity-40">Delete</button>
                    </div>
                    <p className="text-xl mt-2">Sample:</p>
                    <Image src={Bliss.src} alt="Theme" width={500} height={0} className="mt-1 h-[220px]" />
                </div>}
            <div className="text-black ml-auto flex gap-2 h-[50px] place-items-center">
                <button className="cursor-default ml-auto w-[23%] h-[28px] border-gray-500 border-2 rounded-md text-xl leading-none active:border-winXpBlue">OK</button>
                <button className="cursor-default w-[23%] h-[28px] border-gray-500 border-2 rounded-md text-xl leading-none active:border-winXpBlue">Cancel</button>
                <button className="cursor-default w-[23%] h-[28px] border-gray-500 border-2 rounded-md text-xl leading-none active:border-winXpBlue">Apply</button>
            </div>
        </div>
    )
}