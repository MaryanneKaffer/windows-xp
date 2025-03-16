import Image from "next/image";
import { useState, useEffect } from "react";
import { SystemTray } from "@/config/data/systemTrayData";
import LogoIcon from "@/public/logo/logoIcon.png";

export default function TaskBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="w-full h-screen flex">
        <div className="w-full h-[48px] bg-taskBar self-end flex">
          <button
            type="button"
            className="bg-startButton active:brightness-75 h-full lg:w-[180px] w-[100px] rounded-r-2xl drop-shadow-[0px_10px_10px_rgba(0,0,0,0.9)] flex place-items-center gap-2"
          >
            <img
              src={LogoIcon.src}
              className="h-[30px] lg:ml-4 ml-[10px] drop-shadow-[2px_3px_2px_rgba(0,0,0,0.5)]"
            ></img>
            <p className="lg:block hidden font-arial font-bold italic text-3xl drop-shadow-[2px_3px_2px_rgba(0,0,0,0.5)]">
              start
            </p>
          </button>
          <div className="bg-gradient-to-t from-[rgb(21_55_128)] to-transparent w-full h-[4px] self-end"></div>
          <div className="bg-gradient-to-l from-[rgb(21_55_128)] to-transparent w-[4px] h-[48px] "></div>
          <div className="bg-systemTray lg:w-[225px] w-[150px] flex place-items-center relative">
            <div className="lg:ml-3 flex w-full gap-[3px]">
              {SystemTray.map((item, index) => (
                <div key={index}>
                  <button className="h-full size-[25px] active:brightness-75 place-items-center rounded-full cursor-default lg:block hidden">
                    <Image
                      src={item.icon}
                      className="w-[25px] h-[25px]"
                      alt={item.name || "icon"}
                    />
                  </button>
                </div>
              ))}
              <button className="self-center text-2xl active:brightness-75 mx-auto cursor-default">
                {time.toLocaleString(navigator.language, {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </button>
            </div>
            <div className="bg-gradient-to-t from-[rgb(27_93_155)] to-transparent lg:w-[18.3vh] w-[10.5vh] h-[4px] absolute bottom-0 left-0"></div>
          </div>
        </div>
      </section>
    </>
  );
}
