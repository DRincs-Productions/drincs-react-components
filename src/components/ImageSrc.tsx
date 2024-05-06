import ImageSrcProps from '../interfaces/components/ImageSrcProps';

export default function ImageSrc(props: ImageSrcProps) {
    const {
        className = "ImageSrc-root",
        image,
        style,
        ...rest
    } = props;

    return (
        <span
            className={className}
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${image})`,
                ...style,
            }}
            {...rest}
        />
    )
}
