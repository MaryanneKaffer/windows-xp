import { useState } from "react"
import Initializing from "../../initializing"

export default function OffScreen() {
    const [turnOn, setTurnOn] = useState(false)
    if (turnOn) return (<Initializing />);
    return (
        <div className="w-[100dvw] h-[100dvh]">
            <button className="fixed bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2" onClick={() => setTurnOn(true)}>
                <img src="/icons/standByIcon.png" className="size-16 cursor-pointer" />
            </button>
        </div>
    )
}