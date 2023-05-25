import React, {Component} from 'react';
import {Nav,NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <div className='container mt-4 mb-4 Header01'>
                   {/*} <div className='row'> */}
                        <Nav justified fill pills tabs >
                            <NavItem>
                                <NavLink  activeStyle={{ backgroundColor: "green" }} style={{fontSize:'15px',color:'white', padding:'2px'}} to="/newDish">
                                49-61a
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  activeStyle={{ backgroundColor: "green" }} style={{fontSize:'15px',color:'white', padding:'2px'}}  to="/1-6d">
                                1-6d
                                </NavLink>
                            </NavItem>
                            <NavItem> 
                                <NavLink activeStyle={{ backgroundColor: "green" }} style={{fontSize:'15px',color:'white', padding:'2px'}} to="/7-15">
                                7-15
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeStyle={{ backgroundColor: "green" }} style={{fontSize:'15px',color:'white', padding:'2px'}} to="/16-25">
                                16-24
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeStyle={{ backgroundColor: "green" }} style={{fontSize:'15px',color:'white', padding:'2px'}} to="/26-36">
                                26-36
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeStyle={{ backgroundColor: "green" }} style={{fontSize:'15px',color:'white', padding:'2px'}} to="/37-48">
                                37-48
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeStyle={{ backgroundColor: "green" }} style={{fontSize:'15px',color:'white', padding:'2px'}} to="/drink">
                                
                                Drink
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeStyle={{ backgroundColor: "green" }} style={{fontSize:'15px',color:'white', padding:'2px'}} to="sideOrder">
                                SideOrder
                                </NavLink>
                            </NavItem>
                        </Nav>    
                    {/* </div> */}
                </div> 
            </React.Fragment>
        )
    }
}

export default Header;