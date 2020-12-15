import React from "react";
import {Id} from "evt/tools/typeSafety";
import Paper from "@material-ui/core/Paper"
import type {PaperClassKey} from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography";
import type {TypographyClassKey} from "@material-ui/core/Typography";
import {makeStyles, createStyles} from "@material-ui/core/styles";




export type Props = {
    direction: "incoming" | "outgoing";
    description: string;
}



const useSurfaceStyle = makeStyles(
    ()=> createStyles<Id<PaperClassKey, "root">, Props>({
        "root": ({direction}) => ({
            "wordBreak": "break-word",
            "padding": "10px",
            "backgroundColor": direction === "incoming" ? "#1E22AA" : "#D9D9D6",
            "marginLeft": direction === "incoming" ? "0" : "50px"
        })

    })
);

const useTypoStyle = makeStyles(
    () => createStyles<Id<TypographyClassKey, "root">, Props>({
        "root": ({direction}) =>({
            "color": direction === "incoming" ? "#D9D9D6" : "black"

        })

    })
)


export const MessageBubble = (props: Props)=>{

    const paperClasses = useSurfaceStyle(props);
    const typoClasses = useTypoStyle(props);

    return (
            <Paper classes={paperClasses}>
                <Typography classes={typoClasses}>{props.description}</Typography>
            </Paper>

    )
}