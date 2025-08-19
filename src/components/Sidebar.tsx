import Link from "./AnchorComponent/Link.tsx";

type SidebarLinkType = {
    label: string;
    path: string;
}

function Sidebar() {
    const links: SidebarLinkType[] = [
        { label: "Home", path: "/" },
        { label: "Accordion", path: "/accordion" },
        { label: "Select", path: "/select" },
        { label: "Table", path: "/table" },
        { label: "TableGrider", path: "/table-grider" },
        { label: "Counter", path: "/counter" }
    ];

    const renderedLinks = links.map(lnk => {
        return <Link key={lnk.label} to={lnk.path} activeClassName={"font-bold border-l-4 border-blue-400 px-1"}>{lnk.label}</Link>
    });

    return (
        <div className={"sticky space-y-3 top-0 overflow-y-scroll flex flex-col items-start"}>
            {renderedLinks}
        </div>
    );
}

export default Sidebar;