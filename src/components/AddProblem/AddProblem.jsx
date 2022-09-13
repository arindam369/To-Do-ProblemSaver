import React, {useState} from 'react';
import "./AddProblem.css";

let problemArray = [];

export default function AddProblem(props){
    
    const [problemName, setProblemName] = useState("");
    const [problemLink, setProblemLink] = useState("");
    function handleName(e){
        e.preventDefault();
        setProblemName(e.target.value);
    }
    function handleLink(e){
        e.preventDefault();
        setProblemLink(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        const problem = {
            name: problemName,
            link: problemLink,
            _id: Math.random().toString()
        }
        setProblemName("");
        setProblemLink("");
        
        problemArray.push(problem);
        localStorage.setItem("ProblemSaver", JSON.stringify(problemArray));
        props.onUpdateProblems();   // call its parent(App.js) that something is added here
    }

    if(localStorage.getItem("ProblemSaver")){
        problemArray = JSON.parse(localStorage.getItem("ProblemSaver"));    // fetching problems from LocalStorage
    }

    return (
        <div className="form-page">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="problemName" value={problemName} placeholder="Enter Problem Name" onChange={handleName} required/>
                    <input type="text" name="problemLink" value={problemLink} placeholder="Enter Problem Link" onChange={handleLink} required/>
                    <button>Add Problem</button>
                </form>
            </div>
        </div>
    );
}