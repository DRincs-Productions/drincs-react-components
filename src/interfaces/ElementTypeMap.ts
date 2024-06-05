export default interface ElementTypeMap<P extends {}, D extends React.ElementType> {
    props: P
    defaultComponent: D;
}
