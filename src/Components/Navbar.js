import React from "react";
import { Link, NavLink } from 'react-router-dom';

import './css/Navbar.css'

class Navbar extends React.Component{

  render() {
    return (
      <div className="father fixed-top d-print-none">
        <NavLink exact className="son" activeClassName="is-active" to="/">
          HOME
        </NavLink>
        <NavLink className="son" activeClassName="is-active" to="/uno">
          Uno
        </NavLink>
        <NavLink className="son" activeClassName="is-active" to="/dos">
          Dos
        </NavLink>
        <NavLink className="son" activeClassName="is-active" to="/tres">
          Tres
        </NavLink>
      </div>
    );
  }
}
export default Navbar;