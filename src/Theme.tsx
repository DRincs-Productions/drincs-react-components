import { useTheme as useThemeJoy } from "@mui/joy";
import { extendTheme as extendThemeJoy, CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import { SupportedColorScheme } from "@mui/joy/styles/types";
import { CssBaseline, CssVarsTheme, Theme } from "@mui/material";
import {
    THEME_ID as MATERIAL_THEME_ID,
    Experimental_CssVarsProvider as MaterialCssVarsProvider,
    experimental_extendTheme as materialExtendTheme,
    useTheme as materialUseTheme
} from '@mui/material/styles';
import { ReactNode } from "react";
import { ShadeGenerator } from "./ShadeGenerator/shadeGenerator";
import PaletteRange, { DefaultPaletteRange } from "./interfaces/PaletteRange";

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
    children: ReactNode,
    themeMaterial?: Omit<Theme, "palette" | "applyStyles"> & CssVarsTheme;
    themeJoy?: {
        cssVarPrefix?: string | undefined;
        colorSchemes: Record<SupportedColorScheme, Record<string, any>>;
    } | {
        $$joy: {
            cssVarPrefix?: string | undefined;
            colorSchemes: Record<SupportedColorScheme, Record<string, any>>;
        };
    } | undefined;
    defaultMode: 'light' | 'dark' | 'system'
}

export default function CssVarsProvider(props: CssVarsProviderProps) {
    const {
        children,
        themeMaterial = materialExtendTheme(),
        themeJoy,
        defaultMode,
    } = props;

    return (
        <MaterialCssVarsProvider
            defaultMode={defaultMode}
            theme={{ [MATERIAL_THEME_ID]: themeMaterial }}
        >
            <JoyCssVarsProvider
                defaultMode={defaultMode}
                theme={themeJoy}
            >
                <CssBaseline enableColorScheme />
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
export function get10ColorShades(color: string): DefaultPaletteRange {
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

/**
 * Create a palette range based on a color you pass in.
 * @param name The name of the palette range. For example, 'secondary'
 * @param color The color you want to base the palette range on. For example, '#03a9f4'
 * @returns 
 */
export function createPaletteRange(name: string, color: string, mode: "light" | "dark", textColor?: string): PaletteRange {
    if (mode == "dark") {
        return {
            ...get10ColorShades(color),
            solidColor: textColor,
            solidBg: `var(--joy-palette-${name}-500)`,
            solidHoverBg: `var(--joy-palette-${name}-600)`,
            solidActiveBg: `var(--joy-palette-${name}-700)`,
            solidDisabledColor: `var(--joy-palette-neutral-500)`,
            solidDisabledBg: `var(--joy-palette-neutral-800)`,

            softColor: `var(--joy-palette-${name}-200)`,
            softBg: `var(--joy-palette-${name}-800)`,
            softHoverBg: `var(--joy-palette-${name}-700)`,
            softActiveColor: `var(--joy-palette-${name}-100)`,
            softActiveBg: `var(--joy-palette-${name}-600)`,
            softDisabledColor: `var(--joy-palette-neutral-500)`,
            softDisabledBg: `var(--joy-palette-neutral-800)`,

            outlinedColor: `var(--joy-palette-${name}-200)`,
            outlinedBorder: `var(--joy-palette-${name}-700)`,
            outlinedHoverBg: `var(--joy-palette-${name}-800)`,
            outlinedActiveBg: `var(--joy-palette-${name}-700)`,
            outlinedDisabledColor: `var(--joy-palette-neutral-500)`,
            outlinedDisabledBorder: `var(--joy-palette-neutral-800)`,

            plainColor: `var(--joy-palette-${name}-300)`,
            plainHoverBg: `var(--joy-palette-${name}-800)`,
            plainActiveBg: `var(--joy-palette-${name}-700)`,
            plainDisabledColor: `var(--joy-palette-neutral-500)`,
        }
    }
    else {
        return {
            ...get10ColorShades(color),
            solidColor: textColor,
            solidBg: `var(--joy-palette-${name}-500)`,
            solidHoverBg: `var(--joy-palette-${name}-600)`,
            solidActiveBg: `var(--joy-palette-${name}-700)`,
            solidDisabledColor: `var(--joy-palette-neutral-400)`,
            solidDisabledBg: `var(--joy-palette-neutral-100)`,

            softColor: `var(--joy-palette-${name}-700)`,
            softBg: `var(--joy-palette-${name}-100)`,
            softHoverBg: `var(--joy-palette-${name}-200)`,
            softActiveColor: `var(--joy-palette-${name}-800)`,
            softActiveBg: `var(--joy-palette-${name}-300)`,
            softDisabledColor: `var(--joy-palette-neutral-400)`,
            softDisabledBg: `var(--joy-palette-neutral-50)`,

            outlinedColor: `var(--joy-palette-${name}-500)`,
            outlinedBorder: `var(--joy-palette-${name}-300)`,
            outlinedHoverBg: `var(--joy-palette-${name}-100)`,
            outlinedActiveBg: `var(--joy-palette-${name}-200)`,
            outlinedDisabledColor: `var(--joy-palette-neutral-400)`,
            outlinedDisabledBorder: `var(--joy-palette-neutral-200)`,

            plainColor: `var(--joy-palette-${name}-500)`,
            plainHoverBg: `var(--joy-palette-${name}-100)`,
            plainActiveBg: `var(--joy-palette-${name}-200)`,
            plainDisabledColor: `var(--joy-palette-neutral-400)`,
        }
    }
}
