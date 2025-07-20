import { useState } from "react"
import { currentAppearance } from "./desktopPropertiesComponent"
import { folderOptions } from "@/config/data/windowData/folderData/folderOptions"

export default function RecycleBinComponent({ icon }: { icon: string }) {
    const options = ["File", "Edit", "View", "Favorites", "Tools", "Help"]
    const [isHoveringOpt, setisHoveringOpt] = useState(-1)
    const [isHoveringCnf, setisHoveringCnf] = useState(-1)

    return (
        <div className="w-full h-full flex flex-col bg-opacity-50 bg-yellow-100 ">
            <div className="h-fit w-full flex flex-col text-black text-lg">
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
                        <>
                            <button onMouseEnter={() => setisHoveringCnf(index)} onMouseLeave={() => setisHoveringCnf(-1)}
                                className={`flex items-center md:gap-3 gap-1 p-1 relative active:brightness-75 cursor-default ${isHoveringCnf === index && `${currentAppearance.color} text-white`}`}>
                                <img draggable={false} src={option.img} className="md:size-6 size-4" /><p className="md:text-lg text-sm leading-[0.7]">{option.name}</p> {option.list && <span className="md:top-[50%] top-[85%] md:-ml-2 -ml-1 relative text-xl">🢓</span>}
                            </button>
                            {option.divider && <div className="h-full md:w-[2px] w-[1px] bg-gray-300 mx-1"></div>}
                        </>
                    ))}
                </div>
                <div className="flex md:text-lg text-sm border-b border-[1px] border-gray-300 px-2 gap-2 relative h-[30px] items-center">
                    <h1>Address</h1>
                    <span className={`border-[1px] ${currentAppearance.border} px-1 w-full md:h-[85%] h-[75%] items-center flex`}>
                        <img draggable={false} src={icon} className="md:size-5 size-4" />
                        <input defaultValue={`C:\\Desktop\\Recycle Bin`} type="text" className="w-full md:h-[85%] h-[75%] bg-white" />
                    </span>
                    <button className="flex items-center md:gap-2 gap-1 relative active:brightness-75 cursor-default mr-2">
                        <img draggable={false} src="/icons/GoIcon.png" className="md:size-6 size-4" /> Go
                    </button>
                </div>
            </div>
            <div className="h-[98%] bg-white w-full shadow-md shadow-gray-400">

            </div>
            <span className="flex items-center md:text-lg text-sm text-black gap-2 px-1">
                <p>0 objects</p>
                <div className="h-[85%] relative md:w-[2px] w-[1px] bg-gray-300 my-1 ml-8"></div>
                <p>0 bytes</p>
                <div className="h-[85%] relative md:w-[2px] w-[1px] bg-gray-300 my-1 ml-8"></div>
            </span>
        </div>
    )
} 