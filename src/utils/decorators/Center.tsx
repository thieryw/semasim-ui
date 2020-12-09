import React from "react";


export const Center: React.FunctionComponent = props =>{

    return (
        <div style={{
            "display": "flex",
            "justifyContent": "center"

        }}>
            {props.children}
        </div>

    )

}
