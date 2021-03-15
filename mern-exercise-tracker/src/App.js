import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/boostrap.min.css";

import Navbar from "./components/navbarComponent"
import ExercisesList from "./components/exercisesListComponent";
import EditExercise from "./components/editExerciseComponent";
import CreateExercise from "./components/createExerciseComponent";
import CreateUser from "./components/createUserComponent";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
          <br/>
            <Route path="/" exact component={ExercisesList} />
            <Route path="/edit/:id" component={EditExercise} />
            <Route path="/create" component={CreateExercise} />
            <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
