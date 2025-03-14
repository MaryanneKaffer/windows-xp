import winXpLogo from "./assets/winXpLogo.jpg";

export default function Loading() {
    return (
        <section className="min-h-screen grid place-items-center grid-rows-[1fr_auto]">
            <div className="flex flex-col">
                <img src={winXpLogo.src} alt="Windows XP Logo" className="justify-self-center self-center w-[450px] mb-10" />
                <div className="border-gray border-3 rounded-lg p-[2px] w-60 justify-self-center self-center">
                    <div className="h-5 w-3 bg-gradient-to-r from-blue-900 via-white to-blue-900 rounded-sm">
                    </div>
                </div>
            </div>
            <p className="text-md mx-2 self-end justify-self-start">Copyright © Microsoft Corporation</p>
        </section>
    )
}   