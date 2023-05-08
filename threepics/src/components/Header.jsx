import Nav from '../components/partials/Nav';
import Searchbar from '../components/partials/Searchbar';

const Header = ({onNavClick}) => {
  return (
    <header className='d-flex justify-content-center' style={{flexWrap: 'wrap'}}>
      <Nav onNavClick={onNavClick}/>
      <Searchbar />
    </header>
  );
};

export default Header;