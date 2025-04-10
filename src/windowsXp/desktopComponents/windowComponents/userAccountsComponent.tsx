import Image from "next/image";
import { currentAppearance } from "./desktopPropertiesComponent";
import { userPictures } from "@/config/data/windowData/userPictureData";

export default function UserAccountsComponent() {
    return (
        <>
            <div className="w-full h-[6%] bg-yellow-100 flex place-items-center p-2 text-black">
                <button className="cursor-default flex"><Image alt="Back" src="/icons/backIcon.png" width={35} height={30} />
                    <p className="self-center mx-2 text-2xl">Back</p>
                </button>
                <button className="ml-3 cursor-default flex"><Image alt="Forward" src="/icons/forwardIcon.png" width={35} height={30} className="filter grayscale"></Image></button>
                <Image alt="Home" src="/icons/userAccountsIcon.png" width={35} height={30} className="ml-7" />
                <p className="self-center mx-2 text-2xl">Home</p>
            </div>
            <div className="flex h-full">
                <div className={`flex h-[94%] ${currentAppearance.mainColor} text-2xl`}>
                    <div className="flex w-[400px] h-[100%] p-5 flex flex-col gap-5 relative">
                        <div className={`w-[100%] h-[100%] opacity-70 ${currentAppearance.taskbar} absolute top-0 left-0`}></div>
                        <div className="w-[100%] h-[20%] bg-white z-10">
                            <p className="border-2 border-white border-b-gray-300 font-bold px-5">Current Picture</p>
                        </div>
                        <div className="w-[100%] h-[11%] bg-white z-10">
                            <p className="border-2 border-white border-b-gray-300 font-bold px-5">Related Tasks</p>
                            <p className="px-5 my-1">Change the computer theme</p>
                        </div>
                        <div className="w-[100%] h-[11%] bg-white z-10">
                            <p className="border-2 border-white border-b-gray-300 font-bold px-5">Learn About</p>
                            <div className="flex gap-1 w-full px-5 my-1 place-items-center"><Image alt="Troubleshoot" src="/icons/troubleshootIcon.png" width={30} height={30} className="h-[30px]" /><p>Using your own picture</p></div>
                        </div>
                    </div>
                </div >
                <div className="w-[100%] h-[94%] p-8">
                    <p className={`text-4xl font-bold ${currentAppearance.mainColor}`}>Pick a new picture for your account</p>
                    <p className="text-2xl mt-3 font-bold text-black">The picture you choose will appear on the <span className={`${currentAppearance.mainColor} cursor-pointer border-b border-dashed ${currentAppearance.border} `}>Welcome screen</span>.</p>
                    <div className="overflow-y-auto h-[36.5%] w-full border-3 border-black mt-5 flex flex-wrap gap-4 p-5">
                        {userPictures.map((picture, index) => (
                            <Image key={picture.name} alt={picture.name} src={picture.picture} width={100} height={100} />
                        ))}
                    </div>
                    <div className="flex gap-1 w-auto place-items-center my-3"><Image alt="Browse" src="/icons/searchIcon.png" width={30} height={30} /><p className={`${currentAppearance.mainColor} cursor-pointer text-2xl`}>Browse for more pictures</p></div>
                    <div className={`w-full h-[4px] bg-gradient-to-l ${currentAppearance.shadow1} opacity-50`}></div>
                    <div className="flex gap-2 w-full text-black text-xl mt-3">
                        <button className={`w-auto px-6 ml-auto cursor-default h-[30px] ${currentAppearance.buttonborder} border-2 rounded-sm leading-none active:brightness-50`}>Change picture</button>
                        <button className={`w-auto px-4 cursor-default h-[30px] ${currentAppearance.buttonborder} border-2 rounded-sm leading-none active:brightness-50`}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}