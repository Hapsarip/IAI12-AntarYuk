import './App.css';
import Nav from './components/nav';
import LoginPage from './pages/Login';

function App() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <LoginPage/>
    </div>
  );
}

export default App;
