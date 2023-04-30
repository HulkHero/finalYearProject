import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {


    const [messege, setMessege] = useState([]);
    const [data, setData] = useState(null)
    const reset = () => {
        setMessege([]);
    }


    console.log("inside context")


    return (
        <NoteContext.Provider value={{ reset, messege, setMessege, data, setData }}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;