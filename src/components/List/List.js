import "./List.css";
import ListItems from "./ListItems";

const List = (props) => {
    return (
        <div className="todo-list">
            {props.data.map(el => <ListItems todo={el.todo} status={el.status} key={el.todo} onRemove={props.onRemove} />)}
        </div>
    )
};

export default List;