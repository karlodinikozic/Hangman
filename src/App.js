import React, { useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Main from './components/Main';
import { useDispatch } from 'react-redux'
import './app.css'
import { login } from './features/user';

function App() {



  const dispatch = useDispatch()

  const checkLoginName = async()=>{
    const name = await prompt("Please enter Your name")
    if(name=="" || name ==null){
      alert("To proceed you must enter your name")
      return checkLoginName()
    }
    return name
  }

  useEffect(async ()=>{
    const name = await checkLoginName()

    dispatch(login({name}))

  },[])

  return (
    <div className="App">

      
      <Router> 
        <Switch>
          <Route exact path="/"  >
            <Main/>

          </Route>

        </Switch>
      </Router>      
    </div>
  );
}

export default App;
