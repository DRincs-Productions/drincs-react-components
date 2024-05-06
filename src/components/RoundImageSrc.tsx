import { ImageSrcProps } from "../interfaces/components";
import ImageSrc from "./ImageSrc";

export default function RoundImageSrc(props: ImageSrcProps) {
    const {
        style,
        ...rest
    } = props;

    return (
        <ImageSrc
            style={{
                borderRadius: "50%",
                ...style,
            }}
            {...rest}
        />
    )
}
