import logo from './logo.svg';
import './styles/App.css';
import Bar from './pages/Navbar';
import background from './images/background.jpg'
import logo3D from './images/logotype-3d.png'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img src={background} className="background" alt="background" />
        <img src={logo3D} className='logo-3d' alt="logo-3d" />
      </div>
      <Bar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
