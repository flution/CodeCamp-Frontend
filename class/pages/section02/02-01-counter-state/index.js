import { useState } from "react";

export default function CounterLetDocumnetPage() {
    
    const { count, setCount } = useState(0) {
    
    } 


    function onClickCountUP() {
        setCount(count + 1)
    }

    function onClickCountDown() {
        setCount(count - 1)
    }

    return (
        <div>
            <div id="qqq">{count}</div>
            <button onClick={onClickCountUP}>카운트 올리기!!!</button>
            <button onClick={onClickCountDown}>카운트 내리기!!!</button>
        </div>
    );

}