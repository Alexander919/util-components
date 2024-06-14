import Table, { TableConfigType, TableDataType } from '../components/Table';

type FruitLabel = "Fruit" | "Color" | "Score";

interface FruitTable extends TableDataType {
    name: string;
    color: string;
    score: number;
}

const data: FruitTable[] = [
    {name: "Orange", color: "bg-orange-500", score: 5, id: "aaa"},
    {name: "Apple", color: "bg-red-500", score: 3, id: "bbb"},
    {name: "Banana", color: "bg-yellow-500", score: 6, id: "ccc"},
    {name: "Pear", color: "bg-green-500", score: 1, id: "ddd"},
    {name: "Grape", color: "bg-purple-500", score: 2, id: "eee"},
];

const config: TableConfigType<FruitTable, FruitLabel>[] = [
    {
        label: "Fruit",
        render: (fruit) => fruit.name,
        sorter: (order) => {
            return (a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        }
    },
    {
        label: "Color",
        render: (fruit) => <div className={`p-2 m-3 ${fruit.color}`} />
    },
    {
        label: "Score",
        render: (fruit) => fruit.score,
        sorter: (order) => {
            return (a, b) => order === "asc" ? a.score - b.score : b.score - a.score;
        }
    }
];

function TablePage() {
    return (
        <Table<FruitTable, FruitLabel> config={config} data={data} />
    );
}

export default TablePage;