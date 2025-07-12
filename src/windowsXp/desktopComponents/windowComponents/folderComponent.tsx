import { useState } from "react"
import { currentAppearance } from "./desktopPropertiesComponent"
import { folderOptions } from "@/config/data/windowData/folderData/folderOptions"
import { folderConfig } from "@/config/data/windowData/folderData/folderConfig"
import { FaAngleDoubleUp } from "react-icons/fa";

export default function FolderComponent({ name }: { name: string }) {
    const options = ["File", "Edit", "View", "Favorites", "Tools", "Help"]
    const [isHoveringOpt, setisHoveringOpt] = useState(-1)
    const [isHoveringCnf, setisHoveringCnf] = useState(-1)

    return (
        <div className="w-full h-full flex flex-col">
            <div className="bg-yellow-100 bg-opacity-50 h-fit w-full flex flex-col text-black text-lg">
                <span className="border-b border-[1px] border-gray-300">
                    {options.map((option, index) => (
                        <button onMouseEnter={() => setisHoveringOpt(index)} onMouseLeave={() => setisHoveringOpt(-1)} key={option} className={`${isHoveringOpt === index && `${currentAppearance.color} text-white`} px-3`}>
                            {option}
                        </button>
                    ))}
                </span>
                <div className="px-2 py-1 flex border-b border-[1px] border-gray-300 h-[40px]">
                    {folderOptions.map((option, index) => (
                        <>
                            <button onMouseEnter={() => setisHoveringCnf(index)} onMouseLeave={() => setisHoveringCnf(-1)}
                                className={`flex items-center gap-3 p-1 relative active:brightness-75 cursor-default ${isHoveringCnf === index && `${currentAppearance.color} text-white`}`}>
                                <img draggable={false} src={option.img} className="size-6" />{option.name} {option.list && <span className="top-[50%] -ml-2 relative text-xl">🢓</span>}
                            </button>
                            {option.divider && <div className="h-full w-[2px] bg-gray-300 mx-1"></div>}
                        </>
                    ))}
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
            <div className="flex w-full h-full">
                <div className={`h-full w-[15rem] ${currentAppearance.color} flex flex-col bg-opacity-80 p-4 gap-4`}>
                    {folderConfig.map((option) => (
                        <div key={option.name} className={`flex flex-col ${currentAppearance.mainColor}`}>
                            <span className="bg-gradient-to-r flex items-center justify-between from-white via-white to-transparent text-xl px-2 rounded-t-sm border-[2px] border-gray-300">
                                {option.name}
                                <FaAngleDoubleUp size={18} className={`bg-white active:brightness-75 rounded-full border-[1px] border-gray-300 shadow-black shadow-lg ${currentAppearance.color}`} />
                            </span>
                            {option.content && <span className="bg-white bg-opacity-70 flex flex-col gap-2 p-2 border-[2px] border-gray-300">
                                {option.content.map((item) => (
                                    <button key={item.name} className="flex items-center gap-2 relative active:brightness-75 cursor-default ml-3 text-lg text-left leading-[1]">
                                        <img draggable={false} src={item.img} className="size-6" />{item.name}
                                    </button>
                                ))}
                            </span>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 