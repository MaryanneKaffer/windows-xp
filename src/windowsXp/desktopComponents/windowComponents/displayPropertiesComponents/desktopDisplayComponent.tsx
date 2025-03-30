import Image from "next/image";
import monitor from "@/public/desktopImage/monitor.png";
import { Wallpapers } from "@/config/data/windowData/displayPropertiesData/wallpapersData";
import jpgIcon from "@/public/icons/jpgIcon.png";
import { currentAppearance } from "../desktopPropertiesComponent";

interface DesktopDisplayComponentProps {
    selectedWallpaper: string;
    setSelectedWallpaper: (wallpaper: string) => void;
    currentWallpaper: string;
}
export default function DesktopDisplayComponent({ selectedWallpaper, setSelectedWallpaper, currentWallpaper }: DesktopDisplayComponentProps) {
    return (
        <div className="w-full lg:h-[85%] h-[305px]  border-gray-400 border-[2px] rounded-sm  rounded-t-none text-black px-4 relative">
            <Image src={monitor.src} alt="Monitor" width={200} height={190} draggable={false} className="mt-1 lg:w-[200px] lg:h-[190px] w-[150px] justify-self-center " />
            <p className="">Background:</p>
            <div className="flex gap-2">
                <div className="border-2 border-gray-400 lg:h-[125px] w-[75%] h-[75px] flex flex-col px-1 overflow-y-scroll touch-auto" style={{ WebkitOverflowScrolling: "touch" }}>
                    {Wallpapers.map((wallpaper, index) => (
                        <div key={index} className="h-5 ">
                            <Image src={selectedWallpaper ? selectedWallpaper : currentWallpaper} alt={wallpaper.name} width={162} height={120} draggable={false} className="lg:w-[162px] lg:h-[120px] w-[123px] h-[88px] object-cover absolute lg:top-7 top-[21px] right-[28.8%] lg:left-[156px]" />
                            <button onClick={() => setSelectedWallpaper(wallpaper.wallpaper)} className="place-items-center flex cursor-default">
                                <Image src={jpgIcon.src} alt="JPG" width={18} height={20} draggable={false} className="object-contain" />
                                <p className={` ${wallpaper.wallpaper === selectedWallpaper ? "bg-winXpBlue text-white" : "text-black"} px-1`}>{wallpaper.name}</p>
                            </button>
                        </div>
                    ))}
                    <button className={`cursor-default w-auto h-[28px] ${currentAppearance.buttonborder} active:brightness-50 border-2 rounded-sm  my-2 leading-none px-4 lg:hidden absolute bottom-[6px] left-6`}>Customize Desktop...</button>
                </div>
                <div className="grid gap-0 ml-auto ">
                    <button className={`cursor-default w-[90px] h-[28px] ${currentAppearance.buttonborder} active:brightness-50 border-2 rounded-sm leading-none px-4`}>Browse...</button>
                    <span className="leading-[18px]">
                        <p>Position:</p>
                        <select disabled className="bg-transparent border-1 border-gray-400 w-[90px] h-[28px]">
                            <option>Stretch</option>
                        </select>
                        <p>Color:</p>
                        <select disabled className="bg-transparent border-1 border-gray-400 w-[90px] h-[28px]">
                            <option>Blue</option>
                        </select>
                    </span>
                </div>
            </div>
            <button className={`cursor-default w-auto h-[28px] ${currentAppearance.buttonborder} active:brightness-50 border-2 rounded-sm my-2 leading-none px-4 lg:block hidden`}>Customize Desktop...</button>
        </div>
    )
}
