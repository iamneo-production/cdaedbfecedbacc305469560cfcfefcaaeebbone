import React from 'react';

function Greeting ()
{
    const Name = (props) =>
    {
        console.log('{props.name}');
    }
    return(
        <div>
            <h1>Hey!!! Greeting</h1>
            <form className="greet">
                <label for="name">Enter your name:</label>
                <input placeholder="User" id="name"></input>
                <button type="submit" onClick={Name}>Say Hello</button>
            </form>
            {/* <div> Name: {props.name} </div> */}
        </div>
    )
}