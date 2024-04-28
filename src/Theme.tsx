import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import { SupportedColorScheme } from "@mui/joy/styles/types";
import {
    Experimental_CssVarsProvider as MaterialCssVarsProvider
} from '@mui/material/styles';

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
    defaultColorScheme: ColorScheme | { light: ColorScheme; dark: ColorScheme };
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
