import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Menu from './Menu';
import HeaderBlock from './HeaderBlock';
import Login from './Login';
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, login, logout } from './features/userSlice'
import Signup from './Signup';
import TeslaAccount from './TeslaAccount';
import { auth } from './firebase'

function App() {

  const user = useSelector(selectUser)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //User is signed in
        dispatch(login({
          email: userAuth.email,
           uid: userAuth.user.uid,
           dispatch: userAuth.user.displayName,
        }))
      } else {
        //User is signed out
        dispatch(logout())
      }
    })
  },[dispatch])

  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
     {isMenuOpen && <Menu/>}
     <HeaderBlock />
      </Route>
      <Route exact path="/login">
        {user ? <Redirect to="/teslaaccount" /> : <Login/>}
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/teslaaccount">
      {!user ? ( <Redirect to="/login" /> ) : (
        <>
        <TeslaAccount isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        {isMenuOpen && <Menu/>}
        </>
      )}
      </Route>
      </Switch>
    </div>
    </Router>
  );  
}

export default App;
