import { useState } from "react"
import { currentAppearance } from "./desktopPropertiesComponent"
import { bottomInputs, topInputs } from "@/config/data/windowData/calculatorData"

export default function CalculatorComponent() {
    const options = ["Edit", "View", "Help"]
    const [isHoveringOpt, setisHoveringOpt] = useState(-1)

    return (
        <div className="w-full h-full flex flex-col bg-opacity-50 bg-yellow-100 ">
            <div className="h-fit w-full flex flex-col text-black text-lg">
                <span className="border-b border-[1px] border-gray-300">
                    {options.map((option, index) => (
                        <button onMouseEnter={() => setisHoveringOpt(index)} onMouseLeave={() => setisHoveringOpt(-1)} key={option}
                            className={`md:text-xl text-lg ${isHoveringOpt === index && `${currentAppearance.color} text-white`} md:px-3 px-2`}>
                            {option}
                        </button>
                    ))}
                </span>
            </div>
            <div className="flex flex-col w-full h-full px-2 gap-2">
                <input defaultValue={0} className={`${currentAppearance.border} px-2 text-black text-2xl border-[2px] bg-white text-right w-full`} type="text" />
                <span className="flex flex-col gap-2 px-1 h-full mt-2">
                    <span className="justify-between flex w-full h-fit items-center">
                        <span className="size-11 flex mr-[4.5%] ml-1.5"><div className="size-9 my-auto border-t-[3px] border-l-[3px] border-b-[2px] border-r-[2px] border-b-white border-r-white border-gray-500" /></span>
                        {topInputs.map((input) => (
                            <button key={input.label} className={`${currentAppearance.border} group font-bold cursor-default border-[2px] rounded-md bg-white text-red-900 text-xl w-[26%] h-11 flex items-center justify-center`}>
                                <p className="text-2xl group-hover:border-orange-300 border-[3px] border-transparent w-full h-full group-active:border-transparent">{input.label}</p>
                            </button>
                        ))}
                    </span>
                    <span className="justify-between flex flex-wrap w-full items-center mt-2">
                        {bottomInputs.map((input) => (
                            <button key={input.label} className={`${currentAppearance.border} group font-bold cursor-default border-[2px] rounded-md bg-white ${input.color ? "text-red-900" : "text-blue-900"} 
                        text-xl w-[15%] h-11 flex items-center justify-center ${input.space && "mr-3"} mb-2`}>
                                <p className="text-2xl group-hover:border-orange-300 border-[3px] border-transparent group-active:border-transparent w-full h-full">{input.label}</p>
                            </button>
                        ))}
                    </span>
                </span>
            </div>
        </div>
    )
} 