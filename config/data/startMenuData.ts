import internetExplorerIcon from "@/public/icons/internetExplorerIcon.png";
import outlookExpressIcon from "@/public/icons/outlookExpressIcon.png"
import msnExplorerIcon from "@/public/icons/msnExplorerIcon.png"
import mediaPlayerIcon from "@/public/icons/mediaPlayerIcon.png"
import movieMakerIcon from "@/public/icons/movieMakerIcon.png"
import tourWinXpIcon from "@/public/icons/tourWinXpIcon.png"
import filesSettingsTransferIcon from "@/public/icons/filesSettingsTransferIcon.png"
import myDocumentsIcon from "@/public/icons/myDocumentsIcon.png"
import myPicturesIcon from "@/public/icons/myPicturesIcon.png"
import myMusicIcon from "@/public/icons/myMusicIcon.png"
import myComputerIcon from "@/public/icons/myComputerIcon.png"
import recentDocumentsIcon from "@/public/icons/recentDocumentsIcon.png"
import controlPanelIcon from "@/public/icons/controlPanelIcon.png"
import printersFaxesIcon from "@/public/icons/printersFaxesIcon.png"
import supportIcon from "@/public/icons/supportIcon.png"
import searchIcon from "@/public/icons/searchIcon.png"
import runIcon from "@/public/icons/runIcon.png"

export const leftColumn = [
    {
        name: "Internet",
        Description: "Internet Explorer",
        icon: internetExplorerIcon,
        bold: true,
    },
    {
        name: "E-mail",
        Description: "Outlook Express",
        icon: outlookExpressIcon,
        bold: true,
    },
    {
        name: "MSN Explorer",
        icon: msnExplorerIcon,
    },
    {
        name: "Windows Media Player",
        icon: mediaPlayerIcon,
    },
    {
        name: "Windows Movie Maker",
        icon: movieMakerIcon,
        divider: true,
    },
    {
        name: "Tour Windows XP",
        icon: tourWinXpIcon,
    },
    {
        name: "Files and Settings Transfer Wizard",
        icon: filesSettingsTransferIcon,
    },
];

export const rightColumn = [
    {
        name: "My Documents",
        icon: myDocumentsIcon,
        bold: true,
    },
    {
        name: "My Recent Documents",
        icon: recentDocumentsIcon,
        bold: true,
    },
    {
        name: "My Pictures",
        icon: myPicturesIcon,
        bold: true,
    },
    {
        name: "My Music",
        icon: myMusicIcon,
        bold: true,
    },
    {
        name: "My Computer",
        icon: myComputerIcon,
        divider: true,
        bold: true,
    },
    {
        name: "Control Panel",
        icon: controlPanelIcon,
    },
    {
        name: "Printers and Faxes",
        icon: printersFaxesIcon,
        divider: true,
    },
    {
        name: "Help and Support",
        icon: supportIcon,
    },
    {
        name: "Search",
        icon: searchIcon,
    },
    {
        name: "Run...",
        icon: runIcon,
    },
];
