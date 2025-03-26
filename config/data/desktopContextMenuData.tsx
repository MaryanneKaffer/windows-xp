
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
            { name: "Display Properties", icon: null, fixedSize: true, width: "500px", height: "530px", mobileWidth: "80dvw", mobileHeight: "63dvh" }
        ]),
    },
]
