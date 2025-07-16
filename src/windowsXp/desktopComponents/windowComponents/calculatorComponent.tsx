import { useState } from "react"
import { currentAppearance } from "./desktopPropertiesComponent"
import { bottomInputs, topInputs } from "@/config/data/windowData/calculatorData"

export default function CalculatorComponent() {
    const options = ["Edit", "View", "Help"]
    const [isHoveringOpt, setisHoveringOpt] = useState(-1)
    const [calcInput, setCalcInput] = useState("")
    const outputs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "/", "*", "%", "."]

    const Functions = (option: string) => {
        option === "Backspace" && setCalcInput(prev => prev.slice(0, -1))
        option == "CE" && setCalcInput("")
        option == "C" && setCalcInput("")
        option == "=" && (() => { try { setCalcInput(eval(calcInput).toString()) } catch (e) { setCalcInput("Error") } })()
        option == "sqrt" && setCalcInput(Math.sqrt(Number(calcInput)).toString())
        option == "+/-" && setCalcInput((Number(calcInput) * -1).toString())
        option == "1/x" && setCalcInput((1 / Number(calcInput)).toString())
        option == "MR" && setCalcInput(localStorage.getItem("memory") || "0")
        option == "MS" && localStorage.setItem("memory", calcInput)
        option == "MC" && localStorage.removeItem("memory")
        option == "M+" && setCalcInput((Number(calcInput) + Number(localStorage.getItem("memory"))).toString())
    }

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
                <input disabled value={calcInput ? calcInput : 0} className={`${currentAppearance.border} px-2 select-none text-black text-2xl border-[2px] bg-white text-right w-full`} type="text" />
                <span className="flex flex-col gap-2 px-1 h-full mt-2">
                    <span className="justify-between flex w-full h-fit items-center">
                        <span className="size-11 flex mr-2.5 ml-1.5"><div className="size-9 my-auto border-t-[3px] border-l-[3px] border-b-[2px] border-r-[2px] border-b-white border-r-white border-gray-500" /></span>
                        {topInputs.map((input) => (
                            <button key={input.output} className={`${currentAppearance.border} group font-bold cursor-default border-[2px] rounded-md bg-white text-red-900 text-xl w-[26%] h-11 flex items-center justify-center`}
                                onClick={() => Functions(input.output)}>
                                <p className="text-2xl group-hover:border-orange-300 border-[3px] border-transparent w-full h-full group-active:border-transparent">{input.output}</p>
                            </button>
                        ))}
                    </span>
                    <span className="justify-between flex flex-wrap w-full items-center mt-2">
                        {bottomInputs.map((input) => (
                            <button key={input.output} className={`${currentAppearance.border} group font-bold cursor-default border-[2px] rounded-md bg-white ${input.color ? "text-red-900" : "text-blue-900"} 
                        text-xl w-[14%] h-11 flex items-center justify-center ${input.space && "mr-2"} mb-2`}
                                onClick={() => {
                                    calcInput === "Error" ? setCalcInput(input.output)
                                    : input.output === "=" ? Functions(input.output)
                                    : outputs.includes(input.output) ? setCalcInput(calcInput + input.output) 
                                    : Functions(input.output)
                                }}>
                                <p className="text-2xl group-hover:border-orange-300 border-[3px] border-transparent group-active:border-transparent w-full h-full">{input.output}</p>
                            </button>
                        ))}
                    </span>
                </span>
            </div>
        </div>
    )
} 