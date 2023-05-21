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
                                <Link style={{fontSize:'15px',color:'white'}} to="/newDish">
                                49-61a
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{fontSize:'15px',color:'white'}}  to="/1-6d">
                                1-6d
                                </Link>
                            </NavItem>
                            <NavItem> 
                                <Link style={{fontSize:'15px',color:'white'}} to="/7-15">
                                7-15
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{fontSize:'15px',color:'white'}} to="/16-25">
                                16-24
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{fontSize:'15px',color:'white'}} to="/26-36">
                                26-36
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{fontSize:'15px',color:'white'}} to="/37-48">
                                37-48
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{fontSize:'15px',color:'white'}} to="/drink">
                                
                                Drink
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{fontSize:'15px',color:'white'}} to="sideOrder">
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