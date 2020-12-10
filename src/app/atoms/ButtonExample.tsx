import React from "react";
import {Button, Theme, makeStyles} from "@material-ui/core";




export type Props = {
    backgroundColor?: "purple" | "green" | "red" | "blue";
    color?: "white" | "black" | "beige";
    label: string;
} & Partial<DefaultProps>;

type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
    size: "medium" as "small" | "medium" | "large",
    disabled: false,
}


const useStyles = makeStyles<Theme, Props>(theme =>({
    buttonStyle: (props: Props) =>{
        const {backgroundColor, color, size} = props;
        return{
            "backgroundColor": backgroundColor ? backgroundColor : 
                theme.palette.background.default,
            "color": color ? color : theme.palette.text.primary,
            "transform": (()=>{
                switch(size){
                    case "large" : return "scale(1.5)";
                    case "small": return "scale(0.7)"
                    default : return "scale(1)";
                }

            })(),
            "&:hover": {
                "backgroundColor": ()=>{
                switch(backgroundColor){
                    case "blue" : return "lightblue";
                    case "green": return "lightgreen";
                    case "purple": return "pink";
                    case "red" : return "darkred"
                }
            }},
            "&:disabled": {
                "backgroundColor": "black",
                "color": "red"
            }


        };
    }

}));



export const ButtonExample: React.FunctionComponent<Props> = props =>{

    const classes = useStyles(props);

    return(
        <Button 
            disabled={props.disabled} 
            variant="contained" 
            className={classes.buttonStyle}>{props.label}
        </Button>
    );
}








