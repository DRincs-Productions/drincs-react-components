import { Shadow, SheetProps as SheetPropsJoy } from "@mui/joy";

export default interface SheetProps extends SheetPropsJoy {
    elevation?: keyof Shadow
}
