import { useState } from "react"
import { currentAppearance } from "./desktopPropertiesComponent"

export default function FolderComponent({ name }: { name: string }) {
    const options = ["File", "Edit", "View", "Favorites", "Tools", "Help"]
    const [isHovering, setIsHovering] = useState(-1)
    return (
        <div>
            <div className="bg-yellow-100 bg-opacity-50 h-fit w-full flex flex-col text-black text-lg">
                <span className="border-b border-[1px] border-gray-300">
                    {options.map((option, index) => (
                        <button onMouseEnter={() => setIsHovering(index)} onMouseLeave={() => setIsHovering(-1)} key={option} className={`${isHovering === index && `${currentAppearance.color} text-white`} px-3`}>
                            {option}
                        </button>
                    ))}
                </span>
                <div className="px-2 py-1 flex gap-2 border-b border-[1px] border-gray-300 h-[40px]">
                    <button className="flex items-center gap-2 relative active:brightness-75 cursor-default">
                        <img draggable={false} src="/icons/backIcon.png" className="size-6" />Back <span className="absolute left-16 top-2.5 text-xl">🢓</span>
                    </button>
                    <button className="flex items-center gap-2 relative active:brightness-75 cursor-default ml-4">
                        <img draggable={false} src="/icons/forwardIcon.png" className="size-6" /><span className="absolute left-8 top-2.5 text-xl">🢓</span>
                    </button>
                    <button className="flex items-center gap-2 relative active:brightness-75 cursor-default ml-5">
                        <img draggable={false} src="/icons/folderUpIcon.png" className="size-6" />
                    </button>
                    <span className="w-[1px] h-full bg-gray-300" />
                    <button className="flex items-center gap-2 relative active:brightness-75 cursor-default">
                        <img draggable={false} src="/icons/searchIcon.png" className="size-6" /> Search
                    </button>
                    <button className="flex items-center gap-2 relative active:brightness-75 cursor-default">
                        <img draggable={false} src="/icons/folderViewIcon.png" className="size-6" /> Folders
                    </button>
                    <span className="w-[1px] h-full bg-gray-300" />
                    <button className="flex items-center gap-2 relative active:brightness-75 cursor-default">
                        <img draggable={false} src="/icons/IconViewIcon.png" className="size-6" /><span className="absolute left-6 top-2.5 text-xl">🢓</span>
                    </button>
                </div>
                <div className="flex border-b border-[1px] border-gray-300 px-2 gap-2 relative h-[30px] items-center">
                    <h1>Address</h1>
                    <span className={`border-[1px] ${currentAppearance.border} px-1 w-full h-[85%] items-center flex`}>
                        <img draggable={false} src="/icons/folderClosedIcon.png" className="size-5" />
                        <input defaultValue={`C:\\Desktop\\${name}`} type="text" className="w-full h-[85%] bg-white" />
                    </span>
                    <button className="flex items-center gap-2 relative active:brightness-75 cursor-default mr-2">
                        <img draggable={false} src="/icons/GoIcon.png" className="size-6" /> Go
                    </button>
                </div>
            </div>
        </div>
    )
} 