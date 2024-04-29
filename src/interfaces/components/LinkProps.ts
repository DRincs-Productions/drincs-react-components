import { LinkProps as LinkPropsJoy } from '@mui/joy';
import { LinkProps as LinkPropsRouter } from 'react-router-dom';

export default interface LinkProps extends Omit<LinkPropsRouter, "color">, LinkPropsJoy {
    selected?: boolean
}
