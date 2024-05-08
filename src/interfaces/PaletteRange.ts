export default interface PaletteRange extends DefaultPaletteRange {
    plainColor: string;
    plainHoverBg?: string;
    plainActiveBg: string;
    plainDisabledColor?: string;
    outlinedColor: string;
    outlinedBorder: string;
    outlinedHoverBg?: string;
    outlinedHoverBorder?: string;
    outlinedActiveBg: string;
    outlinedDisabledColor?: string;
    outlinedDisabledBorder?: string;
    softColor: string;
    softBg: string;
    softHoverBg?: string;
    softActiveBg: string;
    softDisabledColor?: string;
    softDisabledBg?: string;
    solidColor?: string;
    solidBg: string;
    solidHoverBg: string;
    solidActiveBg: string;
    solidDisabledColor: string;
    solidDisabledBg: string;
}

export interface DefaultPaletteRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    mainChannel?: string;
    lightChannel?: string;
    darkChannel?: string;
}
