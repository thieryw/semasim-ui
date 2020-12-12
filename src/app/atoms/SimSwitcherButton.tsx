import React from "react";
import {SwapHoriz} from '@material-ui/icons';
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";



export type Props = {
    onClick: ()=>void;
    notificationCount: number;

}


const useSvgStyle = makeStyles({
    "root": {
        "fontSize": "3em",
        "color": "blue"
    }
        
})




const useTypoStyle = makeStyles({
    "root": {
        "border": "solid blue 1px",
        "borderRadius": "50%",
        "fontSize": "0.8em",
        "padding": "0 5px 0 5px",
        "color": "blue"
    }
})



export const SimSwitcherButton = (props: Props)=>{

    const {onClick, notificationCount} = props;
    const typoClasses = useTypoStyle();
    const svgClasses = useSvgStyle();

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