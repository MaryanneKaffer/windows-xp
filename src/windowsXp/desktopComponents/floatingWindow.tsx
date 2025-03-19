import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import exitIcon from "@/public/icons/exitIcon.png";
interface FloatingWindowProps {
    name: string;
    onClose: () => void;
    icon: string;
}

export default function FloatingWindow({ name, icon, onClose }: FloatingWindowProps) {
    return (
        <Dialog open={true} onOpenChange={onClose} modal={false}>
            <DialogContent forceMount className="!all-unset min-w-[700px] h-[600px] bg-window p-0 border-x-3 border-b-3 border-winXpBlue !rounded-b-none !rounded-t-xl [&>button]:hidden !flex !flex-col !gap-0" onInteractOutside={(e) => e.preventDefault()}>
                <DialogHeader  className="!flex !flex-row place-items-center h-[45px] relative cursor-default">
                    <Image src={icon} draggable={false} alt={name} width={35} height={35} className="ml-2" />
                    <DialogTitle className="font-thin text-2xl !m-0">{name}</DialogTitle>
                    <DialogClose asChild>
                        <button type="button" className="ml-auto !my-auto mr-1">
                            <img draggable="false" src={exitIcon.src} alt="Close" className="w-[33px] h-[33px] cursor-default active:brightness-75" />
                        </button>
                    </DialogClose>
                    <div className="bg-gradient-to-t from-[rgb(21_55_128)] to-transparent h-[10px] w-full fixed top-[28px] left-[0px]"></div>
                </DialogHeader>
                <DialogDescription className="h-full bg-white"></DialogDescription>
            </DialogContent>
        </Dialog>
    );
}