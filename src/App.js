/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './App.css';
import Header from './Compoents/Header/Header';
import Sidebar from './Compoents/Sidebar/Sidebar'
import Mail from './Compoents/Mail/Mail';
import EmailList from './Compoents/EmailList/EmailList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SendMail from './Compoents/compose/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Compoents/Login/Login';
import { auth } from './firebase';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }))
      }
    })
  }, []);

  return (
    <Router>
      {!user ?
        (
          <Login />
        ) :
        (
          <div className="app">
            <Header />
            <div className="app-body">
              <Sidebar />
              <Switch>
                <Route path="/mail">
                  <Mail />
                </Route>
                <Route path="/">
                  <EmailList />
                </Route>
              </Switch>
            </div>
            {sendMessageIsOpen && <SendMail />}
          </div>
        )
      }
    </Router>
  );
}

export default App;
