
import './App.css';
import Navbar from './Components/Navbar/index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './Components/Footer/index';
import Home from './Components/HomeSection/index';
import Plans from './Components/Plans';
import Info from './Components/InfoSection';


function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={Info}/>
          <Route path='/discover' exact component={Info} />
          <Route path="/plans" exact component={Plans}/>
          <Route path="/signUp" exact component={Plans}/>
        </Switch>
        <Footer />
    </Router>
    
  );
}

export default App;