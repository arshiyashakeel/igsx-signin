import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignIn from './components/SignIn';

function App() {
  return (
    <div>
      <Navbar/>
      <SignIn/>
      <Footer/>
    </div>
  );
}

export default App;
