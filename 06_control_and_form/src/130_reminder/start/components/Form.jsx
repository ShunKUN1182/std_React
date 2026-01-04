import { useState } from "react";

const Form = ({ createTodo }) => {
    const [entaredTodo, setEntaredTodo] = useState("");
    const changeTodo = (e) => {
        setEntaredTodo(e.target.value);
    };
    const addTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: entaredTodo,
        };
        createTodo(newTodo);
        setEntaredTodo("");
    };
    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" value={entaredTodo} onChange={(e) => changeTodo(e)} />
                <button onClick={addTodo}>追加</button>
            </form>
        </div>
    );
};

export default Form;
