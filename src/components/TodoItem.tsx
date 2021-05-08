import React, {FC} from 'react';
import {ITodo} from "../types/types";

interface ITodoItem {
    item: ITodo;
}


const TodoItem: FC<ITodoItem> = (props) => {
    return (
        <div>
            <input type="checkbox" checked={props.item.completed} />
            <p>{props.item.id} {props.item.title}</p>
        </div>
    )
}

export default TodoItem;
