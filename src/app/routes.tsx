import { Main, Personal, NotFound } from "../pages";
import { MAIN, PERSONAL_ACCOUNT, NOT_FOUND } from "../shared/lib/utils/consts";

type Route = {
    path: string;
    Component: JSX.ElementType;
}

export const publicRoutes: Route[] = [
    {
        path: MAIN,
        Component: Main
    },
    {
        path: NOT_FOUND,
        Component: NotFound
    }
];

export const authRoutes: Route[] = [
    {
        path: PERSONAL_ACCOUNT,
        Component: Personal
    },
]