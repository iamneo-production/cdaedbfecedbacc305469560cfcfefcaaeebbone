import React from 'react';

function Greeting (props)
{
    // const[name,SetName] = useState('');
    return(
        <div>
            <h1>Hey!!! Greeting</h1>
            <form className="greet">
                <label for="name">Enter your name:</label>
                <input placeholder="User" id="name"></input>
                <button type="submit" onClick={}>Say Hello</button>
            </form>
            <div> Name: {props.name} </div>
        </div>
    )
}