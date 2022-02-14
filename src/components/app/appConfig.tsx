import Calculator from "../views/calculator/Calculator";
import Settings from "../views/settings/Settings";
import Manual from "../views/manual/Manual";
import About from "../views/about/About";

export const routes = [
  { name: "navbar.calculator", path: "/", render: () => <Calculator /> },
  { name: "navbar.settings", path: "/settings", render: () => <Settings /> },
  { name: "navbar.manual", path: "/manual", render: () => <Manual /> },
  { name: "navbar.about", path: "/about", render: () => <About /> },
];

export const navbarProps = {
  title: `Math Explorer`,
  items: routes.map((view) => {
    return { name: view.name, path: view.path };
  }),
};
