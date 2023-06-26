import axios from 'axios';
import './App.css';
import Home from './views/Home';

axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
