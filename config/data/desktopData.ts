import recycleBinIcon from "@/public/icons/recycleBinIcon.png";
import folderClosedIcon from "@/public//icons/folderClosedIcon.png";
import notepadIcon from "@/public/icons/notepadIcon.png";
import githubIcon from "@/public/logo/githubIcon.svg";
import calculatorIcon from "@/public/icons/calculatorIcon.png";

export const desktopData = [
    {
        name: "Recycle Bin",
        icon: recycleBinIcon,
        type: "recycleBin",
        fixedSize: false,
        width: "50vw",
        height: "600px",
        mobileWidth: "80vw",
        mobileHeight: "60vh",
    },
    {
        name: "New Folder(2)",
        icon: folderClosedIcon,
        type: "folder",
        fixedSize: false,
        width: "60vw",
        height: "700px",
        mobileWidth: "90vw",
        mobileHeight: "60vh",
    },
    {
        name: "New Folder",
        icon: folderClosedIcon,
        type: "folder",
        fixedSize: false,
        width: "60vw",
        height: "700px",
        mobileWidth: "90vw",
        mobileHeight: "60vh",
    },
    {
        name: "Notepad",
        type: "notepad",
        icon: notepadIcon,
        fixedSize: false,
        width: "20vw",
        height: "50vh",
    },
    {
        name: "Calculator",
        type: "calculator",
        icon: calculatorIcon,
        fixedSize: false,
        width: "19vw",
        height: "42vh",
    },
    {
        name: "GitHub",
        icon: githubIcon,
        type: "link",
        link: "https://github.com/MaryanneKaffer",
    },
]
