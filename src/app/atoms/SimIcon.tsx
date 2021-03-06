import React from "react";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import type {SvgIconClassKey} from "@material-ui/core/SvgIcon";
import {ReactComponent as SimIconSvgComponent} from "../assets/svg/sim.svg"
import {Id} from "evt/tools/typeSafety";
import {colors} from "../colorPaletteHex";

export type Props = {
    online: boolean;
}


const useStyle = makeStyles(
    () => createStyles<Id<SvgIconClassKey, "root">, Props>({
        "root": ({online})=>({
            "fill": online ? colors.blue : "darkred",
            "fontSize": "2.5em",
        })
    })
)



export const SimIcon = (props: Props)=>{

    const classes = useStyle(props);

    return(
        <SvgIcon classes={classes}>
            <SimIconSvgComponent />
        </SvgIcon>
       
    )
}


