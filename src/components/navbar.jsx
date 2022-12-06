import React, { Component } from 'react';

//there is no 'state' in this class component. then we can use Stateless Functional Component. shortcut => sfc

const NavBar = ({totalCounters}) => { //like class component, we don't need this.props.totalCounters. just add props as a parameter, but usng object destructuring, we just need to add {totalCounters} as parameter
   
    return (<nav class="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar
          <span className='badge badge-pill badge-secondary'>{totalCounters}</span>
          </a>
        </div>
      </nav>);//instead of props.totalCounters , we can use {totalCounters} using object destructuring
  
}
 
export default NavBar;