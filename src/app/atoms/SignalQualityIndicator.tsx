import React from "react";
import {SignalCellularConnectedNoInternet0Bar, SignalCellular1Bar, SignalCellular2Bar, SignalCellular4Bar} from "@material-ui/icons";
import type {IconClassKey} from "@material-ui/core/Icon";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import {Id} from "evt/tools/typeSafety";


export type Props ={
    signalQuality: "no signal" | "weak" | "good" | "excellent";
};


const useStyle = makeStyles(
    () => createStyles<Id<IconClassKey, "root">, Props>({
        "root": ({signalQuality}) => ({
            "fill": (()=>{
                switch(signalQuality){
                    case "no signal": return "red";
                    case "weak" : return "lightpink";
                    case "good": return "lightgreen";
                    case "excellent" : return "greenyellow";
                }
            })()

        })
    })
)


export const SignalQualityIndicator = (props: Props)=>{
    const {signalQuality} = props;
    const classes = useStyle(props);
    return (()=>{
        switch(signalQuality){
            case "no signal": return <SignalCellularConnectedNoInternet0Bar classes={classes}/>;
            case "weak": return <SignalCellular1Bar classes={classes}/>;
            case "good": return <SignalCellular2Bar classes={classes}/>;
            default: return <SignalCellular4Bar classes={classes}/>;

        }

    })()

    
}