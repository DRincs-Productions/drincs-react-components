import { LinkProps as LinkPropsRouter, To } from 'react-router-dom';
import LinkProps from './LinkProps';

export default interface LinkRouterProps extends Omit<LinkPropsRouter, "color" | "to">, Omit<LinkProps, "onClick"> {
    to?: To
}
