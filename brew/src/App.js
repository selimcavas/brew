import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './pages/Main';
import Order from './pages/Order';
import MyOrder from './pages/MyOrder';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/order" element={<Order />} />
        <Route path="/my-order" element={<MyOrder />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
