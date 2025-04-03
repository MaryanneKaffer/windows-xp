import Image from "next/image";
import monitor from "@/public/desktopImage/monitor.png";
import { ScreenSavers } from "@/config/data/windowData/displayPropertiesData/screenSaversData";
import { currentAppearance } from "../desktopPropertiesComponent";

interface ScreenDisplayComponentProps {
    selectedScreenSaver: string;
    setSelectedScreenSaver: (value: string) => void;
    currentScreenSaver: string;
}

export default function ScreenSaver({ selectedScreenSaver, setSelectedScreenSaver, currentScreenSaver }: ScreenDisplayComponentProps) {
    return (
        <div className="w-full lg:h-[85%] h-[305px]  border-gray-400 border-[2px] rounded-sm  rounded-t-none text-black px-4 relative">
            <video autoPlay src={selectedScreenSaver ? selectedScreenSaver : currentScreenSaver} draggable={false} className="pointer-events-none lg:w-[162px] lg:h-[120px] w-[123px] h-[88px] object-cover absolute lg:top-7 top-[21px] right-[28.8%] lg:left-[156px]" />
            <Image src={monitor.src} alt="Monitor" width={200} height={190} draggable={false} className="mt-1 lg:w-[200px] lg:h-[190px] w-[150px] justify-self-center " />
            <div className="relative border-2 border-gray-300 rounded-md px-3 py-1">
                <p className={`absolute h-[20px] -top-[15px] bg-white`}>Screen Saver</p>
                <div className="flex gap-2 place-items-center">
                    <select value={ScreenSavers.find(Screen => Screen.screenSaver === selectedScreenSaver)?.name} onChange={(e) => setSelectedScreenSaver(ScreenSavers.find(Screen => Screen.name === e.target.value)?.screenSaver || selectedScreenSaver)} className="cursor-default w-[50%] bg-white h-[25px]">
                        {ScreenSavers.map((screen, index) => (
                            <option disabled={screen.disabled} key={index}>{screen.name}</option>
                        ))}
                    </select>
                    <button className={`cursor-default lg:w-[22.5%] w-[50px] h-[28px] ${currentAppearance.buttonborder} active:brightness-50 border-2 rounded-sm my-2 text-md`}>Settings</button>
                    <button className={`cursor-default lg:w-[22.5%] w-[50px] h-[28px] ${currentAppearance.buttonborder} active:brightness-50 border-2 rounded-sm my-2 text-md`}>Preview</button>
                </div>
                <div className="flex gap-2 place-items-center">
                    <p>Wait:</p>
                    <input type="number" defaultValue="10" className="bg-transparent cursor-text w-[15%] lg:h-[25px] h-[20px] text-center text-end border-2 border-gray-400" />
                    <p>minutes</p>
                    <input type="checkbox" className="cursor-default" /><p className="-ml-1 leading-[10px]">On resume, password protect</p>
                </div>
            </div>
            <div className="mt-4 relative border-2 border-gray-300 rounded-md px-3 pt-1 flex lg:flex-col">
                <p className={`absolute h-[20px] -top-[15px] bg-white`}>Screen Saver</p>
                <p className="lg:ml-auto lg:w-[280px] leading-[15px] lg:mt-2 mt-1 ">To adjust power settings and save energy, click power</p>
                <button className={`cursor-default lg:w-[22.5%] w-[50px] h-[28px] ml-auto ${currentAppearance.buttonborder} active:brightness-50 border-2 rounded-sm my-2 text-md`}>Power</button>
            </div>
        </div >
    )
}