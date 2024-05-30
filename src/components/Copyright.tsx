import { Typography } from "@mui/joy";
import CopyrightProps from "../interfaces/components/CopyrightProps";
import LinkRouter from "./LinkRouter";

export default function Copyright({ to, text }: CopyrightProps) {
    return (
        <Typography
            level="body-sm"
            sx={{ alignSelf: 'center' }}
        >
            {"Copyright © "}
            <LinkRouter
                to={to}
            >
                {text}
            </LinkRouter>{" "}
            {new Date().getFullYear()}
        </Typography>
    );
}
