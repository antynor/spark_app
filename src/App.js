
import './App.css';
import Navbar from './Components/Navbar/index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './Components/Footer/index';
import Home from './Components/Discover/index';
import Plans from './Components/Plans';
import Info from './Components/InfoSection';
import Page from './pages/index';
import SignUp from './Components/Discover/joinnow';


function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Page}/>
          <Route path='/about' exact component={Info}/>
          <Route path='/discover' exact component={Home} />
          <Route path="/plans" exact component={Plans}/>
          <Route path="/signUp" exact component={SignUp}/>
        </Switch>
        <Footer />
    </Router>
    
  );
}

export default App;