import { useState } from "react"
import { currentAppearance } from "./desktopPropertiesComponent"
import { folderOptions } from "@/config/data/windowData/folderData/folderOptions"
import { folderConfig } from "@/config/data/windowData/folderData/folderConfig"
import { FaAngleDoubleUp } from "react-icons/fa";

export default function FolderComponent({ name, icon }: { name: string, icon: string }) {
    const options = ["File", "Edit", "View", "Favorites", "Tools", "Help"]
    const [isHoveringOpt, setisHoveringOpt] = useState(-1)
    const [isHoveringCnf, setisHoveringCnf] = useState(-1)

    return (
        <div className="w-full h-full flex flex-col">
            <div className="bg-yellow-100 bg-opacity-50 h-fit w-full flex flex-col text-black text-lg">
                <span className="border-b border-[1px] border-gray-300">
                    {options.map((option, index) => (
                        <button onMouseEnter={() => setisHoveringOpt(index)} onMouseLeave={() => setisHoveringOpt(-1)} key={option}
                            className={`${isHoveringOpt === index && `${currentAppearance.color} text-white`} md:px-3 px-2`}>
                            {option}
                        </button>
                    ))}
                </span>
                <div className="md:px-2 py-1 flex border-b border-[1px] border-gray-300 md:h-[40px] h-[30px]">
                    {folderOptions.map((option, index) => (
                        <div key={option.name + index} className="flex items-center">
                            <button onMouseEnter={() => setisHoveringCnf(index)} onMouseLeave={() => setisHoveringCnf(-1)}
                                className={`flex items-center md:gap-3 gap-1 p-1 relative active:brightness-75 cursor-default ${isHoveringCnf === index && `${currentAppearance.color} text-white`}`}>
                                <img draggable={false} src={option.img} className="md:size-6 size-4" /><p className="md:text-lg text-sm leading-[0.7]">{option.name}</p> {option.list && <span className="mt-5 md:-ml-2 -ml-1 text-xl">🢓</span>}
                            </button>
                            {option.divider && <div className="h-full md:w-[2px] w-[1px] bg-gray-300 mx-1"></div>}
                        </div>
                    ))}
                </div>
                <div className="flex md:text-lg text-sm border-b border-[1px] border-gray-300 px-2 gap-2 relative h-[30px] items-center">
                    <h1>Address</h1>
                    <span className={`border-[1px] ${currentAppearance.border} px-1 w-full md:h-[85%] h-[75%] items-center flex`}>
                        <img draggable={false} src={icon} className="md:size-5 size-4" />
                        <input defaultValue={`C:\\Desktop\\${name}`} type="text" className="w-full md:h-[85%] h-[75%] bg-white" />
                    </span>
                    <button className="flex items-center md:gap-2 gap-1 relative active:brightness-75 cursor-default mr-2">
                        <img draggable={false} src="/icons/GoIcon.png" className="md:size-6 size-4" /> Go
                    </button>
                </div>
            </div>
            <div className="flex w-full h-full">
                <div className={`h-full md:w-[15rem] w-[9rem] ${currentAppearance.color} flex flex-col bg-opacity-80 md:p-4 p-3 md:gap-4 gap-3`}>
                    {folderConfig.map((option) => (
                        <div key={option.name} className={`flex flex-col ${currentAppearance.mainColor}`}>
                            <span className="bg-gradient-to-r flex items-center justify-between from-white via-white to-transparent md:text-xl text-md leading-[0.7] md:px-2 px-1 rounded-t-sm md:border-[2px] border-[1px] border-gray-300">
                                {option.name}
                                <FaAngleDoubleUp className={`md:size-[18px] size-4 bg-white active:brightness-75 rounded-full border-[1px] border-gray-300 shadow-black shadow-lg ${currentAppearance.color}`} />
                            </span>
                            {option.content && <span className="bg-white bg-opacity-70 flex flex-col md:p-2 px-2 py-1 border-[2px] border-gray-300">
                                {option.content.map((item) => (
                                    <button key={item.name} className="flex items-center gap-2 relative active:brightness-75 cursor-default md:ml-3 md:text-lg text-sm text-left leading-[0.8]">
                                        <img draggable={false} src={item.img} className="md:size-5 size-3" />{item.name}
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