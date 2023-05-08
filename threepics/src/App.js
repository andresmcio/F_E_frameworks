import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Feed from './components/pages/Feed';


function App() {
  return (
    <div className="App">
      <Header />
      <main className="container-fluid">
        <Feed />
      </main>
    </div>
  );
}

export default App;
