import React, {FC} from "react";
import {SignalCellularConnectedNoInternet0Bar, SignalCellular1Bar, SignalCellular2Bar, SignalCellular4Bar} from "@material-ui/icons";
import {Theme, makeStyles} from "@material-ui/core";


export type Props ={
    signalQuality: "no signal" | "weak" | "good" | "excellent";
};

const useStyle = makeStyles<Theme, Props>(()=>({
    iconStyle: (props: Props) =>{
        const {signalQuality} = props;
        return{
            "fill": (()=>{
                switch(signalQuality){
                    case "no signal" : return "red";
                    case "weak" : return "lightpink";
                    case "good" : return "lightgreen";
                    default : return "greenyellow";
                }
            })(),
        }
    }

}));



export const SignalQualityIndicator: FC<Props> = props=>{
    const {signalQuality} = props;
    const classes = useStyle(props);
    return (()=>{
        switch(signalQuality){
            case "no signal": return <SignalCellularConnectedNoInternet0Bar className={classes.iconStyle}/>;
            case "weak": return <SignalCellular1Bar className={classes.iconStyle}/>;
            case "good": return <SignalCellular2Bar className={classes.iconStyle}/>;
            default: return <SignalCellular4Bar className={classes.iconStyle}/>;

        }

    })()

    
}