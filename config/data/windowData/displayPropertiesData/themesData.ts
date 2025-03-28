import WindowsXp from "@/public/themes/windowsXp.png"
import Zune from "@/public/themes/zune.png"

export const Themes = [
    {
        name: "Windows XP",
        taskbar: 'bg-winXpTaskBar',
        startbutton: 'bg-winXpStartButton',
        window: 'bg-winXpWindow',
        systemtray: 'bg-winXpSystemTray',
        border: "border-[#245DDA]",
        startmenu: 'bg-winXpStartmenu',
        sample: WindowsXp.src,
        shadow1: 'from-[rgb(21_55_128)] to-transparent',
        shadow2: 'from-[rgb(108_189_255)] to-transparent',
    },
    {
        name: "Zune",
        taskbar: 'bg-zuneTaskBar',
        startbutton: 'bg-zuneStartButton',
        systemtray: 'bg-zuneSystemTray',
        window: 'bg-zuneWindow',
        border: "border-black",
        startmenu: 'bg-zuneStartmenu',
        sample: Zune.src,
        shadow1: 'from-[#1c1c1c] to-transparent',
        shadow2: 'from-[#2e2e2e] to-transparent',
    },
    {
        name: "Lollypop",
        taskbar: 'bg-lollypopTaskBar',
        startbutton: 'bg-lollypopStartButton',
        systemtray: 'bg-lollypopSystemTray',
        window: 'bg-lollypopWindow',
        border: "border-[rgb(243_114_255)]",
        startmenu: 'bg-lollypopStartmenu',
        sample: Zune.src,
        shadow1: 'from-[rgb(151_71_156)] to-transparent',
        shadow2: 'from-[rgb(252_220_255)] to-transparent',
    },
    {
        name: "More Themes Online...",
        disabled: true,
    },
    {
        name: "Browse",
        disabled: true,
    }
]