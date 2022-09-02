import React from "react"

const StyledBox = (props) => {
    const {width, color} = props.box;
    return(
        //actual css
        <div style={{
            width: "50px",
            height: "50px",
            backgroundColor: color,
            display: "inline-block",
            margin: 3
        }}>
        </div>
    )
    
}

export default StyledBox;