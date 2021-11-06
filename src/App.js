import React, { useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import Login from './components/Login';
import Main from './components/Main';
import { useDispatch, useSelector } from 'react-redux'
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
            {/* {
              userName == "" ? <Redirect to='/login'/> : <Main /> 
            } */}
          </Route>
          {/* <Route exact path="/login" component={Login} /> */}
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
