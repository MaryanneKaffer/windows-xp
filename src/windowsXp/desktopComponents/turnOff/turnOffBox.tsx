import { useState, useEffect } from "react";
import { currentAppearance } from "../windowComponents/desktopPropertiesComponent";
import { useTurnOff } from "./turnOffContext";

export default function TurnOffBox() {
    const [cancel, setCancel] = useState(false)
    const [loading, setLoad] = useState(false)
    const { setTurnOff } = useTurnOff();

    useEffect(() => {
        if (loading) {
            const timeout = setTimeout(() => {
                setTurnOff(true);
            }, 6000);
            return () => clearTimeout(timeout);
        }
    }, [loading, setTurnOff]);

    if (cancel) return;
    return (
        <>
            <span className={`${loading ? "z-[100] cursor-wait" : ""} w-[100dvw] h-[100dvh] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`} />
            <div className={`md:w-[500px] w-[300px] md:h-[300px] h-[200px] bg-blue-900 fixed top-32 left-1/2 transform -translate-x-1/2 border-[2px] flex flex-col`}>
                <span className="flex items-center z-20 md:h-20 h-12 md:text-[25px] text-xl px-4 py-2.5 font-bold font-arial">
                    <p>Turn Off Computer</p>
                    <img src="/logo/logoIcon.png" className="md:h-11 h-7 ml-auto" />
                </span>
                <div className={`bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 w-full h-full flex md:text-3xl text-xl font-bold px-5 justify-center gap-12`}>
                    <button draggable={false} className="justify-items-center h-fit my-auto cursor-pointer">
                        <img src="/icons/standByIcon.png" className="md:size-12 size-10" />
                        Stand By
                    </button>
                    <button draggable={false} className="justify-items-center h-fit my-auto cursor-pointer" onClick={() => setLoad(true)}>
                        <img src="/icons/turnOffIcon.png" className="md:size-12 size-10" />
                        Turn Off
                    </button>
                    <button draggable={false} className="justify-items-center h-fit my-auto cursor-pointer">
                        <img src="/icons/restartIcon.png" className="md:size-12 size-10" />
                        Restart
                    </button>
                </div>
                <span className="flex items-center md:h-20 h-12 px-4 py-2.5">
                    <button onClick={() => setCancel(true)}
                        className={`text-xl ml-auto cursor-default bg-white text-black px-4 py-0.5 border-2 rounded-sm leading-none ${currentAppearance.buttonborder} active:brightness-50`}>Cancel</button>
                </span>
            </div>
        </>
    )
}