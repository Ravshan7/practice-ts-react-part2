import React, {useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from "axios";
import List from "../components/List";
import TodoItem from "../components/TodoItem";

const TodoPage = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        getTodos()
    }, [])


    async function getTodos() {
        try {
            const {data} = await axios.get<ITodo[]>('http://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <List items={todos} renderItems={(todo: ITodo) => <TodoItem item={todo} />} />
        </div>
    );
};

export default TodoPage;
