import recycleBinIcon from "@/public/icons/recycleBinIcon.png";
import folderClosedIcon from "@/public//icons/folderClosedIcon.png";
import notepadIcon from "@/public/icons/notepadIcon.png";
import githubIcon from "@/public/logo/githubIcon.svg";

export const desktopData = [
    {
        name: "Recycle Bin",
        icon: recycleBinIcon,
        type: "recycleBin",
        fixedSize: false,
        width: "50vw",
        height: "600px",
    },
    {
        name: "Curriculum",
        icon: folderClosedIcon,
        type: "curriculum",
        fixedSize: false,
        width: "60vw",
        height: "94.8vh",
        mobileWidth: "60vw",
        mobileHeight: "94.8vh",
    },
    {
        name: "Certificates",
        icon: folderClosedIcon,
        type: "folder",
        fixedSize: false,
        width: "50vw",
        height: "600px",
    },
    {
        name: "GitHub",
        icon: githubIcon,
        type: "link",
        link: "https://github.com/MaryanneKaffer",
        fixedSize: false,
        width: "50vw",
        height: "600px",
    },
    {
        name: "Notepad",
        type: "notepad",
        icon: notepadIcon,
        fixedSize: false,
        width: "20vw",
        height: "50vh",
    },
]
