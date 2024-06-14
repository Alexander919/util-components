import React, { Fragment } from "react";



export interface TableDataType {
    id: string;
}

export type TableConfigType<T, K> = {
    label: K;
    render: (value: T) => React.ReactNode;
    sortValue?: (value: T) => string | number;
    header?: () => React.ReactNode;
}

export type TableProps<T, K> = {
    config: TableConfigType<T, K>[];
    data: T[];
}

function Table<T extends TableDataType, K extends string>({ config, data }: TableProps<T, K>) {
    const renderedHeaders = config.map((column) => {
        return column.header ? <Fragment key={column.label}>{column.header()}</Fragment> : <th key={column.label}>{column.label}</th>
    });

    return (
        <table className={"table-auto border-spacing-2"}>
            <thead>
                <tr className={"border-b-2"}>
                    { renderedHeaders }
                </tr>
            </thead>
            <tbody>
            {
                data.map(row => {
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
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
    );
}

export default Table;