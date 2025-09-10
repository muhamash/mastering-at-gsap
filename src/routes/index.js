import { createBrowserRouter } from "react-router";
import App from "../App";
import Page from "../Page";

export const appRoute = createBrowserRouter([
    {
        path:'/',
        Component: Page
    },
    {
        path:'/basic-gsap-animations',
        Component: App
    }
])