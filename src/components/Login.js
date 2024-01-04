import React from 'react';
import {GoogleOutLine, FacebookOutLined} from '@ant-design/icons';
import "firebase/app";
import {auth} from './Firebase';
import firebase from 'firebase/app';
const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to our Chat App</h2>
        <div 
            className="login-button-google"
            onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider)}
        >
           Sign In with Google
        </div>
        <br />
        <div 
            className="login-button-facebook"
            onClick={()=>auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider)}
        >
           Sign In with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
