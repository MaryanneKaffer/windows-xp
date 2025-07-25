import { useState } from "react";
import { currentAppearance } from "../windowComponents/desktopPropertiesComponent";

export default function TurnOffBox() {
    const [cancel, setCancel] = useState(false)

    if (cancel) return;
    return (
        <span className="z-10 w-[100dvw] h-[100dvh] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className={`w-[500px] h-[300px] bg-blue-900 z-20 fixed top-32 left-1/2 transform -translate-x-1/2 border-[2px] flex flex-col`}>
                <span className="flex items-center h-20 text-[25px] px-4 py-2.5 font-bold font-arial">
                    <p>Turn Off Computer</p>
                    <img src="/logo/logoIcon.png" className="h-11 ml-auto" />
                </span>
                <div className={`bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 w-full h-full flex text-3xl font-bold px-5 justify-center gap-12`}>
                    <button draggable={false} className="justify-items-center h-fit my-auto cursor-pointer">
                        <img src="/icons/standByIcon.png" className="size-12" />
                        Stand By
                    </button>
                    <button draggable={false} className="justify-items-center h-fit my-auto cursor-pointer">
                        <img src="/icons/turnOffIcon.png" className="size-12" />
                        Turn Off
                    </button>
                    <button draggable={false} className="justify-items-center h-fit my-auto cursor-pointer">
                        <img src="/icons/restartIcon.png" className="size-12" />
                        Restart
                    </button>
                </div>
                <span className="flex items-center h-20 px-4 py-2.5">
                    <button onClick={() => setCancel(true)}
                        className={`text-xl ml-auto cursor-default bg-white text-black px-4 py-0.5 border-2 rounded-sm leading-none ${currentAppearance.buttonborder} active:brightness-50`}>Cancel</button>
                </span>
            </div>
        </span>
    )
}