import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import './styles/App.css';

const App = () => {
  return (
   <>
   <div className='app'>
    <Header />
    <Body />
    <Footer />
   </div>
    
   </>
  )
}

export default App;