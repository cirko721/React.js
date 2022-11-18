import React, {useState} from "react";
import Form from "./Form";
import "./NewTodo.css";

const NewTodo = (props) => {
    const [editing, setEditing] = useState(false);

    const dataResult = (datas) => {
        const data = {
            ...datas,
        };
        props.newData(data);
        setEditing(false);
    };

    const startEdit = () => {
        setEditing(true);
    };

    const stopEdit = () => {
        setEditing(false);
    };

    return (
        <div className="new-todo">
            {!editing && <button onClick={startEdit}>Add New Todo</button>}
            {editing && <Form data={props.data} resultData={dataResult} onCancel={stopEdit} />}
        </div>
    )
};

export default NewTodo;