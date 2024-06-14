import TableGrider, {TableConfigType, TableDataType, TableProps} from "./TableGrider.tsx";
import {useState} from "react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

type Nullable<T> = {
    [K in keyof T]: T[K]
} | null

type OrderType = "asc" | "desc"

function SortableTable<T extends TableDataType, K extends string>({ config, data }: TableProps<T, K>) {
    const [sortOrder, setSortOrder] = useState<Nullable<OrderType>>(null);
    const [sortBy, setSortBy] = useState<Nullable<K>>(null);

    const handleClick = (label: K) => {
        setSortBy(label);

        if(label !== sortBy) {
            setSortOrder("asc");
            return;
        }

        if(sortOrder === null) {
            setSortOrder("asc");
        } else if(sortOrder === "asc") {
            setSortOrder("desc");
        } else if(sortOrder === "desc") {
            setSortOrder(null);
            setSortBy(null);
        }
    };

    const updatedConfig: TableConfigType<T, K>[] = config.map(col => {
        if(!col.sortValue) {
            return col;
        }
        return { //header is added if the sortValue function is present
            ...col,
            header: () =>
                <th className={"cursor-pointer hover:bg-gray-100"} onClick={() => handleClick(col.label)}>
                    <div className={"flex items-center"}>
                        {getIcons<Nullable<K>, Nullable<OrderType>>(col.label, sortBy, sortOrder)}
                        {col.label}
                    </div>
                </th>
        }
    });

    let sortedData = data;

    if(sortOrder && sortBy) { //sortValue function must be present if these two properties are not null; they are set in the handleClick event listener which is applied to the elements which have sortValue method
        const { sortValue } = updatedConfig.find(col => col.label === sortBy)!;
        if(sortValue)
            sortedData = [...data].sort((a, b) => {
                const valA = sortValue(a);
                const valB = sortValue(b);

                const revOrder = sortOrder === "asc" ? 1 : -1;

                if(typeof valA === "string" && typeof valB === "string") {
                    return valA.localeCompare(valB) * revOrder;
                } else if(typeof valA === "number" && typeof valB === "number") {
                    return (valA - valB) * revOrder;
                } else {
                    return 0;
                }
            });
    }
    return (
        <>
            <TableGrider<T, K> config={updatedConfig} data={sortedData} />
        </>
    );
}

function getIcons<T, U>(label: T, sortBy: T, sortOrder: U) {
    if(label !== sortBy) {
        return (
            <div>
                <IoIosArrowUp />
                <IoIosArrowDown />
            </div>
        );
    }

    if(sortOrder === null) {
        return (
            <div>
                <IoIosArrowUp/>
                <IoIosArrowDown/>
            </div>
        );
    } else if (sortOrder === "asc") {
        return (
            <div>
                <IoIosArrowUp/>
            </div>
        );
    } else if (sortOrder === "desc") {
        return (
            <div>
                <IoIosArrowDown/>
            </div>
        );
    }
}

export default SortableTable;