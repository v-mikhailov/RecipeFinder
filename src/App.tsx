import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Components/MainPage';
import DishDetail from './Components/DishDetail';


const App = () => {
  return (
    <Router>
      <div className="page-container">
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path="/api/dish/:id" component={DishDetail}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;