import { useEffect, useState } from "react";
import { currentScreenSaver } from "./desktopComponents/windowComponents/desktopPropertiesComponent";
import { currentResolution } from "./desktopComponents/windowComponents/desktopPropertiesComponent";

type Props = {
    screenSaving: boolean;
    setScreenSaving: (value: boolean) => void;
};

export default function ScreenSaverComponent({ screenSaving, setScreenSaving }: Props) {
    useEffect(() => {
        let timeout: string | number | NodeJS.Timeout | undefined;

        const resetTimer = () => {
            clearTimeout(timeout);
            setScreenSaving(false);
            timeout = setTimeout(() => {
                setScreenSaving(true)
            }, 30000);
        };

        const events = ['mousemove', 'keydown', 'click', 'scroll'];

        events.forEach(event =>
            window.addEventListener(event, resetTimer),
        );

        resetTimer();

        return () => {
            clearTimeout(timeout);
            events.forEach(event =>
                window.removeEventListener(event, resetTimer),
            );
        };
    }, []);
    return (
        <>
            {screenSaving && <video autoPlay src={currentScreenSaver} draggable={false} className="absolute object-cover z-[9999]" style={screen.width > 1024 ? { width: `${currentResolution[0]}px`, height: `${currentResolution[1]}px` } : {width: "100dvw", height: "100dvh"}} />}
        </>
    )
}