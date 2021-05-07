import React,{Component} from 'react';
import {Link as LinkR} from 'react-router-dom';
import NavbarElements from './NavbarElements';
import './Navbar.css'

class Navbar extends Component {
    state ={
         cliked: false
        }
        handleClick = () =>{
            this.setState({ cliked: !this.state.cliked})
        }
    render() {
      
  
      return (
        <header>
          <nav className="Nav">
              <div className="NavbarContainer"> 
          <LinkR className="NavLogo" to='/'>spark &nbsp; <i className="fas fa-car"></i>   </LinkR>
          <div className="icon" onClick={this.handleClick}>
              <i className={this.state.cliked ? 'fas fa-times' : 'fas fa-bars'}> </i>
          </div>
              <ul className={this.state.cliked ? 'NavMenu active' : 'NavMenu'}>
              {NavbarElements.map((item, index) =>{
                      return(
                  
                <li className="NavItem" key={index}>
                    <LinkR to={item.path} className={item.cName} activeClass="active">
                    {item.title}
                    </LinkR>
                </li>
                
                )

    })}
              
              </ul>
              <nav className="NavBtn">
                  <LinkR to="/signIn" className='NavBtnLink'>Sign In</LinkR>
              </nav>
              </div>
            </nav>  
            
        </header>
      );
    }
  }
  
  export default Navbar;

/* {NavbarElements.map((item, index) =>{
                      return(
                  
                <li className="NavItem" key={index}>
                    <LinkS to="/about" className={item.cName}>
                    {item.title}
                    </LinkS>
                </li>
                
                )

    })}*/