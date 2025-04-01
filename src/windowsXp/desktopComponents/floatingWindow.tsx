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
import { currentAppearance } from "./windowComponents/desktopPropertiesComponent";
import CurriculumComponent from "./windowComponents/curriculumComponent";

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
    const [position] = window.innerWidth >= 1024 ? useState({ x: Math.random() * (0 - -600) + -700, y: Math.random() * (-200 - -400) - 400 }) : useState({ x: 0, y: 0 });
    const targetRef = React.useRef(null);
    const nodrag = name === "Curriculum";
    const { moveProps } = useDraggable({ targetRef });

    return (
        <div >
            <div ref={nodrag ? undefined : targetRef} id="windowElement" className={`max-w-[screen] !all-unset ${currentAppearance.window} p-0 border-x-3 border-b-3 ${currentAppearance.border} !rounded-b-none flex flex-col !gap-0 transition-transform duration-0
            lg:absolute w-[80dvw] h-[50dvh] top-[46.5%] left-[50%] absolute rounded-t-xl`}
                style={screen.width > 1024 ? {
                    width: width,
                    height: height,
                    transform: nodrag ? `translate(-50%, -49%)` : `translate(${position.x}px, ${position.y}px)`
                } : {
                    width: mobileWidth,
                    height: mobileHeight,
                    transform: nodrag ? `translate(-50%, -49%)` : ``
                }}
            >
                <div {...moveProps} className="!flex !flex-row place-items-center h-[45px] relative !cursor-default !p-0">
                    <div className="mx-2 flex">
                        {icon && <Image src={icon} draggable={false} alt={name} width={30} height={30} className="mr-2" />}
                        <p className={`font-arial font-bold text-lg !m-0 drop-shadow-[2px_3px_2px_rgba(0,0,0,0.9)] ${currentAppearance.light && "text-black"}`}>{name}</p>
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
                                <button type="button" className="!my-auto">
                                    <img draggable="false" src={restoreIcon.src} alt="Maximize" className="w-[33px] h-[33px] cursor-default active:brightness-75" />
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
                </div>
            </div>
        </div >
    );
}