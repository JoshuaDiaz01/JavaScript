import React, { useState } from "react";
import StyledBox from "./StyledBox";

const BoxGenerator = props => {
    const colorField = React.createRef();
    const widthField = React.createRef();

    const [state, setState] = useState({
        boxes: [],
        newColor: "",
        newWidth: 0
    });

const onClickHandler = e => {
    try {
        e.preventDefault();
        setState({
            boxes: [...state.boxes, {
            color: state.newColor,
            width: state.newWidth
            }],
            
        newColor: "",
        newWidth: 0
        });
        console.log(state);
        colorField.current.value = "";
        widthField.current.value = "";
    }
    catch{
        console.error();
    }
};

const onChangeColorHandler = e => {
    e.preventDefault();
    setState({
    ...state,
    newColor: e.target.value
    });
};
const onChangeWidthHandler = e => {
    e.preventDefault();
    setState({
    ...state,
    newWidth: e.target.value
    });
};


    return(
        <div>
            <h1>Add a new box!</h1>
            <input ref = {colorField} onChange = {onChangeColorHandler} placeholder = "Type in color:"></input>
            <input ref = {widthField} onChange = {onChangeWidthHandler} placeholder = "Type in Width:"></input>
            <button onClick={onClickHandler}>Submit</button>
        <div>

                {state.boxes.map((box, index) => 
                <StyledBox
                    box = {box}
                ></StyledBox>
                )}
            </div>
        </div>
    )

};

export default BoxGenerator;