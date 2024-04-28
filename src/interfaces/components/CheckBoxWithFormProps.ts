import CheckBoxFormControlBaseProps from "./CheckBoxFormControlBaseProps";
import CheckBoxProps from "./CheckBoxProps";

export default interface CheckBoxWithFormProps extends CheckBoxProps, Omit<CheckBoxFormControlBaseProps, "children"> { }
