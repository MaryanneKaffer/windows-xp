import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDraggable } from "@heroui/react";
import exitIcon from "@/public/icons/exitIcon.png";
import minimizeIcon from "@/public/icons/minimizeIcon.png";
import restoreIcon from "@/public/icons/restoreIcon.png";
import NotepadComponent from "./windowComponents/NotepadComponent";
import questionIcon from "@/public/icons/questionIcon.png";
import DesktopPropertiesComponent from "./windowComponents/desktopPropertiesComponent";
import { currentAppearance } from "./windowComponents/desktopPropertiesComponent";
import CurriculumComponent from "./windowComponents/curriculumComponent";
import UserAccountsComponent from "./windowComponents/userAccountsComponent";

interface FloatingWindowProps {
    name: string;
    onClose: () => void;
    icon: string;
    type: string | null;
    fixedSize?: boolean;
    width: string;
    height: string;
    mobileWidth: string;
    mobileHeight: string;
}

export default function FloatingWindow({ name, icon, type, onClose, fixedSize, width, height, mobileHeight, mobileWidth }: FloatingWindowProps) {
    const targetRef = React.useRef(null);
    const nodrag = name === "Curriculum" && window.innerWidth > 1024;
    const { moveProps } = useDraggable({ targetRef, canOverflow: true });
    const [position, setPosition] = useState({ top: -1000, left: -1000 });
    const [isMaximized, setIsMaximized] = useState(false);

    useEffect(() => {
        const maxLeft = window.innerWidth - 200;
        const maxTop = window.innerHeight - 200;

        const randomLeft = Math.floor(Math.random() * maxLeft);
        const randomTop = Math.floor(Math.random() * maxTop);

        setPosition({ top: randomTop, left: randomLeft });
    }, []);

    const isDesktop = typeof window !== "undefined" && window.innerWidth > 1024;

    return (
        <div >
            <div ref={nodrag ? undefined : targetRef} id="windowElement" className={`max-w-[screen] !all-unset ${currentAppearance.window} p-0 border-x-5 border-b-5 ${currentAppearance.border} !rounded-b-none flex flex-col !gap-0 transition-transform duration-0
                lg:absolute absolute rounded-t-xl`}
                style={isDesktop ? {
                    width: isMaximized ? "100dvw" : width,
                    height: isMaximized ? "94.7dvh" : height,
                    top: isMaximized || nodrag ? 0 : position.top,
                    left: isMaximized ? 0 : nodrag ? "20dvw" : position.left,
                    position: "absolute",
                } : {
                    width: isMaximized ? "100dvw" : mobileWidth,
                    height: isMaximized ? "94.7dvh" : mobileHeight,
                    top: isMaximized ? 0 : position.top,
                    left: isMaximized ? 0 : position.left,
                    position: "absolute",
                }}
            >
                <div {...moveProps} className="!flex !flex-row place-items-center h-[45px] relative !p-0 !cursor-default">
                    <div className="ml-2 flex">
                        {icon && <Image src={icon} draggable={false} alt={name} width={30} height={30} className="mr-2" />}
                        <p className={`font-arial font-bold text-lg !m-0 drop-shadow-[2px_3px_2px_rgba(0,0,0,0.9)] ${currentAppearance.light && "text-black"}`}>{name}</p>
                    </div>
                    <div className="flex gap-1 ml-auto" >
                        {fixedSize ?
                            <button type="button" className="!my-auto ">
                                <img draggable="false" src={questionIcon.src} alt="Close" className="w-[33px] h-[33px] cursor-default active:brightness-75" />
                            </button>
                            :
                            <>
                                <button type="button" className="!my-auto ">
                                    <img draggable="false" src={minimizeIcon.src} alt="Minimize" className="w-[33px] h-[33px] cursor-default active:brightness-75" />
                                </button>
                                <button type="button" className="!my-auto">
                                    <img draggable="false" src={restoreIcon.src} alt="Maximize" /*onClick={() => setIsMaximized(!isMaximized)} */ className="w-[33px] h-[33px] cursor-default active:brightness-75" />
                                </button>
                            </>
                        }
                        <button type="button" className="!my-auto mr-2 " onClick={onClose}>
                            <img draggable="false" src={exitIcon.src} alt="Close" className="w-[33px] h-[33px] cursor-default active:brightness-75" />
                        </button>
                    </div>
                    <div className={`bg-gradient-to-t ${currentAppearance.shadow1} h-[10px] w-full absolute top-[32px] left-[0px]`}></div>
                </div>
                <div className="h-full bg-white">
                    {type === "notepad" && <NotepadComponent />}
                    {type === "curriculum" && <CurriculumComponent />}
                    {type === "displayProperties" && <DesktopPropertiesComponent onClose={onClose} />}
                    {type === "userAccounts" && <UserAccountsComponent />}
                </div>
            </div>
        </div >
    );
}