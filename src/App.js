import React, { useState } from 'react';
import AddProblem from './components/AddProblem/AddProblem'
import Title from './components/Title/Title'
import Problem from './components/Problems/Problem';
import "./App.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  let problemArray = [];
  if (localStorage.getItem("ProblemSaver")) { // fetching problems from LocalStorage
    problemArray = JSON.parse(localStorage.getItem("ProblemSaver"));
  }

  const [myProblems, setMyProblems] = useState(problemArray);

  function handleProblemChange1() {  // add problem handled here
    setMyProblems(JSON.parse(localStorage.getItem("ProblemSaver")));
    toast.success("New problem added successfully");
  }
  function handleProblemChange2() {  // remove problem handled here
    setMyProblems(JSON.parse(localStorage.getItem("ProblemSaver")));
    toast.success("Problem removed successfully");
  }

  return (
    <div>
      <ToastContainer 
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover 
        theme='light'
        />


      <Title />
      <AddProblem onUpdateProblems={handleProblemChange1} />
      <Problem problems={myProblems} onDeleteProblem={handleProblemChange2} />

    </div>
  )
}