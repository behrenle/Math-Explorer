import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        app: {
            backgroundColor: string,
            backgroundImage: string
        },
        navbar: {
            backgroundColor: string,
            color: string
        },
        navbarItem: {
            hoverBackgroundColor: string
        },
        card: {
            backgroundColor: string,
            color: string
        },
        cardHeading: {
            backgroundColor: string
        },
        sidebar: {
            backgroundColor: string,
            color: string
        },
        sidebarItem: {
            hoverBackgroundColor: string
        },
        inputText: {
            backgroundColor: string,
            outline: string,
            color: string
        },
        fontSize: {
            l: string,
            m: string,
            s: string
        },
        icon: {
            filter: string,
            borderColor: string
        },
        documentCell: {
            borderSelectedColor: string,
            borderColor: string,
        },
        navbarHeight: string,
        showBackgroundImage: boolean,
    }
}