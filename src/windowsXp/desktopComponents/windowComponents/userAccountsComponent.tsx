import Image from "next/image";
import { useState } from "react";
import { currentAppearance } from "./desktopPropertiesComponent";
import { userPictures } from "@/config/data/windowData/userPictureData";

export let currentUserPicture: string = userPictures[Math.floor(Math.random() * userPictures.length)].picture;

export default function UserAccountsComponent() {
    const [selectedPicture, setSelectedPicture] = useState<{ picture: string; name: string } | null>(null);
    const Apply = () => {
        if (selectedPicture) {
            currentUserPicture = selectedPicture.picture;
            setSelectedPicture(null);
        }
    }
    const canApply = selectedPicture && selectedPicture.picture !== currentUserPicture || false;
    return (
        <>
            <div className="w-full lg:h-[6%] bg-yellow-100 flex place-items-center px-2 text-black">
                <button className="cursor-default flex place-items-center"><Image alt="Back" src="/icons/backIcon.png" width={35} height={30} className="lg:w-[35px] w-[20px] " />
                    <p className="self-center mx-2 lg:text-2xl text-xl">Back</p>
                </button>
                <button className="ml-3 cursor-default flex"><Image alt="Forward" src="/icons/forwardIcon.png" width={35} height={30} className="lg:w-[35px] w-[20px] filter grayscale"></Image></button>
                <Image alt="Home" src="/icons/userAccountsIcon.png" width={35} height={30} className="lg:w-[35px] w-[20px] ml-7" />
                <p className="self-center mx-2 lg:text-2xl text-xl">Home</p>
            </div>
            <div className="flex lg:h-[94%] h-[92%]">
                <div className={`flex h-[100%] w-[40%] ${currentAppearance.mainColor} lg:text-2xl`}>
                    <div className="flex lg:w-[400px] w-[150px] h-[100%] lg:p-5 p-2 flex flex-col gap-5 relative">
                        <div className={`w-[100%] h-[100%] opacity-70 ${currentAppearance.taskbar} absolute top-0 left-0`}></div>
                        <div className="w-[100%] lg:h-[20%] h-[30%] bg-white z-10">
                            <p className={`border-2 border-white border-b-gray-300 font-bold lg:px-5 px-3 bg-gradient-to-l ${currentAppearance.shadow1}`}>Current Picture</p>
                            <Image alt="User" src={currentUserPicture} width={90} height={90} className="lg:w-[90px] w-[45px] lg:mx-5 mx-3 my-2" draggable="false" />
                        </div>
                        <div className="w-[100%] lg:h-[11%] bg-white z-10">
                            <p className={`border-2 border-white border-b-gray-300 font-bold lg:px-5 px-3 bg-gradient-to-l ${currentAppearance.shadow1}`}>Related Tasks</p>
                            <p className="lg:px-5 lg:py-2 px-3 my-1 leading-[10px]">Change the computer theme</p>
                        </div>
                        <div className="w-[100%] lg:h-[11%] bg-white z-10">
                            <p className={`border-2 border-white border-b-gray-300 font-bold lg:px-5 px-3 bg-gradient-to-l ${currentAppearance.shadow1}`}>Learn About</p>
                            <div className="flex gap-1 w-full lg:px-5 px-3 leading-[12px] my-1 place-items-center"><Image alt="Troubleshoot" src="/icons/troubleshootIcon.png" width={30} height={30} className="lg:w-[30px] w-[20px]" /><p>Using your own picture</p></div>
                        </div>
                    </div>
                </div >
                <div className="w-[100%] h-[100%] lg:p-10 px-6 py-2">
                    <p className={`lg:text-6xl text-2xl leading-[20px] opacity-70 font-bold ${currentAppearance.mainColor}`}>Pick a new picture for your account</p>
                    <p className="lg:text-2xl text-lg leading-[15px] opacity-70 mt-3 font-bold text-black">The picture you choose will appear on the <span className={`${currentAppearance.mainColor} cursor-pointer border-b border-dashed ${currentAppearance.border} `}>Welcome screen</span>.</p>
                    <div className="overflow-y-auto h-[36.5%] w-full lg:border-3 border-2 border-black mt-5 flex flex-wrap lg:gap-[7px] lg:p-2 p-1">
                        {userPictures.map((picture, index) => (
                            <button key={picture.name} onClick={() => setSelectedPicture(userPictures[index])} className={`${picture === selectedPicture ? `${currentAppearance.border}` : "border-transparent"} lg:border-5 border-3 cursor-default`}  >
                                <Image alt={picture.name} src={picture.picture} width={100} height={100} className="lg:w-[100px] w-[50px] border-transparent lg:border-3 border-2" />
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-1 w-auto place-items-center lg:my-3 my-1"><Image alt="Browse" src="/icons/searchIcon.png" width={30} height={30} className="lg:w-[30px] w-[20px]" /><p className={`${currentAppearance.mainColor} cursor-pointer lg:text-2xl text-lg`}>Browse for more pictures</p></div>
                    <div className={`w-full lg:h-[4px] h-[2px] bg-gradient-to-l ${currentAppearance.shadow1} opacity-50`}></div>
                    <div className="flex lg:gap-6 gap-2 w-full text-black lg:text-xl lg:mt-3 mt-2">
                        <button disabled={!canApply} onClick={() => Apply()} className={`w-auto lg:px-12 px-4 ml-auto cursor-default h-[25px] whitespace-nowrap ${currentAppearance.buttonborder} border-2 rounded-sm leading-none ${!canApply ? "opacity-60" : "active:brightness-50"}`}>Change picture</button>
                        <button disabled={!canApply} onClick={() => setSelectedPicture(null)} className={`w-auto lg:px-8 px-4 cursor-default h-[25px] ${currentAppearance.buttonborder} border-2 rounded-sm leading-none ${!canApply ? "opacity-60" : "active:brightness-50"}`}>Cancel</button>
                    </div>
                </div>
            </div >
        </>
    )
}