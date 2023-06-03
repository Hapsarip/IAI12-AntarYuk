import './App.css';
import { 
  HashRouter as Router,  
  Route, 
  Routes
} from 'react-router-dom'
import Nav from './components/nav';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import MakeOrder from './pages/Make-Order';
import History from './pages/History-Order';
import Tracking from './pages/Tracking-Order';

function App() {
  return (
    <div >
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/Login' element={<LoginPage/>} />
          <Route path='/Register'element={<RegisterPage/>} />
          <Route path='/MakeOrder' element={<MakeOrder/>} />
          <Route path='/History' element={<History/>} />
          <Route path='/Track' element={<Tracking/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
