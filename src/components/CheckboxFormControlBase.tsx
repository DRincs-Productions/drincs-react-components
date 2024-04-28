import { FormControl, FormHelperText, FormLabel, Skeleton, useTheme } from '@mui/joy';
import CheckboxFormControlBaseProps from '../interfaces/components/CheckboxFormControlBaseProps';
import CLErrorComponent from './ErrorComponent';

export default function CheckboxFormControlBase(props: CheckboxFormControlBaseProps) {
    const {
        helperText,
        children,
        error,
        addHelperMarginIfIsHidden,
        loading,
        label,
        required,
    } = props;
    const theme = useTheme();

    try {
        return (
            <FormControl
                sx={{
                    marginTop: 0.5,
                    marginBottom: helperText && addHelperMarginIfIsHidden ? 2.8 : 0.5
                }}
            >
                <FormLabel
                    sx={{
                        marginTop: 0.5,
                        color: error ? theme.palette.danger[500] : undefined
                    }}
                >{label}{required ? " *" : ""}</FormLabel>
                {children}
                <FormHelperText
                    sx={{
                        color: error ? theme.palette.danger[500] : undefined,
                        fontSize: 13,
                    }}
                >{helperText}</FormHelperText>
                {loading &&
                    <Skeleton
                        animation="wave"
                        height={15}
                        sx={{
                            marginTop: 0.5,
                        }}
                    />
                }
            </FormControl >
        )
    } catch (error) {
        return <CLErrorComponent error={error} text={"Checkbox Form Control Base"} />
    }
}
