import React, {useState} from 'react';
import {Greet} from "../../wailsjs/go/main/App";

const Test : React.FC = () => {
    const [resultText, setResultText] = useState("Please enter your name below üëá");
    const [name, setName] = useState('');
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    return (
        <React.Fragment>
            <div id="result" className="result">{resultText}</div>
            <div id="input" className="input-box">
                <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text"/>
                <button className="btn" onClick={greet}>Greet</button>
            </div>
        </React.Fragment>
    );
}

export default Test;