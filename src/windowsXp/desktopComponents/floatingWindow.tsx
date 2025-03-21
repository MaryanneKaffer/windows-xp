import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
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
    const [position, setPosition] = useState({ x: Math.random() * -500, y: Math.random() * -500 });
    const isDragging = useRef(false);
    const offset = useRef({ x: 0, y: 0 });
    const animationFrame = useRef<number | null>(null);
    const [isActive, setIsActive] = useState(false);
    const windowRef = useRef<HTMLDivElement>(null);
    const ref = useRef(null);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        isDragging.current = true;
        offset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging.current) return;
        if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
        animationFrame.current = requestAnimationFrame(() => {
            setPosition({
                x: e.clientX - offset.current.x,
                y: e.clientY - offset.current.y,
            });
        });
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
            if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
        };
    }, []);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (windowRef.current && !windowRef.current.contains(event.target as Node)) {
                setIsActive(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    useClickAway(ref, () => setIsActive(false));

    return (
        <Dialog open={true} onOpenChange={onClose} modal={false} >
            <DialogContent id="windowElement" ref={ref} forceMount style={{ transform: `translate(${position.x}px, ${position.y}px)` }} onInteractOutside={(e) => e.preventDefault()} onClick={() => isActive ? "" : setIsActive(!isActive)}
                className={`${isActive ? "z-10" : "z-0"} !all-unset min-w-[700px] h-[600px] bg-window p-0 border-x-3 border-b-3 border-winXpBlue !rounded-b-none !rounded-t-xl [&>button]:hidden !flex !flex-col !gap-0 absolute transition-transform duration-0`} >

                <DialogHeader onMouseDown={handleMouseDown} className="!flex !flex-row place-items-center h-[45px] relative cursor-default">
                    <Image src={icon} draggable={false} alt={name} width={30} height={30} className="mx-2" />
                    <DialogTitle className="font-arial text-lg !m-0 drop-shadow-[2px_3px_2px_rgba(0,0,0,0.9)]">{name}</DialogTitle>
                    <div className="flex gap-1 ml-auto">
                        <button type="button" className="!my-auto ">
                            <img draggable="false" src={minimizeIcon.src} alt="Close" className="w-[33px] h-[33px] cursor-default active:brightness-75" />
                        </button>
                        <button type="button" className="!my-auto">
                            <img draggable="false" src={restoreIcon.src} alt="Close" className="w-[33px] h-[33px] cursor-default active:brightness-75" />
                        </button>
                        <DialogClose asChild>
                            <button type="button" className="!my-auto mr-2">
                                <img draggable="false" src={exitIcon.src} alt="Close" className="w-[33px] h-[33px] cursor-default active:brightness-75" />
                            </button>
                        </DialogClose>
                    </div>
                    <div className="bg-gradient-to-t from-[rgb(21_55_128)] to-transparent h-[10px] w-full fixed top-[28px] left-[0px]"></div>
                </DialogHeader>
                <DialogDescription className="h-full bg-white">
                    {name === "Notepad" && <NotepadComponent />}
                </DialogDescription>
            </DialogContent>
        </Dialog>
    );
}