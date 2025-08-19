import Route from "../components/AnchorComponent/Route.tsx";
import AccordionPage from "./AccordionPage.tsx";
import SelectPage from "./SelectPage.tsx";
import Sidebar from "../components/Sidebar.tsx";
import TablePage from "./TablePage.tsx";
import TableGriderPage from "./TableGriderPage.tsx";
import NavigationProvider from "../components/AnchorComponent/context/navigation.tsx";
import CounterPage from "./CounterPage.tsx";

//Sidebar is basically an array of Link components
//Link component, when clicked, changes pushState(path) and updates the state inside the context(trigger this page re-render)
//Route component return its children or undefined
function NavigationPage() {
    return (
        <NavigationProvider>
            <div className={"container mx-auto grid grid-cols-6 gap-4 mt-4"}>
                <Sidebar/>
                <div className={"col-span-5"}>
                    <Route path={"/accordion"}>
                        <AccordionPage/>
                    </Route>
                    <Route path={"/select"}>
                        <SelectPage/>
                    </Route>
                    <Route path={"/table"}>
                        <TablePage/>
                    </Route>
                    <Route path={"/table-grider"}>
                        <TableGriderPage/>
                    </Route>
                    <Route path={"/counter"}>
                        <CounterPage />
                    </Route>
                </div>
            </div>
        </NavigationProvider>

    );
}

export default NavigationPage;