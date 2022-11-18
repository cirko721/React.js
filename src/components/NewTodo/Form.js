import React, {useState} from "react";
import "./Form.css";

const Form = (props) => {

    const [title, setTitle] = useState("");

    const changeHandler = (event) => {
        setTitle(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const todoData = {
            todo: title,
            status: "pending",
        };
        props.resultData(todoData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-insert">
                <input type="text" placeholder="Enter Todo..." onChange={changeHandler} />
            </div>
            <div className="form-actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Todo</button>
            </div>
        </form>
    )
};

export default Form;