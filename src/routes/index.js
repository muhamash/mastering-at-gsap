import { createBrowserRouter } from "react-router";
import App from "../App";
import Page from "../Page";
import Agency from "../Pages/Agency";
import Home from "../Pages/Home";
import SmoothScrollPage from "../Pages/LenisGsapScroll";
import Projects from "../Pages/Projects";
import ScrollReavel from "../Pages/ScrollReavel";
import ScrollAnimation from "../Pages/scrollAnimation";

export const appRoute = createBrowserRouter( [
    {
        path: '/',
        Component: Page,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/agency',
                Component: Agency
            },
            {
                path: '/projects',
                Component: Projects
            },
            {
                path: '/scrollReveal',
                Component: ScrollReavel
            },
            {
                path: '/scrollAnimation',
                Component: ScrollAnimation
            },
            {
                path: '/lenisScroll',
                Component: SmoothScrollPage
            },
        ]
    },
    {
        path: '/basic-gsap-animations',
        Component: App
    }
] );