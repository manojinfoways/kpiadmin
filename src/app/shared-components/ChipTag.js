import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from "@material-ui/core/styles";
import { InfoSharp } from "@material-ui/icons"
import clsx from 'clsx';

const useStyles = makeStyles({
    customChip: {
        border: '1px solid #1b2330',
        padding: '8px 16px',
        maxWidth: 'fit-content',
        borderRadius: '4px',
        margin: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'relative',
        backgroundColor: props => {
            if (props.selection === "full")
                return props.selectedColor
            else if (props.selection === "partial")
                return `${props.selectedColor}40`
            else if (props.selection === "highlight")
                return `${props.selectedColor}22`
            else
                return '#FFFFFF'
        },
        '&:hover': {
            border: '1px solid #9a9696',
            backgroundColor: '#c3c3c3 !important',
            boxShadow: 'rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px',
        }
    },
    selectedChip: {
        color: '#FFFFFF',
        '&:hover': {
            border: '1px solid #252f3e',
            backgroundColor: '#252f3e !important',
            color: '#fff'
        }
    },
    partialSelected: {
        color: '#1b2330',
        '&:hover': {
            border: '1px solid #252f3e',
            backgroundColor: '#252f3e'
        }
    },
    highlightedChip: {
        boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
        border: '2px solid #8e8c8c',
        backgroundColor: '#e6e5e5',
        color: '#6f6e6e',
        fontWeight: '600'
    },
    customIcon: {
        position: 'absolute',
        bottom: '-6px',
        right: '-8px',
        fontSize: '18px',
        borderRadius: '50%',
        backgroundColor: props => {
            if (props.selection === "full")
                return props.selectedColor
            else
                return '#FFFFFF'
        }
    },
    tooltipFont: {
        fontSize: '1rem',
        padding: '6px'
    }
});

const ChipTag = (props) => {
    const classes = useStyles(props);
    const findClassBySelection = () => {
        return props.selection === "full" ? classes.selectedChip : props.selection === "partial" ? classes.partialSelected : props.selection === "highlight" ? classes.highlightedChip : ''
    }
    return (
        <div style={{ margin: "8px" }} onClick={props.handleClick} className={clsx(findClassBySelection(), classes.customChip)}>
            {props.title}
            <Tooltip title={<div className={classes.tooltipFont}>{props.tooltipMsg}</div>} arrow><InfoSharp className={clsx("ml-3", classes.customIcon)} /></Tooltip>
        </div>
    )
}

export default ChipTag;