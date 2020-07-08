import React from "react";
import { Link } from 'react-router-dom';

import './css/Navbar.css'

class Navbar extends React.Component{

  render() {
    return (
      <div className="father fixed-top d-print-none">
        <Link className="btn son" to="/">
          HOME
        </Link>
        <Link className="btn son" to="/">
          Uno
        </Link>
        <Link className="btn son" to="/popu">
          Dos
        </Link>
        <Link className="btn son" to="/tres">
          Tres
        </Link>
      </div>
    );
  }
}
export default Navbar;