
export const desktopMenuData = (setOpenWindows: (arg0: (prev: any) => any) => void) => [
    {
        name: "View",
        functionList: [{ name: "Thumbnails" }, { name: "Tiles" }, { name: "● Icons" }, { name: "List" }, { name: "Details" }],
        bold: false,
    },
    {
        name: "Sort By",
    },
    {
        name: "Refresh Icons",
        divider: true
    },
    {
        name: "Paste Here",
        divider: true,
        disabled: true
    },
    {
        name: "New",
        divider: true
    },
    {
        name: "Properties",
        function: () => setOpenWindows((prev) => [
            ...prev,
            { name: "Display Properties", icon: "", type: "displayProperties", fixedSize: true, width: "w-[500px]", height: "w-[530px]", mobileWidth: "w-[80dvw]", mobileHeight: "w-[61dvh]" }
        ]),
    },
]
