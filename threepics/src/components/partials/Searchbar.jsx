import { useState } from "react";

const Searchbar = ({onSearch}) => {

    const handleInputChange = (event) => {
      onSearch(event.target.value);
    };
    
    return (
      <form className="form my-3 mb-5" style={{width: '30vw'}}>
        <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={handleInputChange}/>
        <button className="btn" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
      </form>
    );
  };
  
  export default Searchbar;