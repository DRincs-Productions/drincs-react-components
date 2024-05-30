import { Link as RouterLink } from 'react-router-dom';
import LinkRouterProps from '../interfaces/components/LinkRouterProps';
import Link from './Link';

export default function LinkRouter({
    ...rest
}: LinkRouterProps) {
    return (
        <Link
            component={RouterLink}
            {...rest}
        />
    );
}
