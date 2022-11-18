import React, {useState} from "react";
import "./App.css";
import List from "./components/List/List";
import NewTodo from "./components/NewTodo/NewTodo";

function App() {

  const dummyData = [
    {todo: "Feed Dogs", status: "pending"},
    {todo: "Feed Cats", status: "pending"},
    {todo: "Buy keyaboard", status: "pending"},
    {todo: "Learn React.js", status: "pending"},
  ];

  const [data, setData] = useState(dummyData);

  const newDummy = (enteredDummy) => {
    setData([enteredDummy, ...data]);
  };

  const handleRemoveItem = (index) => {
    let copy = [...data];
    copy.splice(index, 1);
    setData(copy);
  };

  return (
    <div className="App">
      <NewTodo data={dummyData} newData={newDummy} />
      <List data={data} onRemove={handleRemoveItem} />
    </div>
  );
}

export default App;
