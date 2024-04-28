import LinkJoy from '@mui/joy/Link';
import { Link as RouterLink } from 'react-router-dom';
import LinkProps from '../interfaces/components/LinkProps';

export default function Link({...rest}: LinkProps) {
    return (
        <LinkJoy
            {...rest}
            component={RouterLink}
        />
    );
}
