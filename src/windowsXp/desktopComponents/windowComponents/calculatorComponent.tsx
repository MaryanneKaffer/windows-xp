import { useState } from "react"
import { currentAppearance } from "./desktopPropertiesComponent"
import { bottomInputs, topInputs } from "@/config/data/windowData/calculatorData"

export default function CalculatorComponent() {
    const options = ["Edit", "View", "Help"]
    const [isHoveringOpt, setisHoveringOpt] = useState(-1)
    const [calcInput, setCalcInput] = useState("")
    const [fullCalc, setFullCalc] = useState("")
    const outputs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."]

    const Functions = (option: string) => {
        if (["+", "-", "/", "*"].includes(option)) {
            setFullCalc(prev => prev + calcInput + option)
            setCalcInput("")
        }
        else if (option == "=") {
            try {
                const expression = fullCalc + calcInput;
                const result = eval(expression);
                setCalcInput(result.toString());
                setFullCalc("");
            }
            catch (e) {
                setCalcInput("Error")
            }
        }
        else if (option === "Backspace") { setCalcInput(prev => prev.slice(0, -1)) }
        else if (option === "CE") {
            setFullCalc("");
            setCalcInput("");
        }
        else if (option === "C") { setCalcInput("") }
        else if (option === "sqrt") { setCalcInput(Math.sqrt(Number(calcInput)).toString()) }
        else if (option === "+/-") { setCalcInput((Number(calcInput) * -1).toString()) }
        else if (option === "%") { setCalcInput((Number(calcInput) / 100).toString()) }
        else if (option === "1/x") { setCalcInput((1 / Number(calcInput)).toString()) }
        else if (option === "MR") { setCalcInput(localStorage.getItem("memory") || "0"); }
        else if (option === "MS") { localStorage.setItem("memory", calcInput); }
        else if (option === "MC") { localStorage.removeItem("memory"); }
        else if (option === "M+") { setCalcInput((Number(calcInput) + Number(localStorage.getItem("memory"))).toString()); }
    }

    return (
        <div className="w-full h-full flex flex-col bg-opacity-50 bg-yellow-100 ">
            <div className="h-fit w-full flex flex-col text-black text-lg">
                <span className="border-b border-[1px] border-gray-300">
                    {options.map((option, index) => (
                        <button onMouseEnter={() => setisHoveringOpt(index)} onMouseLeave={() => setisHoveringOpt(-1)} key={option}
                            className={`md:text-xl text-md ${isHoveringOpt === index && `${currentAppearance.color} text-white`} md:px-3 px-2`}>
                            {option}
                        </button>
                    ))}
                </span>
            </div>
            <div className="flex flex-col w-full h-full px-2 gap-2 mb-2">
                <input disabled value={calcInput ? calcInput : 0} type="text" className={`${currentAppearance.border} px-2 select-none text-black md:text-2xl border-[2px] bg-white text-right w-full
                text-xl`} />
                <span className="flex flex-col gap-2 px-1 h-full mt-2">
                    <span className="flex gap-1 w-full h-fit items-center">
                        <span className="md:size-11 size-8 flex md:mr-1.5 md:ml-1.5 mr-4 ml-0.5"><div className="md:size-9 size-8 my-auto border-t-[3px] border-l-[3px] border-b-[2px] border-r-[2px] border-b-white border-r-white border-gray-500" /></span>
                        {topInputs.map((input) => (
                            <button key={input.output} className={`${currentAppearance.border} group font-bold cursor-default border-[2px] rounded-md bg-white text-red-900 text-xl md:w-[26.5%] w-[75px] mdh-11 flex items-center justify-center`}
                                onClick={() => Functions(input.output)}>
                                <p className="md:text-2xl text-xl group-hover:border-orange-300 border-[3px] border-transparent w-full h-full group-active:border-transparent">{input.output}</p>
                            </button>
                        ))}
                    </span>
                    <span className="justify-between flex flex-wrap w-full items-center md:mt-2 mt-1">
                        {bottomInputs.map((input) => (
                            <button key={input.output} className={`${currentAppearance.border} group font-bold cursor-default border-[2px] rounded-md bg-white ${input.color ? "text-red-900" : "text-blue-900"} 
                        md:w-[45px] w-[40px] md:h-11 flex items-center justify-center ${input.space && "mr-1.5"} mb-2`}
                                onClick={() => {
                                    if (calcInput === "Error") {
                                        setCalcInput(input.output);
                                    } else if (outputs.includes(input.output)) {
                                        setCalcInput(prev => prev + input.output);
                                    } else {
                                        Functions(input.output);
                                    }
                                }}>
                                <p className="md:text-2xl text-xl group-hover:border-orange-300 border-[3px] border-transparent group-active:border-transparent w-full h-full">{input.output}</p>
                            </button>
                        ))}
                    </span>
                </span>
            </div>
        </div>
    )
} 