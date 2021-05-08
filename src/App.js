
import './App.css';
import Navbar from './Components/Navbar/index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './Components/Footer/index';
import Home from './Components/HomeSection/index';
import Plans from './Components/Plans';
import Info from './Components/InfoSection';
import Page from './pages';


function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Page}/>
          <Route path='/about' exact component={Home}/>
          <Route path='/discover' exact component={Info} />
          <Route path="/plans" exact component={Plans}/>
          <Route path="/signUp" exact component={Plans}/>
        </Switch>
        <Footer />
    </Router>
    
  );
}

export default App;