import store from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import firebase from 'firebase';
// import allReducer from './store/store';
var config = {
    apiKey: "AIzaSyCZG998rIBRduqrSVSL9ydbztQMNiZQHYY",
    authDomain: "react-todo-ee7a4.firebaseapp.com",
    databaseURL: "https://react-todo-ee7a4.firebaseio.com",
    projectId: "react-todo-ee7a4",
    storageBucket: "",
    messagingSenderId: "1068529507522"
  };
  firebase.initializeApp(config);


ReactDOM.render(<div>
    <Provider store={store}>
   <App />
   </Provider>
   </div>,
    document.getElementById('root')
);
