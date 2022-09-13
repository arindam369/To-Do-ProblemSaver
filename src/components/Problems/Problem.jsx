import ProblemDesc from "./ProblemDesc";
import "./Problem.css";

export default function Problem(props) {

    let problemArray = props.problems;   

    // onDelProblem: it will call and tell its parent(App.js) that my child told me something is deleted there 

    return (
        <div>
            <div className="problems-page">
                <div className="problems-container">
                    <h4 className="problem-head">Your Problems</h4>

                    {
                        problemArray && (problemArray.length === 0 ? <p className="no-problem-text">No Problem Found</p> : problemArray.map((problem) => {
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