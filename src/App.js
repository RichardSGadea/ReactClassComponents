import './App.css';
import Navigation from './components/Navigation';
import Index from './view/Index';

function App() {
  return (
    <div className="App">
      <header className="App-header container-fluid">
        <div className='col-4'>
          <img src='../public/favicon.ico'></img>
        </div>
        <div className='col-4'>
          <h1>Todos App</h1>
        </div>
        <div className='col-4'>
          <Navigation />
        </div>
      </header>
      <body>
        <Index />
      </body>
    </div>
  );
}

export default App;
