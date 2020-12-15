import React from "react";
import {Id} from "evt/tools/typeSafety";
import Paper from "@material-ui/core/Paper"
import type {PaperClassKey} from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography";
import type {TypographyClassKey} from "@material-ui/core/Typography";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import BubbleArrow from "@material-ui/icons/PlayArrow";
import type {IconClassKey} from "@material-ui/core/Icon";
import {colors} from "../colorPaletteHex";
import Sent from '@material-ui/icons/DoneAll';
import Failed from '@material-ui/icons/ErrorOutline';



export type Props = {
    direction: "incoming" | "outgoing";
    description: string;
    messageStatus: "sent" | "failed";
    timeSent: string;
}



const useSurfaceStyle = makeStyles(
    ()=> createStyles<Id<PaperClassKey, "root">, Props>({
        "root": ({direction}) => ({
            "wordBreak": "break-word",
            "padding": "10px",
            "backgroundColor": direction === "incoming" ? colors.blue : colors.grey,
            "margin": direction === "incoming" ? "0 50px 0 0" : "0 0 0 50px",
            "position": "relative"
        })

    })
);

const useTypoStyle = makeStyles(
    () => createStyles<Id<TypographyClassKey, "root">, Props>({
        "root": ({direction}) =>({
            "color": direction === "incoming" ? colors.grey : "black"

        })

    })
)



const useArrowStyle = makeStyles(
    ()=> createStyles<Id<IconClassKey, "root">, Props>({
        "root": ({direction})=>({
            "position": "absolute",
            "top": "0",
            "left": direction === "incoming" ? "-15px" : "unset",
            "right": direction === "incoming" ? "unset" : "-15px",
            "fill": direction === "incoming" ? colors.blue : colors.grey,
            "transform": direction === "incoming" ? "rotate(180deg)" : "unset"
            


        })

    })
)

const useStatusStyle = makeStyles(
    ()=> createStyles<Id<IconClassKey, "root">, Props>({
        "root": ({messageStatus}) =>({
            "fill": (()=>{
                switch(messageStatus){
                    case "failed": return "red"; 
                    case "sent" : return colors.blue;
                }
            })(),
            "fontSize": "1.2em",
            "position": "relative",
            "top": "7px",


        })

    })
)


export const MessageBubble = (props: Props)=>{

    const {description, messageStatus, direction} = props;

    const paperClasses = useSurfaceStyle(props);
    const typoClasses = useTypoStyle(props);
    const arrowClasses = useArrowStyle(props);
    const statusClasses = useStatusStyle(props);

    return (
            <Paper classes={paperClasses}>
                <BubbleArrow classes={arrowClasses} />
                <Typography classes={typoClasses}>{description}</Typography>
                {
                    direction === "outgoing" ?
                        (()=>{
                            switch(messageStatus){
                                case "failed": return <Failed classes={statusClasses}/>;
                                case "sent": return <Sent classes={statusClasses}/>;
                            }
                        })() :
                        ""

                }
            </Paper>

    )
}