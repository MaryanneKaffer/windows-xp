import Image from "next/image";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { useDraggable } from "@heroui/react";
import exitIcon from "@/public/icons/exitIcon.png";
import minimizeIcon from "@/public/icons/minimizeIcon.png";
import restoreIcon from "@/public/icons/restoreIcon.png";
import NotepadComponent from "./windowComponents/NotepadComponent";

interface FloatingWindowProps {
    name: string;
    onClose: () => void;
    icon: string;
}

export default function FloatingWindow({ name, icon, onClose }: FloatingWindowProps) {
    const [position, setPosition] = window.innerWidth >= 1024 ? useState({ x: Math.random() * (0 - 600) + 600, y: Math.random() * (-200 - -500) - 500 }) : useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const targetRef = React.useRef(null);
    const { moveProps } = useDraggable({ targetRef, canOverflow: true });

    const handleMaximize = () => {
        setIsMaximized(!isMaximized);
    };

    return (
        <div ref={targetRef}>
            <div id="windowElement" className={`max-w-[screen] !all-unset bg-window p-0 border-x-3 border-b-3 border-winXpBlue !rounded-b-none ${!isMaximized ? "!rounded-t-xl" : "rounded-none"} [&>button]:hidden !flex !flex-col !gap-0 transition-transform duration-0`}
                style={window.innerWidth >= 1024 ? {
                    transform: isMaximized ? "none" : `translate(${position.x}px, ${position.y}px)`,
                    width: isMaximized ? "1440px" : "50vw",
                    height: isMaximized ? "95vh" : "600px",
                    top: isMaximized ? "0" : "auto",
                    left: isMaximized ? "0" : "auto",
                    position: "absolute"
                } : {
                    width: isMaximized ? "" : "100vw",
                    height: isMaximized ? "" : "93.2dvh",
                    top: isMaximized ? "" : "46.5%",
                    left: isMaximized ? "" : "50%",
                    position: "absolute"
                }}>
                <div {...moveProps} className="!flex !flex-row place-items-center h-[45px] relative !cursor-default !p-0">
                    <Image src={icon} draggable={false} alt={name} width={30} height={30} className="mx-2" />
                    <p className="font-arial text-lg !m-0 drop-shadow-[2px_3px_2px_rgba(0,0,0,0.9)]">{name}</p>
                    <div className="flex gap-1 ml-auto">
                        <button type="button" className="!my-auto ">
                            <img draggable="false" src={minimizeIcon.src} alt="Close" className="w-[33px] h-[33px] cursor-default active:brightness-75" />
                        </button>
                        <button onClick={handleMaximize} type="button" className="!my-auto lg:block hidden">
                            <img draggable="false" src={restoreIcon.src} alt="Close" className="w-[33px] h-[33px] cursor-default active:brightness-75" />
                        </button>
                        <button type="button" className="!my-auto mr-2 " onClick={onClose}>
                            <img draggable="false" src={exitIcon.src} alt="Close" className="w-[33px] h-[33px] cursor-default active:brightness-75" />
                        </button>
                    </div>
                    <div className={`bg-gradient-to-t from-[rgb(21_55_128)] to-transparent h-[10px] ${!isMaximized ? "w-full" : ""} absolute top-[34px] left-[0px]`}></div>
                </div>
                <div className="h-full bg-white">
                    {name === "Notepad" && <NotepadComponent />}
                </div>
            </div>
        </div >
    );
}