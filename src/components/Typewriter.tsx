import { Typography } from "@mui/joy";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { TypewriterProps } from "../interfaces/components";

export default function Typewriter({
    text,
    delay = 0,
    ...rest
}: TypewriterProps) {
    const sentenceVariants = {
        hidden: {},
        visible: { opacity: 1, transition: { staggerChildren: delay / 1000 } },
    };
    const letterVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
    }), [delay]);

    return (
        <Typography
            component={motion.p}
            key={text}
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            {...rest}
        >
            {text.split("").map((char, i) => (
                <motion.span key={`${char}-${i}`} variants={letterVariants}>
                    {char}
                </motion.span>
            ))}
        </Typography>
    )
};
