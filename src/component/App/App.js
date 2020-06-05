import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import AppRouter from '../AppRouter/AppRouter';
import { BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <div className="container" id="main-content">
          <AppRouter />
          <Footer></Footer>
        </div>
      </div>
    </Router>

  );
}

export default App;
