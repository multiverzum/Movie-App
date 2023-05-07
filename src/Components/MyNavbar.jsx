  import React from 'react';
  import '../index.css';
  function MyNavbar(props) {
    const { searchInput, setSearchInput } = props;
    const handleSubmit = (e) => {
      e.preventDefault();
    }
    return (
        <nav className="navbar navbar-dark bg-dark container-fluid">
    <div className="d-flex col-12 justify-content-center ">
      <a className="navbar-brand text-white px-4 fw-bold title">Silver Screening</a>
      <form className="container-fluid py-1" onSubmit={handleSubmit}> 
        <div className="input-group col-11">
          <input
            className="form-control rounded-pill px-4 text-light"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div className="input-group-append">
          </div>
        </div>
      </form>
    </div>
  </nav>
    );
  }

  export default MyNavbar;
