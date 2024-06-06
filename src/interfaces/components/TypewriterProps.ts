import { TypographyProps } from "@mui/joy";

export default interface TypewriterProps extends TypographyProps {
    text: string;
    /**
     * Delay between each letter in milliseconds.
     * @default 0
     */
    delay?: number;
};
