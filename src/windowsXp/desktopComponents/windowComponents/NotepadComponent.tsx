import { notepadData } from "@/config/data/notepadData";

export default function Notepad() {
    return (
        <div className="w-full h-full">
            <span className="h-full flex flex-col">
                <div className="w-full h-[30px] bg-[#fff7c9] flex flex-row gap-1 border-b-[1px] border-winXpBlue border-winXpBlue ">
                    {notepadData.map((item, index) => (
                        <button key={index} className="h-[30px] flex px-2 text-black text-lg cursor-default hover:bg-winXpBlue hover:text-white">{item.name}</button>
                    ))}
                </div>
                <textarea className="w-full h-full bg-white outline-none resize-none text-black text-xl overflow-scroll whitespace-nowrap px-2" spellCheck={false} />
            </span>
        </div>
    )
}