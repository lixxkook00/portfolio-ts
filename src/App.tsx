import axios from 'axios';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from 'routes/router';

axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  return (
    <Router>
      <AppRoutes />
      <ToastContainer />
    </Router>
  );
}

export default App;
