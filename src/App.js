import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import {Dashboard} from './Components/Dashboard';
import { PrivateRoute } from './Components/Routes/PrivateRoute';
import { Login } from './Components/Login';

function App() {
  return (
   <Router>
     <Routes>
        <Route path='/' element={<PrivateRoute > <Dashboard /> </PrivateRoute>} />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </Router>
  );
}

export default App;