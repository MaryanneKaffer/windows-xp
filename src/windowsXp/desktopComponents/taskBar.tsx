import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { currentAppearance } from "./windowComponents/desktopPropertiesComponent";
import { SystemTray } from "@/config/data/systemTrayData";
import LogoIcon from "@/public/logo/logoIcon.png";
import StartMenu from "./startMenu";
import { useClickAway } from "react-use";

interface WindowData {
    setOpenWindows: React.Dispatch<React.SetStateAction<{ name: string; icon: string; type: string | null; fixedSize?: boolean; width?: string; height?: string; mobileWidth?: string; mobileHeight?: string; }[]>>;
    name: string;
    icon: string;
    type: string | null;
    fixedSize?: boolean;
    width?: string;
    height?: string;
    mobileWidth?: string;
    mobileHeight?: string;
    openWindows: { name: string; icon: string; type: string | null; fixedSize?: boolean; width?: string; height?: string; mobileWidth?: string; mobileHeight?: string; }[];
    activeWindow: string;
    setActiveWindow: React.Dispatch<React.SetStateAction<string>>;
    setIsHidden: (windowName: string) => void;
}
export default function TaskBar({ setOpenWindows, name, icon, type, fixedSize, width, height, mobileWidth, mobileHeight, openWindows, activeWindow, setActiveWindow, setIsHidden }: WindowData) {
    const [time, setTime] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    useClickAway(ref, () => { setIsOpen(false) });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`w-full h-[48px] ${currentAppearance.taskbar} z-10 absolute bottom-0 left-0 flex gap-3`}>
            <div ref={ref} className="h-[48px] relative ">
                <button type="button" onClick={() => setIsOpen(!isOpen)} id="startButton" className={`${currentAppearance.startbutton} h-full lg:w-[155px] w-[60px] rounded-r-2xl drop-shadow-[0px_10px_10px_rgba(0,0,0,0.9)] flex place-items-center gap-2 cursor-default ${isOpen ? "brightness-75" : ""}`}>
                    <Image src={LogoIcon.src} className="lg:ml-4 ml-[10px] drop-shadow-[2px_3px_2px_rgba(0,0,0,0.5)]" width={30} height={30} alt="Windows XP Logo" />
                    <p className="lg:block hidden font-arial font-bold italic text-3xl drop-shadow-[2px_3px_2px_rgba(0,0,0,0.5)]">start</p>
                </button>
                {isOpen && (
                    <StartMenu setOpenWindows={setOpenWindows} name={name} icon={icon} type={type} fixedSize={fixedSize} width={width} height={height} setIsOpen={setIsOpen} mobileWidth={mobileWidth} mobileHeight={mobileHeight} />
                )}
            </div>
            <div className="place-items-center flex w-full h-[48px] lg:gap-[1px] gap-[2px]">
                {openWindows.map((item, index) => (
                    item.icon && (<button key={index} className={`hover:brightness-125 lg:w-[200px] ${currentAppearance.clickTaskbarButton}  border-3 border-transparent w-auto cursor-default flex h-[35px] place-items-center rounded-sm gap-1 ${item.name === activeWindow ? `${currentAppearance.activeTaskbarButton} border-b-transparent border-r-transparent border-l-black/20 border-t-black/20` : `${currentAppearance.taskbarButton} `}`} onClick={() => { setActiveWindow(item.name); setIsHidden(item.name); }}>
                        <Image src={item.icon} width={20} height={20} alt={item.name} className="lg:ml-2 mx-2" />
                        <p className="text-xl lg:block hidden">{item.name}</p>
                    </button>)
                ))}
            </div>
            <div className={`${currentAppearance.systemtray} lg:w-[210px] w-[100px] flex place-items-center ml-auto relative ${currentAppearance.light || currentAppearance.name === "Olive Green" && "text-black"}`}>
                <div className={`bg-gradient-to-l ${currentAppearance.shadow1} w-[4px] h-[48px] absolute left-[-4px]`}></div>
                <div className={`bg-gradient-to-r ${currentAppearance.shadow2} w-[4px] h-[48px] absolute left-[0px]`}></div>
                <div className="flex w-full place-items-center md:gap-1 md:ml-5 ml-1">
                    {SystemTray.map((item) => (
                        <button key={item.name} className="h-full size-[25px] active:brightness-75 place-items-center rounded-full cursor-default lg:block hidden">
                            <Image src={item.icon} className="w-[25px] h-[25px]" alt={item.name || "icon"} />
                        </button>
                    ))}
                    <button aria-label="Clock" className="self-center text-2xl active:brightness-75 mx-auto cursor-default">
                        {time.toLocaleString(navigator.language, { hour: "2-digit", minute: "2-digit", })}
                    </button>
                </div>
            </div>
        </section>
    );
}