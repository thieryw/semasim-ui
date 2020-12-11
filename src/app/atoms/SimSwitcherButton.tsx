import React, {FC} from "react";
import {SwapHoriz} from '@material-ui/icons';
import {SvgIcon, Button, Typography, makeStyles, createStyles, Theme} from "@material-ui/core";


export type Props = {
    onClick: ()=>void;
    notificationCount: number;

}



export const SimSwitcherButton: FC<Props> = props=>{

    const {onClick, notificationCount} = props;

    return(
        <Button onClick={onClick}>
            <SvgIcon>
                <SwapHoriz/>
            </SvgIcon>
            <Typography>{
                notificationCount === 0 ? "" : notificationCount
            }</Typography>
        </Button>

        
    )

}