import React from 'react'
import '../index.css'
  
function MyNavbar(props) {

  return (
    <>
    <nav className="navbar bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand text-white">Silver Screening</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2 rounded bg-dark text-light" type="search" placeholder="Search..." aria-label="Search" value={props.value} onChange={(e)=>props.setSearchInput(e.target.value)} id="search"/>
      <button className="btn btn-custom-primary rounded-circle" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-search mb-1"  viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
    </form>
  </div>
</nav>
    </>
  )
}


export default MyNavbar
