import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Navbar} from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products';
import { Contacts } from './pages/Contacts';
import {Cart} from "./pages/Cart";
import {SignIn} from "./pages/SignIn";
import Footer from './pages/Footer/Footer';
import { Button } from './components/Button/ Button';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Product" element={<Products/>} />
          <Route path="/Contacts" element={<Contacts/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/SignIn" element={<SignIn/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
 
export default App;
