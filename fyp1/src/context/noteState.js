import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const [token, setToken] = useState("");

    const [id, setId] = useState();
    const [creatername, setcreatername] = useState("")

    const [messege, setMessege] = useState([]);

    const reset = () => {
        setMessege([]);
    }


    console.log("inside context")


    return (
        <NoteContext.Provider value={{ token, setToken, id, setId, creatername, setcreatername, reset, messege, setMessege, }}>{props.children}</NoteContext.Provider>
    )

}

export default NoteState;