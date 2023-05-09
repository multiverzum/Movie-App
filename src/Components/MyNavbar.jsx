import React from 'react';
import '../index.css';
function MyNavbar(props) {
  const { searchInput, setSearchInput } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (


    <nav class="navbar px-4 navbar-expand-lg navbar-dark shadow bg-custom-dark">
      <a class="navbar-brand p-2" href="/">SilverScreen</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <form onSubmit={handleSubmit} id='search-input-form'>
        <input type="text"
          className='bg-white form-control rounded-lg w-100 p-2 px-3'
          placeholder="Search by title, character or genre"
          aria-label="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} />
      </form>
      <div class="collapse navbar-collapse justify-content-center">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link bold color-primary" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link bold text-white" href="/">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link bold text-white" href="/">Pricing</a>
          </li>

        </ul>
      </div>
      <div>
        <a class="btn btn-primary ml-4" href="/register">Sign Up</a>
      </div>

    </nav>





  );
}

export default MyNavbar;
