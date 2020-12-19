import React from "react";
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import BubbleArrow from "@material-ui/icons/PlayArrow";
import {colors} from "../colorPaletteHex";
import Received from '@material-ui/icons/DoneAll';
import Failed from '@material-ui/icons/ErrorOutline';
import Grid from "@material-ui/core/Grid";
import Sent from '@material-ui/icons/Done';


export type Props = {
    direction: "incoming" | "outgoing";
    description: string;
    messageStatus: "sent" | "failed" | "received";
    timeSent: string;
}

const useStyles = makeStyles(
    ()=> createStyles<"paper" | 
        "bubbleArrow" | 
        "typography" | 
        "time" |
        "status", Props>({
            "paper": ({direction})=>({
                "wordBreak": "break-word",
                "padding": "10px 10px 2px 10px",
                "backgroundColor": direction === "incoming" ? colors.blue : colors.grey,
                "margin": direction === "incoming" ? "0 50px 0 0" : "0 0 0 50px",
                "position": "relative"
            }),
            "bubbleArrow": ({direction})=>({
                "position": "absolute",
                "top": "0",
                "left": direction === "incoming" ? "-15px" : "unset",
                "right": direction === "incoming" ? "unset" : "-15px",
                "fill": direction === "incoming" ? colors.blue : colors.grey,
                "transform": direction === "incoming" ? "rotate(180deg)" : "unset"
            }),
            "status": ({messageStatus})=>({
                "fill": (()=>{
                    switch(messageStatus){
                        case "failed": return "red"; 
                        case "sent" : return "grey";
                        case "received": return colors.blue;
                    }
                })(),
            "fontSize": "1.2em",


            }),
            "time": ({direction})=>({
                "color": direction === "incoming" ? colors.grey : "grey",
                "fontSize": "0.8em",
            }),
            "typography": ({direction})=>({

                "color": direction === "incoming" ? colors.grey : "black"

            }),
        })
);





export const MessageBubble = (props: Props)=>{

    const {description, messageStatus, direction, timeSent} = props;

    const classes = useStyles(props);

    return (
            <Paper className={classes.paper}>
                <BubbleArrow className={classes.bubbleArrow}/>
                <Typography className={classes.typography}>{description}</Typography>
                <Grid 
                    container 
                    direction="row" 
                    justify={direction === "incoming" ? "flex-end" : "space-between"}
                >
                    {
                        direction === "outgoing" ?
                            (()=>{
                                switch(messageStatus){
                                    case "failed": return <Failed className={classes.status}/>;
                                    case "sent": return <Sent className={classes.status}/>;
                                    case "received": return <Received className={classes.status}/>;
                                }
                            })() :
                            ""

                    }

                    <Typography className={classes.time}>{timeSent}</Typography>
                </Grid>

            </Paper>

    )
}