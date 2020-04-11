import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './component/MenuComponent';


function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Confusion Restaurant</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
