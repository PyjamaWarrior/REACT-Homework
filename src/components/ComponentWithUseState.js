import React, {useEffect, useState} from "react";

export default function ComponentWithUseState() {
    const [user, setUser] = useState(null);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
            .then((response) => response.json())
            .then(value => setUser(value));
    }, [counter]);

    const counterInc = () => setCounter(prev => prev + 1);

    const counterDec = () => setCounter(prev => prev - 1);

    const counterReset = () => setCounter(prev => prev = 0);

    return (
        <div>
            <button onClick={counterInc}>inc</button>
            <button onClick={counterDec}>dec</button>
            <button onClick={counterReset}>reset</button>
            <h1>Counter value: {counter}</h1>
            <h3>user will be displayed only if counter is value between 1 and 10</h3>
            <hr/>
            {
                !!user && (
                    <div>
                        <h2>{user.id}</h2>
                        <h2>{user.name}</h2>
                    </div>
                )
            }
            <hr/>
        </div>
    );
}