import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface ImageSrcProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    image: string,
}
