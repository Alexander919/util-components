import React, {useState} from "react";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

type OrderType = "asc" | "desc";

type Sorter<T> = (a: T, b: T) => number;

export interface TableDataType {
    id: string;
}

export type TableConfigType<T, K> = {
    label: K;
    render: (value: T) => React.ReactNode;
    sorter?: (order: OrderType) => Sorter<T>
}

type TableProps<T, K> = {
    config: TableConfigType<T, K>[];
    data: T[];
}
//The difference with SortableTableGrider is the lack of ability to reset to the original unsorted state
//plus the sorter function is defined by the user, even though more complex it can be a benefit as we are not limited with just strings and numbers as sortable values
function Table<T extends TableDataType, K extends string>({ config, data }: TableProps<T, K>) {
    const [currentData, setCurrentData] = useState(data);

    const handleSortData = (sorter: Sorter<T>) => {
        console.log("handleSort");
        return () => {
            setCurrentData(prevData => [ ...prevData.sort(sorter) ]);
        }
    };

    const sortingArrows = (column: TableConfigType<T, K>) => {
        if(column.sorter) {
            return (
                <div className={"cursor-pointer"}>
                    <IoIosArrowUp onClick={handleSortData(column.sorter("desc"))} />
                    <IoIosArrowDown onClick={handleSortData(column.sorter("asc"))}/>
                </div>
            );
        }
    };

    return (
        <table className={"table-auto border-spacing-2"}>
            <thead>
                <tr className={"border-b-2"}>
                    {
                        config.map((col, i) =>
                            <th key={i} className={""}>
                                <div className={"flex items-center space-x-2"}>
                                    { sortingArrows(col) }
                                    <div>{ col.label }</div>
                                </div>
                            </th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
            {
                currentData.map(row => {
                    return (
                        <tr className={"border-b"} key={row.id}>
                            {
                                config.map((col, i) => {
                                    return (
                                        <td key={i} className={"p-3"}>
                                            { col.render(row) }
                                        </td>
                                    );
                                })
                            }
                            {/*<td className={"p-3"}>{data.name}</td>*/}
                            {/*<td className={"p-3"}><div className={`p-3 m-3 ${data.color}`} /></td>*/}
                            {/*<td className={"p-3"}>{data.score}</td>*/}
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
    );
}

export default Table;