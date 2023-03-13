import { useState, useEffect } from "react";
import DisplayText from "./DisplayText";


const GettingData = () => {
    const [inputValue, setInputValue] = useState('');
    const [receivedData, setReceivedData] = useState({});
    
    // useEffect(()=> {
    //     fetch(`https://api.github.com/users/${inputValue}`)   
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     setReceivedData(data);
    // })
    // }, [inputValue]);
    
    const handleSubmit = (event) => {
            event.preventDefault();
 
    };
    
    const fetchData = () => {
        fetch(`https://api.github.com/users/${inputValue}`)   
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setReceivedData(data);
    })
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <div className="container">
            <h1>Get the Data</h1>
            <form onSubmit={handleSubmit}>
                <div className="user">
                <label>
                <input 
                type="text" 
                id="userName"
               value={inputValue} 
                onChange={handleChange}
                />
                </label>
                <button onClick={fetchData} className="btn-user">Look for User</button>
                </div>
            </form>
            </div>
            <DisplayText sendValue={receivedData}/>
        </div>
    );
};

export default GettingData;