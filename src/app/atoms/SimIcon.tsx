import React, {FC} from "react";
import {SvgIcon, makeStyles, Theme} from "@material-ui/core";
import {ReactComponent as SimIconSvgComponent} from "../assets/svg/sim.svg"

export type Props = {
    online: boolean;
}

const useStyle = makeStyles<Theme, Props>(()=>({
    iconStyle: (props: Props) =>{
        const {online} = props;
        return{
            "fill": online ? "blue" : "darkred",
            "fontSize": "4em",
        }
    }

}));



export const SimIcon: FC<Props> = props=>{

    const classes = useStyle(props);

    return(
        <SvgIcon className={classes.iconStyle}>
            <SimIconSvgComponent/>
        </SvgIcon>
       
    )
}


