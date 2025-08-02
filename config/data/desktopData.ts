import recycleBinIcon from "@/public/icons/recycleBinIcon.png";
import folderClosedIcon from "@/public//icons/folderClosedIcon.png";
import notepadIcon from "@/public/icons/notepadIcon.png";
import githubIcon from "@/public/logo/githubIcon.svg";
import calculatorIcon from "@/public/icons/calculatorIcon.png";
import internetExplorerIcon from "@/public/icons/internetExplorerIcon.png";

export const desktopData = [
    {
        name: "Recycle Bin",
        icon: recycleBinIcon,
        type: "recycleBin",
        fixedSize: false,
        width: "w-[50vw]",
        height: "h-[600px]",
        mobileWidth: "w-[90vw]",
        mobileHeight: "h-[400px]",
    },
    {
        name: "New Folder(2)",
        icon: folderClosedIcon,
        type: "folder",
        fixedSize: false,
        width: "w-[60vw]",
        height: "h-[700px]",
        mobileWidth: "w-[90vw]",
        mobileHeight: "h-fit",
    },
    {
        name: "New Folder",
        icon: folderClosedIcon,
        type: "folder",
        fixedSize: false,
        width: "w-[60vw]",
        height: "h-[700px]",
        mobileWidth: "w-[90vw]",
        mobileHeight: "h-fit",
    },
    {
        name: "Notepad",
        type: "notepad",
        icon: notepadIcon,
        fixedSize: false,
        width: "w-[20vw]",
        height: "h-[50vh]",
        mobileWidth: "w-[85vw]",
        mobileHeight: "h-fit",
    },
    {
        name: "Calculator",
        type: "calculator",
        icon: calculatorIcon,
        fixedSize: false,
        width: "w-[348px]",
        height: "w-[42vh]",
        mobileWidth: "w-[85vw]",
        mobileHeight: "h-fit",
    },
    {
        name: "Internet Explorer",
        type: "Internet",
        icon: internetExplorerIcon,
        fixedSize: false,
        width: "w-[1000px]",
        height: "h-[700px]",
        mobileWidth: "w-[85vw]",
        mobileHeight: "h-fit",
    },
    {
        name: "GitHub",
        icon: githubIcon,
        type: "link",
        link: "https://github.com/MaryanneKaffer",
    },
]
