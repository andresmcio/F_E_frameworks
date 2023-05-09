import Nav from '../components/partials/Nav';
import Searchbar from '../components/partials/Searchbar';

const Header = ({onNavClick, onSearch}) => {

  const handleSearch = (value) => {
    onSearch(value);
  };

  return (
    <header className='d-flex justify-content-center' style={{flexWrap: 'wrap'}}>
      <Nav onNavClick={onNavClick}/>
      <Searchbar onSearch={handleSearch} />
    </header>
  );
};

export default Header;