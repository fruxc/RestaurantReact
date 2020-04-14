import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Confusion Restaurant</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Confusion Restaurant</h1>
                <p>
                  We take inspiration from the World's best cuisine, and create
                  a unique fusion experience. Our lipsmacking creation will
                  tickle your culinary sense!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
