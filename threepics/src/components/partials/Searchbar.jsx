const Searchbar = () => {

    const handleSearch = (e) => {
      e.preventDefault();
      console.log(e.target[0].value);
    }
    
    return (
      <form className="form my-3 mb-5" style={{width: '30vw'}} onSubmit={handleSearch}>
        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
      </form>
    );
  };
  
  export default Searchbar;