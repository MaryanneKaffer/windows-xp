import Image from "next/image";
import userProfile from "@/public/user/user.png";
import { leftColumn } from "@/config/data/startMenuData";
import startMenuArrow from "@/public/icons/startMenuArrow.png";
import { rightColumn } from "@/config/data/startMenuData";
import logOffIcon from "@/public/icons/logOffIcon.png";
import turnOffIcon from "@/public/icons/turnOffIcon.png";
import { currentAppearance } from "./windowComponents/desktopPropertiesComponent";

export default function StartMenu() {
  return (
    <>
      <section className={`flex place-items-center text-3xl ${currentAppearance.light && "text-black"}`}>
        <Image src={userProfile.src} alt='User' width={100} height={100} className="lg:w-[90px] w-[90px] border-3 border-white rounded-lg bg-green-700 m-3" draggable="false" />
        <p className="drop-shadow-[2px_3px_2px_rgba(0,0,0,0.9)] font-arial font-bold italic"> user</p>
      </section>

      <section className="flex">
        <div className="bg-gradient-to-r from-transparent via-orange-400 to-transparent h-[3px] w-[550px] fixed lg:left-[-95px] left-[-130px] "></div>

        <div className="bg-white w-full lg:h-[530px] h-[480px] pt-2">
          {leftColumn.map((item, index) => (
            <div key={item.name} >
              <button className="items-center p-3 flex w-full h-[55px] lg:text-2xl text-[20px] cursor-default hover:bg-winXpBlue group">
                <Image src={item.icon} alt={item.name} width={40} height={40} className="drop-shadow-[2px_3px_2px_rgba(0,0,0,0.4)]" draggable="false" />
                <div className="flex-col text-left leading-[0.8] ml-2 ">
                  <p className={`text-gray-700 group-hover:text-white ${item.bold ? 'font-bold' : ''}`}>{item.name}</p>
                  {item.Description ? <p className="text-gray-600 group-hover:text-gray-200"> {item.Description} </p> : ''}
                </div>
              </button>
              {item.divider ? <div className="bg-divider h-[1px] w-full my-2"></div> : ''}
            </div>
          ))}

          <div className="w-full h-[121px] place-items-center flex flex-col">
            <div className="bg-divider h-[1px] w-full lg:mt-auto mt-3"></div>
            <a className="text-center w-full text-gray-700 lg:text-2xl text-[20px] font-bold m-2 flex  cursor-default hover:bg-winXpBlue hover:text-white">
              <div className="mx-auto flex place-items-center">
                <p>All Programs</p>
                <Image src={startMenuArrow} alt="All Programs" className="ml-1 lg:w-[40px] w-[30px] h-[40px] drop-shadow-[2px_3px_2px_rgba(0,0,0,0.4)]" draggable="false" />
              </div>
            </a>
          </div>
        </div >

        <div className="bg-[rgb(205_220_255)] w-full lg:h-[530px] h-[480px] border-l-[2px] border-[rgb(159_188_255)]">
          {rightColumn.map((item, index) => (
            <div key={item.name} >
              <button className="items-center flex w-full lg:h-[45px] h-[40px] cursor-default hover:bg-winXpBlue group">
                <Image src={item.icon} alt={item.name} width={35} height={35} className="lg:size-[35px] size-[32px] drop-shadow-[2px_3px_2px_rgba(0,0,0,0.4)] ml-3" draggable="false" />
                <div className="flex ml-2 place-items-center w-full">
                  <p className={`text-[rgb(33_47_85)] leading-[0.8] text-left group-hover:text-white lg:text-2xl text-[20px] ${item.bold ? "font-bold" : ""}`}>{item.name}</p>
                  {item.name === "My Recent Documents" ? <p className="text-[rgb(33_47_85)] text-xl lg:ml-auto text-end mr-3 group-hover:text-white">►</p> : ''}
                </div>
              </button>
              {item.divider ? <div className="bg-dividerBlue h-[1px] w-full my-2"></div> : ''}
            </div>
          ))}
        </div>
      </section >

      <section className={`flex place-items-center text-[22px] h-[53px] mr-5 ${currentAppearance.light && "text-black"}`}>
        <button className="active:brightness-75 flex place-items-center ml-auto cursor-default">
          <Image src={logOffIcon.src} alt='Log Off' width={35} height={35} className="border-1 border-white rounded-md m-3" draggable="false" />
          <p>Log Off</p>
        </button>
        <button className="active:brightness-75 flex place-items-center cursor-default">
          <Image src={turnOffIcon.src} alt='Turn Off' width={35} height={35} className="border-1 border-white rounded-md m-3" draggable="false" />
          <p>Turn Off Computer</p>
        </button>
      </section>
      <div className={`bg-gradient-to-t ${currentAppearance.shadow1} h-[10px] w-[550px] fixed bottom-[-4px] left-[-78px]`}></div>
    </>
  );
}