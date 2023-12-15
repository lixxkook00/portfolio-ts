import axios from 'axios';
import './App.css';
import Routes from 'routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  return (
    <div className="App">
      <Routes />

      <ToastContainer />
    </div>
  );
}

export default App;
