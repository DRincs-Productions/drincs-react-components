import { CheckBoxProps } from "../interfaces/components";
import CheckBox from "./CheckBox";
import ErrorComponent from "./ErrorComponent";

export default function ChipCheckBox(props: CheckBoxProps) {
    const {
        variant = "solid",
        disableIcon = true,
        overlay = true,
        ...rest
    } = props;

    try {
        return (
            <CheckBox
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
