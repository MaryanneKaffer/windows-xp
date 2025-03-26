import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useDraggable } from "@heroui/react";
import exitIcon from "@/public/icons/exitIcon.png";
import minimizeIcon from "@/public/icons/minimizeIcon.png";
import restoreIcon from "@/public/icons/restoreIcon.png";
import NotepadComponent from "./windowComponents/NotepadComponent";
import questionIcon from "@/public/icons/questionIcon.png";
import DesktopPropertiesComponent from "./windowComponents/desktopPropertiesComponent";

interface FloatingWindowProps {
    name: string;
    onClose: () => void;
    icon: string;
    fixedSize?: boolean;
    width: string;
    height: string;
    mobileWidth: string;
    mobileHeight: string;
}

export default function FloatingWindow({ name, icon, onClose, fixedSize, width, height, mobileHeight, mobileWidth }: FloatingWindowProps) {
    const [position] = window.innerWidth >= 1024 ? useState({ x: Math.random() * (0 - -600) + -700, y: Math.random() * (-200 - -400) - 400 }) : useState({ x: 0, y: 0 });
    const [isMaximized, setIsMaximized] = useState(false);
    const targetRef = React.useRef(null);
    const { moveProps } = useDraggable({ targetRef, canOverflow: true });

    const handleMaximize = () => {
        setIsMaximized(!isMaximized);
    };

    return (
        <div >
            <div ref={!isMaximized ? targetRef : undefined} id="windowElement" className={`max-w-[screen] !all-unset bg-window p-0 border-x-3 border-b-3 border-winXpBlue !rounded-b-none flex flex-col !gap-0 transition-transform duration-0
            ${isMaximized ? "lg:w-[1440px] lg:h-[95vh] lg:absolute w-[100dvw] h-[93.2dvh] top-0 left-0 absolute rounded-none" : `lg:fixed w-[80dvw] h-[50dvh] top-[46.5%] left-[50%] absolute rounded-t-xl`}`}
                style={!isMaximized && screen.width > 1024 ? {
                    width: isMaximized ? "1440px" : width,
                    height: isMaximized ? "95vh" : height,
                    transform: `translate(${position.x}px, ${position.y}px)`
                } : {
                    width: isMaximized ? "100vw" : mobileWidth,
                    height: isMaximized ? "93.2dvh" : mobileHeight,
                }}
            >
                <div {...moveProps} onDoubleClick={handleMaximize} className="!flex !flex-row place-items-center h-[45px] relative !cursor-default !p-0">
                    <div className="mx-2 flex">
                        {icon && <Image src={icon} draggable={false} alt={name} width={30} height={30} className="mr-2" />}
                        <p className="font-arial text-lg !m-0 drop-shadow-[2px_3px_2px_rgba(0,0,0,0.9)]">{name}</p>
                    </div>
                    <div className="flex gap-1 ml-auto">
                        {fixedSize ?
                            <button type="button" className="!my-auto ">
                                <img draggable="false" src={questionIcon.src} alt="Close" className="w-[33px] h-[33px] cursor-default active:brightness-75" />
                            </button>
                            :
                            <>
                                <button type="button" className="!my-auto ">
                                    <img draggable="false" src={minimizeIcon.src} alt="Minimize" className="w-[33px] h-[33px] cursor-default active:brightness-75" />
                                </button>
                                <button onClick={handleMaximize} type="button" className="!my-auto">
                                    <img draggable="false" src={restoreIcon.src} alt="Maximize" className="w-[33px] h-[33px] cursor-default active:brightness-75" />
                                </button>
                            </>
                        }
                        <button type="button" className="!my-auto mr-2 " onClick={onClose}>
                            <img draggable="false" src={exitIcon.src} alt="Close" className="w-[33px] h-[33px] cursor-default active:brightness-75" />
                        </button>
                    </div>
                    <div className={`bg-gradient-to-t from-[rgb(21_55_128)] to-transparent h-[10px] ${!isMaximized ? "w-full" : ""} absolute top-[32px] left-[0px]`}></div>
                </div>
                <div className="h-full bg-white">
                    {name === "Notepad" && <NotepadComponent />}
                    {name === "Display Properties" && <DesktopPropertiesComponent />}
                </div>
            </div>
        </div >
    );
}