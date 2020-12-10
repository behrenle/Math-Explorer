import Calculator from "../views/calculator/Calculator";
import Settings from "../views/settings/Settings";
import Manual from "../views/manual/Manual";
import About from "../views/about/About";

export const routes = [
    {name: "navbar.calculator", path: "/", component: Calculator},
    {name: "navbar.settings", path: "/settings", component: Settings},
    {name: "navbar.manual", path: "/manual", component: Manual},
    {name: "navbar.about", path: "/about", component: About}
];

export const navbarProps = {
    title: `Math Explorer`,
    items: routes.map(view => {
        return {name: view.name, path: view.path}
    })
};