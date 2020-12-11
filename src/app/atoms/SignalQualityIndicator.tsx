import React, {FC} from "react";
import {SignalCellularConnectedNoInternet0Bar, SignalCellular1Bar, SignalCellular2Bar, SignalCellular4Bar} from "@material-ui/icons";
import {Theme, makeStyles, createStyles} from "@material-ui/core";


export type Props ={
    signalQuality: "no signal" | "weak" | "good" | "excellent";
};

/*const useStyle = makeStyles<Theme, Props>(()=>({
    root: (props: Props) =>{
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

}));*/

const useStyle = makeStyles<Theme, Props>(()=>
    createStyles({
        root: (props: Props) => {
            const {signalQuality} = props;
            return{
                "fill": (()=>{
                    switch(signalQuality){
                        case "no signal" : return "red";
                        case "weak" : return "lightpink";
                        case "good" : return "lightgreen";
                        default : return "greenyellow";
                    }
                })()
            }
        }
    })
)



export const SignalQualityIndicator: FC<Props> = props=>{
    const {signalQuality} = props;
    const classes = useStyle(props);
    return (()=>{
        switch(signalQuality){
            case "no signal": return <SignalCellularConnectedNoInternet0Bar className={classes.root}/>;
            case "weak": return <SignalCellular1Bar className={classes.root}/>;
            case "good": return <SignalCellular2Bar className={classes.root}/>;
            default: return <SignalCellular4Bar className={classes.root}/>;

        }

    })()

    
}