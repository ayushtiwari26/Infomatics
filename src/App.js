
import { useEffect, useState } from 'react';
import './App.css';
// import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Pages from './pages/Pages';
import landingImg from '../src/assets/images/loading.gif'
import Footer from './components/footer/Footer';
import MyNav from './components/navbar/MyNav';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
    {loading?

      (
      <div className="loader-container" style={{background:`url(${landingImg}) center no-repeat`}}>
      </div>)

    :

      (  
      <div className="App">
        <MyNav/>
        <Pages/>
        <Footer/>
      </div>)
      //kuch aur
    }
    </>
  );
}

export default App;
