import React, {MouseEvent, ChangeEvent, DragEvent, FC, useState, useRef} from "react";
import {log} from "util";

export const Events: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)

    const inputRef = useRef<HTMLInputElement>(null)

    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => { // Укажемт что это event ChangeEvent по generic типу HTMLInputElement потому что мы работае с input
        setValue(e.target.value)
    }


    const handlerClick = (e: MouseEvent<HTMLButtonElement>) => { // Укажемт что это event MouseEvent потому что мы работае мышкой. Tо что касается мышкой тогда нам нужно использовать MouseEvent event
        console.log(inputRef.current?.value)
        inputRef.current?.focus()
    }

    const handlerDrag = (e: DragEvent<HTMLDivElement>) => {
        console.log('div')
    }

    const handlerDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        console.log('handlerDrop')
    }


    const handlerDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const handlerDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    return (
        <div>
            <input onChange={handlerChange} value={value} type="text" placeholder="Управляемый"/>
            <input ref={inputRef} type="text" placeholder="Неуправляемый"/>
            <button onClick={handlerClick}>ojr</button>
            <div
                onDrag={handlerDrag} /* onDrag служит нам для перетаскивание элемена*/
                draggable style={{width: 200, height: 200, background: 'red'}}/>
            <div
                onDrop={handlerDrop} // Ondrop происходит, когда перетаскиваемый элемент или выделенный текст отбрасывается на допустимую цель перетаскивания.
                onDragLeave={handlerDragLeave}// onDragLeave когда мы вышли из нутри нашего блока
                onDragOver={handlerDragOver} // onDragOver когда мы будем в нутри нашего блока
                style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: '20px'}}/>
        </div>
    )
}