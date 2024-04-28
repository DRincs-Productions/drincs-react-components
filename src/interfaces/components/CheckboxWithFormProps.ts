import CheckboxFormControlBaseProps from "./CheckboxFormControlBaseProps";
import CheckboxProps from "./CheckboxProps";

export default interface CheckboxWithFormProps extends CheckboxProps, Omit<CheckboxFormControlBaseProps, "children"> { }
