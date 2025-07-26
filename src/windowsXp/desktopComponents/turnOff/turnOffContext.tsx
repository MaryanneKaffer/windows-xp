"use client";
import { createContext, useContext, useState } from "react";

const TurnOffContext = createContext({
    turnOff: false,
    setTurnOff: (val: boolean) => { },
});

export function TurnOffProvider({ children }: { children: React.ReactNode }) {
    const [turnOff, setTurnOff] = useState(false);
    return (
        <TurnOffContext.Provider value={{ turnOff, setTurnOff }}>
            {children}
        </TurnOffContext.Provider>
    );
}

export const useTurnOff = () => useContext(TurnOffContext);
