import {ExactlyOneSize} from "../types/types.ts";
// import {createContext, useContext} from "react";
// import { Project, ProjectsContextType } from "../components/types/project_types.ts";
// import {DbResponse } from "@shared/index.ts";

type size = boolean | undefined;

export function getSize(sm: size, md: size, lg: size, xl: size): ExactlyOneSize {
    const size = sm ? 'sm' : md ? 'md' : lg ? 'lg' : xl ? 'xl': undefined;
    switch(size) {
        case "sm":
            return { sm: true };
        case "md":
            return { md: true };
        case "lg":
            return { lg: true };
        case "xl":
            return { xl: true };
        default:
            throw new Error(`Unhandled size ${size}`);
    }
}

// export function toProject(response: DbResponse) {
//     let data: Project[] = [];
//     if(response.result === "success") {
//         const rd = response.data;
//         if(Array.isArray(rd)) {
//             data = rd.map(pr => new Project(pr));
//         } else if(rd) {
//             data = [new Project(rd)];
//         }
//     }
//     return data;
// }
//
// //PROJECTS CONTEXT
// export const ProjectsContext = createContext({} as ProjectsContextType);
//
// export const useProjectsContext = () => useContext(ProjectsContext);