import { DefaultTextFieldValueType } from "../../types/DefaultTextFieldValueType";
import ComponentControlledProps from "./ComponentControlledProps";
import TextFieldProps from "./TextFieldProps";

export default interface TextFieldControlledProps<T extends DefaultTextFieldValueType> extends TextFieldProps<T>, ComponentControlledProps { }
