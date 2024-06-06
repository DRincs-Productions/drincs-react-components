import AccordionJoy from '@mui/joy/Accordion';
import AccordionDetails, {
    accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary, {
    accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import { useContext, useState } from 'react';
import { VisibilityContext } from '../contexts';
import { AccordionProps } from '../interfaces/components';

export default function Accordion(props: AccordionProps) {
    const visibilityContext = useContext(VisibilityContext)
    const {
        id,
        children,
        title,
        defaultExpanded = false,
        ...rest
    } = props;
    const [expanded, setExpanded] = useState(defaultExpanded);
    if (id && visibilityContext.fieldIsHidden(id)) {
        return null
    }

    return (
        <AccordionGroup
            variant="outlined"
            transition="0.2s"
            sx={{
                // maxWidth: 400,
                borderRadius: 'lg',
                [`& .${accordionSummaryClasses.button}:hover`]: {
                    bgcolor: 'transparent',
                },
                [`& .${accordionDetailsClasses.content}`]: {
                    boxShadow: (theme) => `inset 0 1px ${theme.vars.palette.divider}`,
                    [`&.${accordionDetailsClasses.expanded}`]: {
                        paddingBlock: '0.75rem',
                    },
                },
            }}
        >
            <AccordionJoy
                id={id}
                {...rest}
                defaultExpanded
                expanded={expanded}
                onChange={() => {
                    setExpanded(!expanded)
                }}
            >
                <AccordionSummary>{title}</AccordionSummary>
                <AccordionDetails variant="soft">
                    {expanded ? children : null}
                </AccordionDetails>
            </AccordionJoy>
        </AccordionGroup>
    );
}
