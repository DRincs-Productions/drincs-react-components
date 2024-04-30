import { useTheme as useThemeJoy } from "@mui/joy";
import { extendTheme as extendThemeJoy, CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import { SupportedColorScheme } from "@mui/joy/styles/types";
import {
    Experimental_CssVarsProvider as MaterialCssVarsProvider,
    experimental_extendTheme as materialExtendTheme,
    useTheme as materialUseTheme
} from '@mui/material/styles';
import ShadeGenerator from "shade-generator";

type Mode = 'light' | 'dark' | 'system';
interface CssVarsProviderConfig<ColorScheme extends string> {
    /**
     * DOM attribute for applying color scheme
     * @default 'data-color-scheme'
     */
    attribute?: string;
    /**
     * localStorage key used to store application `mode`
     * @default 'mode'
     */
    modeStorageKey?: string;
    /**
     * localStorage key used to store `colorScheme`
     * @default 'color-scheme'
     */
    colorSchemeStorageKey?: string;
    /**
     * Design system default color scheme.
     * - provides string if the design system has one default color scheme (either light or dark)
     * - provides object if the design system has default light & dark color schemes
     */
    defaultColorScheme?: ColorScheme | { light: ColorScheme; dark: ColorScheme };
    /**
     * Design system default mode
     * @default 'light'
     */
    defaultMode?: Mode;
    /**
     * Disable CSS transitions when switching between modes or color schemes
     * @default false
     */
    disableTransitionOnChange?: boolean;
}

interface CssVarsProviderProps extends CssVarsProviderConfig<SupportedColorScheme> {
    children: React.ReactNode,
    themeMaterial?: {
        cssVarPrefix?: string | undefined;
        colorSchemes: Record<SupportedColorScheme, Record<string, any>>;
    } | {
        $$material: {
            cssVarPrefix?: string | undefined;
            colorSchemes: Record<SupportedColorScheme, Record<string, any>>;
        };
    } | undefined;
    themeJoy?: {
        cssVarPrefix?: string | undefined;
        colorSchemes: Record<SupportedColorScheme, Record<string, any>>;
    } | {
        $$joy: {
            cssVarPrefix?: string | undefined;
            colorSchemes: Record<SupportedColorScheme, Record<string, any>>;
        };
    } | undefined;
}

export default function CssVarsProvider(props: CssVarsProviderProps) {
    const {
        children,
        themeMaterial,
        themeJoy,
    } = props;
    return (
        <MaterialCssVarsProvider
            defaultMode="light"
            theme={themeMaterial}
        >
            <JoyCssVarsProvider
                defaultMode="light"
                theme={themeJoy}
            >
                {children}
            </JoyCssVarsProvider>
        </MaterialCssVarsProvider>
    );
}

export const extendTheme = extendThemeJoy
export const extendThemeMaterial = materialExtendTheme
export const useTheme = useThemeJoy
export const useThemeMaterial = materialUseTheme

/**
 * Get 10 shades of a color based on the color you pass in.
 * @param color 
 * @example
 * If you pass in a color of '#03a9f4', you will get the following shades:
 * {
 *     "50": "#e1f5fe",
 *     "100": "#b3e5fc",
 *     "200": "#81d4fa",
 *     "300": "#4fc3f7",
 *     "400": "#29b6f6",
 *     "500": "#03a9f4",
 *     "600": "#039be5",
 *     "700": "#0288d1",
 *     "800": "#0277bd",
 *     "900": "#01579b"
 * }
 */
export function get10ColorShades(color: string) {
    return {
        "50": ShadeGenerator.hue(color).shade("10").hex(),
        "100": ShadeGenerator.hue(color).shade("20").hex(),
        "200": ShadeGenerator.hue(color).shade("40").hex(),
        "300": ShadeGenerator.hue(color).shade("60").hex(),
        "400": ShadeGenerator.hue(color).shade("80").hex(),
        "500": ShadeGenerator.hue(color).shade("100").hex(),
        "600": ShadeGenerator.hue(color).shade("200").hex(),
        "700": ShadeGenerator.hue(color).shade("300").hex(),
        "800": ShadeGenerator.hue(color).shade("400").hex(),
        "900": ShadeGenerator.hue(color).shade("500").hex(),
    }
}
