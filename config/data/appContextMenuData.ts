export const appMenuData = (setOpenWindows: (arg0: (prev: any) => any[]) => any, window: { name: any; icon: any; }) => [
    {
        name: "Open",
        bold: true,
        disabled: false,
        function: () =>
            setOpenWindows((prev) => [
                ...prev,
                { name: window.name, icon: window.icon }
            ]),
    },
    {
        name: "Run as...",
        divider: true
    },
    {
        name: "Scan for viruses",
    },
    {
        name: "Pin to Start menu",
        divider: true,
    },
    {
        name: "Send To",
        functionList: [],
        disabled: true,
        divider: true
    },
    {
        name: "Create Shortcut",
    },
    {
        name: "Delete",
    },
    {
        name: "Rename",
        divider: true
    },
    {
        name: "Properties",
    },
]
