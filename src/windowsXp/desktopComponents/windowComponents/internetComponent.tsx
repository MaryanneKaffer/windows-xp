import { internetOptions } from "@/config/data/windowData/internetOptions"
import { useState } from "react"
import { currentAppearance } from "./desktopPropertiesComponent"
import { IoMdFastforward } from "react-icons/io";

export default function InternetComponent({ icon }: { icon: string }) {
    const options = ["File", "Edit", "View", "Favorites", "Tools", "Help"]
    const [isHoveringOpt, setisHoveringOpt] = useState(-1)
    const [isHoveringCnf, setisHoveringCnf] = useState(-1)

    return (
        <div className="w-full h-full flex flex-col bg-yellow-100 bg-opacity-50">
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
                    {internetOptions.map((option, index) => (
                        <span key={index} className=" flex place-items-center">
                            <button onMouseEnter={() => setisHoveringCnf(index)} onMouseLeave={() => setisHoveringCnf(-1)}
                                className={`flex justify-items-center items-center md:gap-2 gap-1 md:py-4 py-3 ${option.list || option.name ? "md:px-2 px-1" : "px-1"} relative active:brightness-75 cursor-default ${isHoveringCnf === index && `${currentAppearance.color} text-white`}`}>
                                <img draggable={false} src={option.img} className="md:size-6 size-4" />{option.name && <p className="md:text-lg text-sm leading-[0.7] md:flex hidden">{option.name}</p>} {option.list && <span className="sm:flex hidden md:mt-5 mt-4 -ml-0.5 relative text-xl">🢓</span>}
                            </button>
                            {option.divider && <div className="h-full md:w-[2px] w-[1px] bg-gray-300 mx-1" />}
                        </span>
                    ))}
                </div>
                <div className="flex md:text-lg text-sm border-b border-[1px] border-gray-300 px-2 gap-2 relative h-[30px] items-center">
                    <h1>Address</h1>
                    <span className={`border-[1px] ${currentAppearance.border} px-1 w-full md:h-[85%] h-[75%] items-center flex`}>
                        <img draggable={false} src={icon} className="md:size-5 size-4" />
                        <input defaultValue={`https://www.google.com/`} type="text" className="w-full md:h-[85%] h-[75%] bg-white" />
                    </span>
                    <button className="flex items-center md:gap-2 gap-1 relative active:brightness-75 cursor-default mr-2">
                        <img draggable={false} src="/icons/GoIcon.png" className="md:size-6 size-4" /> Go
                    </button>
                    <div className="h-full md:w-[2px] w-[1px] bg-gray-300 ml-2" />
                    <p className="text-gray-500">Links</p>
                    <IoMdFastforward size={14} className="mb-2" />
                </div>
            </div>
            <iframe
                src="https://web.archive.org/web/20120331235755/https://www.google.com"
                title="Google"
                className="md:h-full md:w-full w-full h-[400px] shadow-md shadow-gray-400"
                sandbox="allow-scripts"
            />
            <div className="w-full px-1 h-[4%] flex text-black text-lg place-items-center my-auto">
                <img draggable={false} src="/icons/URLicon.png" className="size-4" />
                <span className="h-full w-[15%] ml-auto flex">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <span key={i} className="w-[40px] h-full "><div className="h-full my-1 w-[1px] bg-gray-300 justify-self-end"></div></span>
                    ))}
                </span>
                <span className="mr-[10%] ml-2 flex place-items-center gap-1">
                    <img draggable={false} src="/icons/internetShortcutIcon.png" className="size-4 mt-0.5" />
                    <p>Internet</p>
                </span>
            </div>
        </div>
    )
}