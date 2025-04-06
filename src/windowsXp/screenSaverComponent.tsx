import { useEffect, useState } from "react";
import { currentScreenSaver } from "./desktopComponents/windowComponents/desktopPropertiesComponent";

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
            }, 10000);
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
            {screenSaving && <video autoPlay src={currentScreenSaver} draggable={false} className="lg:w-[1444px] lg:h-screen h-[100dvh] w-[100dvh] object-cover z-[9999] fixed top-0 lg:left-[12.4%] left-0" />}
        </>
    )
}