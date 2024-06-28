import { ErrorComponentProps } from "../interfaces"
import { useTheme } from "../Theme"

export default function ErrorComponent(props: ErrorComponentProps) {
    const theme = useTheme()
    console.log(props.text, props.error)
    return <div style={{ color: theme.palette.danger[500] }}>{props.text}</div>
}
