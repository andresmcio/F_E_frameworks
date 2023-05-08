import Nav from '../components/partials/Nav';
import Searchbar from '../components/partials/Searchbar';

const Header = () => {
  return (
    <header className='d-flex justify-content-center' style={{flexWrap: 'wrap'}}>
      <Nav />
      <Searchbar />
    </header>
  );
};

export default Header;