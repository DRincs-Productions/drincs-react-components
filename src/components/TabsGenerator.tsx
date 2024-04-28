import { Tab, TabList, TabPanel, Tabs, tabClasses } from "@mui/joy";
import { TabsGeneratorProps } from "../interfaces/components";
import ErrorComponent from "./ErrorComponent";

export default function TabsGenerator(props: TabsGeneratorProps) {
    const {
        tabs,
        sx,
        panelSx,
        ...rest
    } = props

    if (!tabs || tabs.length === 0) {
        return <ErrorComponent error={"No Tabs"} text={"Tabs Generator"} />
    }

    try {
        return (
            <Tabs
                variant="outlined"
                defaultValue={0}
                sx={{
                    borderRadius: 'lg',
                    boxShadow: 'sm',
                    overflow: 'auto',
                    ...sx,
                }}
                {...rest}
            >
                <TabList
                    disableUnderline
                    tabFlex={1}
                    sx={{
                        [`& .${tabClasses.root}`]: {
                            fontSize: 'sm',
                            fontWeight: 'lg',
                            [`&[aria-selected="true"]`]: {
                                color: 'primary.500',
                                bgcolor: 'background.surface',
                            },
                            [`&.${tabClasses.focusVisible}`]: {
                                outlineOffset: '-4px',
                            },
                        },
                    }}
                >
                    {tabs.map((item, index) => {
                        return <Tab
                            disableIndicator
                            variant="soft"
                            sx={{ flexGrow: 1 }}
                            key={index}
                        >
                            {item.label}
                        </Tab>
                    })}
                </TabList>
                {
                    tabs.map((item, index) => {
                        return <TabPanel
                            value={index}
                            sx={panelSx}
                            key={index}
                        >
                            {item.content}
                        </TabPanel>
                    })
                }
            </Tabs >
        )
    } catch (error) {
        return <ErrorComponent error={error} text={"Tabs Generator"} />
    }
}
