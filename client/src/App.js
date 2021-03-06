import React from 'react';
import './App.css';
import {HomePage} from "./page/HomePage";
import {Route, Switch} from "react-router-dom";

const HatsPage = () => (
    <div>
        <h1>HATS PAGE </h1>
    </div>
);

function App() {
  return (
    <div className="app">
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/hats' component={HatsPage} />
        </Switch>
    </div>
  );
}

export default App;
