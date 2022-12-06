import React, { Component } from 'react';

//there is no 'state' in this class component. then we can use Stateless Functional Component. shortcut => sfc

const NavBar = (props) => { //like class component, we don't need this.props.totalCounters. just add props as a parameter
   
    return (<nav class="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar
          <span className='badge badge-pill badge-secondary'>{props.totalCounters}</span>
          </a>
        </div>
      </nav>);
  
}
 
export default NavBar;