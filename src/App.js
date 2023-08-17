import Counter from './components/Counter';
import React from 'react';
import Header from './components/Header'
import Auth from './components/Auth'
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile'

function App() {
  const Authn=useSelector(state => state.auth.isAuthenticated)

  return (
    <React.Fragment>\
      <Header/>
      {!Authn && <Auth/>}
      {Authn && <UserProfile/>}
    <Counter />
    </React.Fragment>
  );
}

export default App;
