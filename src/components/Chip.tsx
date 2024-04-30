import { Chip as ChipJoy, Tooltip } from '@mui/joy';
import ChipProps from '../interfaces/components/ChipProps';
import ErrorComponent from './ErrorComponent';

export default function Chip(props: ChipProps) {
    const {
        ariaLabel,
        ...rest
    } = props;

    try {
        return (
            <Tooltip
                title={ariaLabel}
            >
                <ChipJoy
                    {...rest}
                />
            </Tooltip>
        );
    } catch (error) {
        return <ErrorComponent error={error} text={"Chip"} />
    }
}
