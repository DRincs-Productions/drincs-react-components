import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import { listItemButtonClasses } from '@mui/joy/ListItemButton';
import { DrawerProps } from '../interfaces';
import Sheet from './Sheet';
import { useThemeMaterial } from '../Theme';

export default function Drawer(props: DrawerProps) {
    const {
        navMargin,
        header,
        footer,
        body,
        zIndex = useThemeMaterial().zIndex.drawer,
        width,
        children,
        sx,
        ...rest
    } = props;

    return (
        <Box sx={{
            display: 'flex',
            minHeight: '100dvh',
        }}>
            <Sheet
                className="Sidebar"
                sx={{
                    position: 'sticky',
                    transition: 'transform 0.4s, width 0.4s',
                    zIndex: zIndex,
                    height: '100dvh',
                    width: width,
                    top: 0,
                    p: 2,
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRight: '1px solid',
                    borderColor: 'divider',
                    ...sx,
                }}
                {...rest}
            >
                <Box sx={{
                    minHeight: navMargin,
                    display: { xs: 'none', md: 'flex' },
                }} />
                {header && <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    {header}
                </Box>}
                {body && <Box
                    sx={{
                        minHeight: 0,
                        overflow: 'hidden auto',
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        [`& .${listItemButtonClasses.root}`]: {
                            gap: 1.5,
                        },
                    }}
                >
                    {body}
                </Box>}
                {footer && <Divider />}
                {footer && <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    {footer}
                </Box>}
            </Sheet>
            <Box
                component="main"
                className="MainContent"
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 0,
                    gap: 1,
                    overflow: "auto",
                    marginTop: 8,
                    p: 3,
                }}
            >
                {children}
            </Box>
        </Box>
    );
}
