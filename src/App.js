import './App.css';
import { 
  BrowserRouter as Router,  
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
import UserProfil from './pages/User-Profil';

export default function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Dashboard/>} />
        <Route exact path='/Login' element={<LoginPage/>} />
        <Route exact path='/Register'element={<RegisterPage/>} />
        <Route exact path='/MakeOrder' element={<MakeOrder/>} />
        <Route exact path='/History' element={<History/>} />
        <Route exact path='/Track' element={<Tracking/>} />
        <Route exact path='/Profil' element={<UserProfil/>} />
      </Routes>
    </Router>
  )
}
