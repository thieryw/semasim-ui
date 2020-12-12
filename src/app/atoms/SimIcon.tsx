import React, {FC} from "react";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import type {SvgIconClassKey} from "@material-ui/core/SvgIcon";
import {ReactComponent as SimIconSvgComponent} from "../assets/svg/sim.svg"
import {Id} from "evt/tools/typeSafety";

export type Props = {
    online: boolean;
}


const useStyle = makeStyles(
    () => createStyles<Id<SvgIconClassKey, "root">, Props>({
        "root": ({online})=>({
            "fill": online ? "blue" : "darkred",
            "fontSize": "3em",
        })
    })
)



export const SimIcon: FC<Props> = props=>{

    const classes = useStyle(props);

    return(
        <SvgIcon classes={classes}>
            <SimIconSvgComponent />
        </SvgIcon>
       
    )
}


