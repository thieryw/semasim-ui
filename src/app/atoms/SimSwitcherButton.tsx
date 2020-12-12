import React, {FC} from "react";
import {SwapHoriz} from '@material-ui/icons';
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import {Id} from "evt/tools/typeSafety";
import type {TypographyClassKey} from "@material-ui/core/Typography";
import type {SvgIconClassKey} from "@material-ui/core/SvgIcon";



export type Props = {
    onClick: ()=>void;
    notificationCount: number;

}


const useSvgStyle = makeStyles(
    ()=> createStyles<Id<SvgIconClassKey, "root">, Props>({
        "root": {
            "fontSize": "3em",
            "color": "blue"
        }
        
    })
)



const useTypoStyle = makeStyles(
    ()=> createStyles<Id<TypographyClassKey, "root">, Props>({
        "root": {
            "border": "solid blue 1px",
            "borderRadius": "50%",
            "fontSize": "0.8em",
            "padding": "0 5px 0 5px",
            "color": "blue"
        }

    })
)



export const SimSwitcherButton: FC<Props> = props=>{

    const {onClick, notificationCount} = props;
    const typoClasses = useTypoStyle(props);
    const svgClasses = useSvgStyle(props);

    return(
        <Button onClick={onClick}>
            <SvgIcon classes={svgClasses}>
                <SwapHoriz/>
            </SvgIcon>
            <Typography classes={typoClasses}>{
                notificationCount === 0 ? "" : notificationCount
            }</Typography>
        </Button>

        
    )

}