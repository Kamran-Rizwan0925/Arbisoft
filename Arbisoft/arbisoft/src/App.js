import './App.css';
import {BrowserRouter,Switch, Route, Redirect} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './footer';
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/service' component={Service}></Route>
      </Switch>
      <Redirect to='/'></Redirect>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );
}

export default App;
