import Image from "next/image";
import { useState } from "react";
import { currentAppearance } from "./desktopPropertiesComponent";
import { userPictures } from "@/config/data/windowData/userPictureData";
import { FaAngleDoubleUp } from "react-icons/fa";

export let currentUserPicture: string = userPictures[Math.floor(Math.random() * userPictures.length)].picture;

export default function UserAccountsComponent() {
    const [selectedPicture, setSelectedPicture] = useState<{ picture: string; name: string } | null>()
    const details = [
        { name: "Current Picture", content: <img src={currentUserPicture} className="md:size-32 size-12" /> },
        { name: "Related Tasks", content: "Change the computer theme" },
        { name: "Learn About", content: <span className="flex items-center gap-1"><img src="/icons/troubleshootIcon.png" className="md:size-6 size-4" />Using your own picture</span> }
    ]
    const Apply = () => {
        if (selectedPicture) {
            currentUserPicture = selectedPicture.picture;
            setSelectedPicture(null);
        }
    }
    const canApply = selectedPicture && selectedPicture.picture !== currentUserPicture || false;
    return (
        <section className="w-full h-full">
            <div className="w-full lg:h-[6%] bg-yellow-100 bg-opacity-75 flex place-items-center px-2 text-black">
                <button className="cursor-default flex place-items-center"><img alt="Back" src="/icons/backIcon.png" className="lg:w-[25px] w-[20px] " />
                    <p className="self-center mx-2 text-xl">Back</p>
                </button>
                <button className="ml-3 cursor-default flex"><img alt="Forward" src="/icons/forwardIcon.png" className="lg:w-[25px] w-[20px] filter grayscale" /></button>
                <img alt="Home" src="/icons/userAccountsIcon.png" className="lg:w-[25px] w-[20px] ml-3" />
                <p className="self-center mx-2 text-xl">Home</p>
            </div>
            <div className="flex w-full h-full">
                <div className="flex h-full">
                    <div className={`h-full md:w-[25rem] w-[9rem] ${currentAppearance.color} flex flex-col bg-opacity-80 md:p-4 p-3 md:gap-4 gap-3`}>
                        {details.map((item) => (
                            <div key={item.name} className={`flex flex-col ${currentAppearance.mainColor}`}>
                                <span className="bg-gradient-to-r font-bold flex items-center justify-between from-white via-white to-transparent md:text-2xl text-md leading-[0.7] md:px-2 px-1 rounded-t-sm md:border-[2px] border-[1px] border-gray-300">
                                    {item.name}
                                    <FaAngleDoubleUp className={`md:size-[18px] size-4 bg-white active:brightness-75 rounded-full border-[1px] border-gray-300 shadow-black shadow-lg ${currentAppearance.color}`} />
                                </span>
                                <span className="bg-white bg-opacity-70 flex flex-col md:p-2 px-2 py-1 border-[2px] border-gray-300">
                                    <button key={item.name} className="flex items-center gap-2 relative active:brightness-75 cursor-default md:ml-3 md:text-xl text-sm text-left leading-[0.8]">
                                        {item.content}
                                    </button>
                                </span>
                            </div>
                        ))}
                    </div>
                </div >
                <div className="md:w-full w-fit lg:p-10 px-4 py-2">
                    <p className={`lg:text-6xl text-2xl leading-[20px] opacity-70 font-bold ${currentAppearance.mainColor}`}>Pick a new picture for your account</p>
                    <p className="lg:text-2xl text-lg leading-[15px] opacity-70 mt-3 font-bold text-black">The picture you choose will appear on the <span className={`${currentAppearance.mainColor} cursor-pointer border-b border-dashed ${currentAppearance.border} `}>Welcome screen</span>.</p>
                    <div className="overflow-y-auto h-[36.5%] w-full lg:border-3 border-2 mt-5 md:flex md:flex-wrap grid grid-cols-3 lg:gap-[7px] lg:p-2 p-1">
                        {userPictures.map((picture, index) => (
                            <button key={picture.name} onClick={() => setSelectedPicture(userPictures[index])} className={`${picture === selectedPicture ? `${currentAppearance.border}` : "border-transparent"} lg:border-5 border-3 cursor-default`}  >
                                <Image alt={picture.name} src={picture.picture} width={100} height={100} className="lg:w-[100px] w-[45px] border-transparent lg:border-3 border-2" />
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-1 w-auto place-items-center lg:my-3 my-1"><Image alt="Browse" src="/icons/searchIcon.png" width={30} height={30} className="lg:w-[30px] w-[20px]" /><p className={`${currentAppearance.mainColor} cursor-pointer lg:text-2xl text-lg`}>Browse for more pictures</p></div>
                    <div className={`w-full lg:h-[4px] h-[2px] bg-gradient-to-l ${currentAppearance.shadow1} opacity-50`}></div>
                    <div className="flex lg:gap-6 gap-2 w-full text-black lg:text-xl lg:mt-3 mt-2">
                        <button disabled={!canApply} onClick={() => Apply()} className={`w-auto lg:px-12 px-2 ml-auto cursor-default h-[25px] whitespace-nowrap ${currentAppearance.buttonborder} border-2 rounded-sm leading-none ${!canApply ? "opacity-60" : "active:brightness-50"}`}>Change picture</button>
                        <button disabled={!canApply} onClick={() => setSelectedPicture(null)} className={`w-auto lg:px-8 px-4 cursor-default h-[25px] ${currentAppearance.buttonborder} border-2 rounded-sm leading-none ${!canApply ? "opacity-60" : "active:brightness-50"}`}>Cancel</button>
                    </div>
                </div>
            </div>
        </section>
    )
}