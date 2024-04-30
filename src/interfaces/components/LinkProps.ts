import { LinkProps as LinkPropsJoy } from '@mui/joy';
import { LinkProps as LinkPropsRouter, To } from 'react-router-dom';

export default interface LinkProps extends Omit<LinkPropsRouter, "color" | "to">, LinkPropsJoy {
    selected?: boolean
    to?: To
}
