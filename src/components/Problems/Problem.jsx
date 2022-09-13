import ProblemDesc from "./ProblemDesc";
import "./Problem.css";
import { useState } from "react";

export default function Problem(props) {

    let problemArray = props.problems;   

    // onDelProblem: it will call and tell its parent(App.js) that my child told me something is deleted there 

    const [searchedData, setSearchedData] = useState("");

    function handleChange(e){
        setSearchedData(e.target.value);
    }

    return (
        <div>
            <div className="problems-page">
                <div className="problems-container">
                    <h4 className="problem-head">Your Problems</h4>

                    <h4 className="search-bar">
                        <div className="search-box">
                            <input type="text" placeholder="What are you looking for?" value={searchedData} onChange={handleChange}/>
                            <button><img src="search.png" alt="img" /></button>
                        </div>
                    </h4>

                    {
                        problemArray && (problemArray.length === 0 ? <p className="no-problem-text">No Problem Found</p> : problemArray.filter((problem)=>{
                            if(searchedData.trim()===""){
                                return problem;
                            }
                            else if(problem.name.toLowerCase().includes(searchedData.trim().toLowerCase())){
                                return problem;
                            }
                        }).map((problem) => {
                            return (
                                <ProblemDesc key={problem._id} name={problem.name} link={problem.link} id={problem._id} onDelProblem={props.onDeleteProblem}/>
                            )
                        }))
                    }

                </div>
            </div>
        </div>
    );
}