import React from 'react';
import './App.css';  // Import the CSS file
import store from './Redux/store.js';
import { Routeroot } from './routes/index.jsx';
import { Provider } from 'react-redux';


const App = () =>{
  return (
    <Provider store ={store}>
  <Routeroot/>
  </Provider>
)  
  
};
export default App; 