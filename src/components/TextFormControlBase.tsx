import { FormControl, FormHelperText, FormLabel, Skeleton, useTheme } from '@mui/joy';
import { isEmptyOrSpaces } from '../functions/StringFunctions';
import { TextFormControlBaseProps } from '../interfaces/components';
import ErrorComponent from './ErrorComponent';

export default function TextFormControlBase(props: TextFormControlBaseProps) {
    const {
        label,
        helperText,
        required,
        children,
        error,
        addHelperMarginIfIsHidden,
        loading,
    } = props;
    const theme = useTheme();

    try {
        return (
            <FormControl
                sx={{
                    marginTop: 0.5,
                    marginBottom: isEmptyOrSpaces(helperText) && addHelperMarginIfIsHidden ? 2.8 : 0.5
                }}
            >
                <FormLabel
                    sx={{
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
        return <ErrorComponent error={error} text={"Text Form Control Base"} />
    }
}
