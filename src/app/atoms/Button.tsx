import React from "react";

import MuiButton from "@material-ui/core/Button";
import type { ButtonClassKey } from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import type { Optional } from "evt/tools/typeSafety";
import { noUndefined } from "../utils/noUndefined";
import { Id } from "evt/tools/typeSafety";

export type Props = {
    backgroundColor?: "purple" | "green" | "red" | "blue";
    color?: "white" | "black" | "beige";
    label: string;
    disabled?: boolean;
    size?: "small" | "medium" | "large"
};

export const defaultProps: Optional<Props> = {
    "backgroundColor": "blue",
    "color": "black",
    "disabled": false,
    "size": "medium"
};

const useStyles = makeStyles(
    theme => createStyles<Id<ButtonClassKey, "root" | "label" | "text">, Required<Props>>({
        "root": ({ backgroundColor, color, size }) => ({
            "backgroundColor": backgroundColor ? backgroundColor :
                theme.palette.background.default,
            "color": color ? color : theme.palette.text.primary,
            "transform": `scale(${(() => {
                switch (size) {
                    case "large": return 1.5;
                    case "small": return 0.7;
                    case "medium": return 1;
                }
            })()})`,
            "&:hover": {
                "backgroundColor": () => {
                    switch (backgroundColor) {
                        case "blue": return "lightblue";
                        case "green": return "lightgreen";
                        case "purple": return "pink";
                        case "red": return "darkred"
                    }
                }
            },
            "&:disabled": {
                "backgroundColor": "black",
                "color": "red"
            }
        }),
        "label": {
            "color": "red"
        },
        "text": {}
    })
);


export function Button(props: Props) {

    const completedProps = { ...defaultProps, ...noUndefined(props) };

    const { label, disabled } = completedProps;

    const classes = useStyles(completedProps);

    return (
        <MuiButton
            disabled={disabled}
            variant="contained"
            /*className={classes.buttonStyle}>*/
            classes={classes}
        >

            {label}</MuiButton>
    );
}








