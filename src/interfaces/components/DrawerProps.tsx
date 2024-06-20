import SheetProps from "./SheetProps";

export default interface DrawerProps extends SheetProps {
    header?: JSX.Element,
    body?: JSX.Element,
    footer?: JSX.Element,
    drawerWidth?: number
    navMargin?: number
    /**
     * @default useThemeMaterial().zIndex.drawer
     */
    zIndex?: number;
    width: string | number | {}
    children?: JSX.Element,
};
