import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from "react-router-dom";


export default function Navbar(props) {
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
  <a className="navbar-brand" href="#">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">{props.aboutText}</a>
      </li>
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div className="d-flex ms-auto order-5">
            <div className="d-flex">
                  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                    <label label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable/Disbale Dark Mode</label>
                  </div>
            </div>
    </div>
  </div>
</div>
</nav>
  )
}

Navbar.propTypes={title: PropTypes.string.isRequired,  //we use isrequired : coz it will give error if we dont use
                aboutText: PropTypes.string.isRequired}
Navbar.defaultProps={
    title: "Enter a titile",                //we use this incase we dont pass any props value
    aboutText: "Enter a text"
}