import Image from "next/image";
import { useState, useEffect } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { currentAppearance } from "./windowComponents/desktopPropertiesComponent";
import { SystemTray } from "@/config/data/systemTrayData";
import LogoIcon from "@/public/logo/logoIcon.png";
import StartMenu from "./startMenu";

interface WindowData {
    setOpenWindows: React.Dispatch<React.SetStateAction<{ name: string; icon: string; type: string | null; fixedSize?: boolean; width?: string; height?: string; mobileWidth?: string; mobileHeight?: string; }[]>>;
    name: string;
    icon: string;
    type: string | null;
    fixedSize?: boolean;
    width?: string;
    height?: string;
}

export default function TaskBar({ setOpenWindows, name, icon, type, fixedSize, width, height }: WindowData) {
    const [time, setTime] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`w-full h-[48px] ${currentAppearance.taskbar} absolute bottom-0 left-0 flex`}>
            <Popover onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                    <button type="button" id="startButton" className={`${currentAppearance.startbutton} h-full lg:w-[155px] w-[60px] rounded-r-2xl drop-shadow-[0px_10px_10px_rgba(0,0,0,0.9)] flex place-items-center gap-2 cursor-default ${isOpen ? "brightness-75" : ""}`}>
                        <Image src={LogoIcon.src} className="lg:ml-4 ml-[10px] drop-shadow-[2px_3px_2px_rgba(0,0,0,0.5)]" width={30} height={30} alt="Windows XP Logo" />
                        <p className="lg:block hidden font-arial font-bold italic text-3xl drop-shadow-[2px_3px_2px_rgba(0,0,0,0.5)]">start</p>
                    </button>
                </PopoverTrigger>
                <PopoverContent className={`${currentAppearance.startmenu} border-[2px] ${currentAppearance.border} rounded-b-none rounded-t-xl fixed !transition-none !duration-0 p-0 lg:w-[550px] lg:h-[700px] lg:bottom-[-4px] lg:left-[-78px]  w-screen h-[650px] bottom-[-4px] left-[-30px]`}>
                    <StartMenu setOpenWindows={setOpenWindows} name={name} icon={icon} type={type} fixedSize={fixedSize} width={width} height={height} />
                </PopoverContent>
            </Popover>
            <div className={`${currentAppearance.systemtray} lg:w-[210px] w-[100px] flex place-items-center ml-auto relative ${currentAppearance.light || currentAppearance.name === "Olive Green" && "text-black"}`}>
                <div className={`bg-gradient-to-l ${currentAppearance.shadow1} w-[4px] h-[48px] absolute left-[-4px]`}></div>
                <div className={`bg-gradient-to-r ${currentAppearance.shadow2} w-[4px] h-[48px] absolute left-[0px]`}></div>
                <div className="flex w-full place-items-center gap-1 ml-5">
                    {SystemTray.map((item, index) => (
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