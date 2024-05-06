import ImageBackdropProps from "../interfaces/components/ImageBackdropProps";

export default function ImageBackdrop(props: ImageBackdropProps) {
    const {
        className = "ImageBackdrop-root",
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
                ...style,
            }}
            {...rest}
        />
    )
}