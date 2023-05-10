import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Feed from './components/pages/Feed';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import { useState, useEffect } from 'react';
const data =  require('./data/posts.json');


function App() {

    const posts = data;

  let repetitions = Math.floor(Math.random() * 5) + 3;
  let randomPosts = [];

  for (let i = 0; i < repetitions; i++) {
      randomPosts.push(posts[i]);
  }

  const [postList, setPostList] = useState(randomPosts);
  const [section, setSection] = useState('feed');

  const handleNavClick = (section) => {
        setSection(section);
  };

  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);


  const handleLogin = async () => {
    try {
      const response = await fetch('https://three-points.herokuapp.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'john',
          password: 'P4ssW0rd!#',
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };
  
  

  return (
    <div className="App">
      <Header onNavClick={handleNavClick} onSearch={handleSearch} />
      <main className="container-fluid">
        {isLoggedIn ? (
          section === 'feed' ? (
            <Feed posts={postList} searchValue={searchValue} />
          ) : (
            <Profile
            avatar={'https://ca-times.brightspotcdn.com/dims4/default/d34e9c3/2147483647/strip/true/crop/3072x2147+0+0/resize/1200x839!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F06%2Fe3%2F6036664d2e3cff053944a028040a%2Fcfdj8kpbg-bz-elgrfd-d-sjiuonzntohcpnldjpixbld18vcugzrshc5msl5hvdmh7s1e6cmliulgsaqs1x308wcf0j-5h4ier1r-rlntbdx3dz0eln81a0st2yirbtatn0q8v0m7w1w5g6vrhzxuwoculackddpmqdhlxk-7-fvwq01l-lwnvcqzxx45elxjd-0ktt0cdlfxvodhh4yzusaedzy2q3v4ard4rubs1wl5bijtehxum1d7r2o5i-zqh-rtoizy-eoolfyzrscc8mdehunqw2bj-kae6misjb4qedoecr-fbhazoo72yxgsy-f8aozyzq9uan2g9zlbr9ve1iz-m9q-a-fddipeuyqtja-l74abw8zmwbaqszxbakrezqkjff4e5or4nmg0aadh0'}
            username={'@anyataylorjoy'}
            bio={'Anya Taylor-Joy | Dragicorn Space Oddity 🛸🍒🎆 | https://www.harpersbazaar.com/uk/fashion/fashion-news/a41896179/anya-taylor-joy-actress-cover-interview/'}
            />
          )
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </main>
    </div>
  );
  
}

export default App;
