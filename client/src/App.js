import './App.css';
import {Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ProtectRouter from './components/ProtectRouter';
import AdminProtectRoutre from './components/AdminProtectRoutre';
import AdminDashboard from "./pages/AdminDashboard";
function App() {
  return (
    <div>
      {<Navbar />}
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectRouter />}>
          <Route path="/Profile" element={<Profile />} />{" "}
        </Route>

        <Route element={<AdminProtectRoutre />}>
          <Route path="/dashboard" element={<AdminDashboard />}></Route>{" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;


