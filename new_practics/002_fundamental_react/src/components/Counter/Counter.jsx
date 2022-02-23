import React, {useState} from 'react';

const Counter = () => {
    const [likes, setLikes] = useState(10)
    const [value, setValue] = useState(0)
    const increment = () => setLikes(likes + value)
    const decrement = () => setLikes(likes - value)

    return (
        <div>
            <div className={"likes"}>
                {likes} | {value}
            </div>
            <div>
                <input onChange={event => setValue(Number(event.target.value))} value={value}/>
                <button type={"button"} onClick={increment}>+</button>
                <button type={"button"} onClick={decrement}>-</button>
            </div>
        </div>
    );
};

export default Counter;
