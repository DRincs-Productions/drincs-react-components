import { CheckboxProps } from "../interfaces/components";
import Checkbox from "./Checkbox";
import ErrorComponent from "./ErrorComponent";

export default function ChipCheckbox(props: CheckboxProps) {
    const {
        variant = "solid",
        disableIcon = true,
        overlay = true,
        ...rest
    } = props;

    try {
        return (
            <Checkbox
                variant={variant}
                disableIcon={disableIcon}
                overlay={overlay}
                {...rest}
            />
        );
    } catch (error) {
        return <ErrorComponent error={error} text={"Chip Check Box"} />
    }
}
