
import './App.css';
import Footer from './components/header & footer page/Footer';
import Header from './components/header & footer page/Header';
import Home from './components/home page/Home';
import Project from './components/projects page/Project';
import Service from './components/services page/Service';
import Backend from './components/skills page/Backend';
import Frontend from './components/skills page/Frontend';

function App() {
  return (
    <>
     <Header/>
     <Home/>
     <Frontend/>
     <Backend/>
     <Project/>
     <Service/>
     <Footer/>
    </>
  );
}

export default App;
