import { useState } from "react";
import { currentAppearance } from "./desktopPropertiesComponent";

export default function CurriculumComponent() {
    const [selected, setSelected] = useState("EN");
    return (
        <div className="h-full w-full">
            <iframe src={selected === "EN" ? "/other/curriculumEN.pdf" : "/other/curriculumPT.pdf"} width="100%" height="94.5%" />
            <div className={`w-auto h-auto ${currentAppearance.taskbar} flex place-items-center gap-1 py-1`}>
                <button onClick={() => setSelected("EN")} className={`cursor-pointer ml-auto w-[40px] h-[45px] border-2 border-white active:brightness-75 rounded-lg ${selected === "EN" ? "bg-gradient-to-br from-red-300 to-red-900" : "bg-gradient-to-br from-blue-300 to-winXpBlue"} font-arial font-bold text-lg`}>EN</button>
                <button onClick={() => setSelected("PT")} className={`cursor-pointer mr-auto w-[40px] h-[45px] border-2 border-white active:brightness-75 rounded-lg ${selected === "PT" ? "bg-gradient-to-br from-red-300 to-red-900" : "bg-gradient-to-br from-blue-300 to-winXpBlue"} font-arial font-bold text-lg`}>PT</button>
            </div>
        </div>
    )
}