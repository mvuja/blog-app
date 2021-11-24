import React from "react";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ButtonComponent from './components/Button/Button';
import Main from './components/Main/Main';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

const App = () => {


    return (
        <div>
            <Navbar />
            <Hero />
            <ButtonComponent />
            <Main />
            <Card />
            <Footer />
        </div>
        
    )
}


export default App