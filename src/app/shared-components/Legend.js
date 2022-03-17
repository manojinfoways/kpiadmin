import {Box, Chip, Fade, FormControlLabel, Switch} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import {useMemo, useState} from "react";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
        badge: {
            borderRadius: "50%",
            backgroundColor: "white",
            color: "black",
            height: "23px",
            width: "23px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        legendData: {
            border: '1px solid #000',
            padding: '16px',
            display: 'flex',
            flexWrap: 'wrap',
            '& p': {
                width: '25%',
                display: 'flex',
                alignItems: 'center',
                '& svg': {
                    marginRight: '12px',
                    width: '18px',
                },
                '& span': {
                    height: '21px',
                    width: '21px',
                    marginRight: '12px',
                    '& span': {
                        display: 'flex',
                        marginRight: '8px',
                        width: '26px',
                    },
                },
            },
        },
        green: {
            backgroundColor: "#59B16A",
            cursor: "pointer",
            marginBottom: "4px"
        },
        red: {
            backgroundColor: "#DA4B52",
            cursor: "pointer",
            marginBottom: "4px"
        },
        orange: {
            backgroundColor: "#ED7D31FF",
            cursor: "pointer",
            marginBottom: "4px"
        },
        blue: {
            backgroundColor: "#A7E0F5",
            cursor: "pointer",
            marginBottom: "4px"
        },
        purple: {
            backgroundColor: "#6275b3",
            cursor: "pointer",
            marginBottom: "4px"
        },
        pink: {
            backgroundColor: "#FF9B8E",
            cursor: "pointer",
            marginBottom: "4px"
        },
        yellow: {
            backgroundColor: "#FBC02D",
            cursor: "pointer",
            marginBottom: "4px"
        }
    }
)

const Legend = () => {

    const [showLegend, setShowLegend] = useState(false);
    const classes = useStyles();

    const legendData = useMemo(() => ([
        {
            icon: <Chip component="span" className={classes.blue} size="small"/>,
            name: "Included in Doc Info Sheet"
        },
        {
            icon: <Chip component="span" className={classes.purple} size="small"/>,
            name: "Included in Chain of Title"
        },
        {
            icon: <Chip component="span" className={classes.pink} size="small"/>,
            name: "Included in Name Check"
        },
        {
            icon: <Chip component="span" className={classes.yellow} size="small"/>,
            name: "Included in Satisfaction"
        },
        {
            icon: <Chip component="span" className={classes.orange} size="small"/>,
            name: "Included in Legacy PTR"
        },
        {
            icon: <Chip component="span" className={classes.red} size="small"/>,
            name: "Does not belong in PTR"
        },
        {
            icon: <Icon>verified</Icon>,
            name: "Researcher acknowledged"
        },
        {
            icon: <span className={classes.badge}>OT</span>,
            name: "Ownership Transfers"
        },
        {
            icon: <span className={classes.badge}>M</span>,
            name: "Mortgages"
        },
        {
            icon: <span className={classes.badge}>O</span>,
            name: "Other"
        },
    ]), [classes]);

    return (
        <Box sx={{margin: '20px 0px'}}>
            <FormControlLabel
                control={
                    <Switch
                        checked={showLegend}
                        onChange={() => setShowLegend(prev => !prev)}
                        inputProps={{'aria-label': 'controlled'}}
                    />
                }
                label="Show Legend"
                labelPlacement={"start"}
            />
            <Fade in={showLegend}>
                <div className={clsx(classes.legendData, showLegend ? "" : "hidden")}>
                    {legendData.map((data, i) => (
                        <Typography key={i}>{data.icon} {data.name}</Typography>
                    ))}
                </div>
            </Fade>
        </Box>
    )
}

export default Legend;