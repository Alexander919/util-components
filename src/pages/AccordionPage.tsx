import Accordion, {Item} from "../components/Accordion.tsx";
import Divider from "../components/Divider.tsx";
import AccordionGrider, {ItemGrider} from "../components/AccordionGrider.tsx";

const accordionItems: Item[] = [
    {
        label: "test label",
        content: "test content"
    },
    {
        label: "another accordion label",
        content: "what a nice content"
    }
];
const accordionItemsGrider: ItemGrider[] = [
    {
        id: "kjkjkk",
        label: "test label",
        content: "test content"
    },
    {
        id: "adasdf",
        label: "another accordion label",
        content: "what a nice content"
    }
];

function AccordionPage() {
    return (
        <>
            <Accordion items={accordionItems} />
            <Divider text={"accordion grider"}/>
            <AccordionGrider items={accordionItemsGrider}/>
        </>
    );
}

export default AccordionPage;