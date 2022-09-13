import "./Problem.css";
export default function ProblemDesc(props){
    let imgLink = "https://s2.googleusercontent.com/s2/favicons?domain=" + props.link;
    let problemLink = props.link;
    let name = props.name;
    let id = props.id;
    console.log(problemLink);
    let newProblemArray = [];
    let problemArray = JSON.parse(localStorage.getItem("ProblemSaver"));

    function handleRemove(problem_id){
        newProblemArray = problemArray.filter(problem => problem._id !== problem_id);
        localStorage.setItem("ProblemSaver", JSON.stringify(newProblemArray));
        props.onDelProblem();   // call and tell parent(Problem.jsx) that something is deleted here
        problemArray = newProblemArray;
    }

    return (
        <div className="problem-desc">
            <img src={imgLink} alt="bookmark"/>
            <a href={problemLink}>{name}</a>
            <button onClick={()=>{handleRemove(id)}}>Remove</button>
        </div>
    );
}