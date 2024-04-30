import { Typography } from "@mui/joy";
import CopyrightProps from "../interfaces/components/CopyrightProps";
import Link from "./Link";

export default function Copyright({ to, text }: CopyrightProps) {
    return (
        <Typography
            level="body-sm"
            sx={{ alignSelf: 'center' }}
        >
            {"Copyright © "}
            <Link
                to={to}
            >
                {text}
            </Link>{" "}
            {new Date().getFullYear()}
        </Typography>
    );
}
