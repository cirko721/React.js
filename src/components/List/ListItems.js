import "./ListItems.css";

const ListItems = (props) => {
    return (
        <ul>
            <li className="list">
                <span className="status">{props.status}</span>
                <h3>{props.todo}</h3>
                <button onClick={props.onRemove}>Remove</button>
            </li>
        </ul>
    )
};

export default ListItems;