import React, {Component} from 'react';
import {Nav,NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';
class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <div className='container mt-4 mb-4 Header01'>
                   {/*} <div className='row'> */}
                        <Nav justified fill pills tabs >
                            <NavItem>
                                <Link style={{fontSize:'19px',color:'white'}} to="/newDish">
                                49-61a
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{fontSize:'19px',color:'white'}}  to="/appertizer">
                                1-6d
                                </Link>
                            </NavItem>
                            <NavItem> 
                                <Link style={{fontSize:'19px',color:'white'}} to="/pho">
                                7-15
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{fontSize:'19px',color:'white'}} to="/bun">
                                16-24
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{fontSize:'19px',color:'white'}} to="/vermicelli">
                                26-40
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{fontSize:'19px',color:'white'}} to="/com">
                                34-48
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{fontSize:'19px',color:'white'}} to="/drink">
                                
                                Drink
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{fontSize:'19px',color:'white'}} to="sideOrder">
                                SideOrder
                                </Link>
                            </NavItem>
                        </Nav>    
                    {/* </div> */}
                </div> 
            </React.Fragment>
        )
    }
}

export default Header;