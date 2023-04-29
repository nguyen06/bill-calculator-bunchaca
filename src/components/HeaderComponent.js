import React, {Component} from 'react';
import {Nav,NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';
class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <div className='container mt-4 mb-4'>
                   {/*} <div className='row'> */}
                        <Nav justified fill pills tabs >
                            <NavItem>
                                <Link style={{fontSize:'18px'}} to="/newDish">
                                New
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{fontSize:'18px'}}  to="/appertizer">
                                Appertizer
                                </Link>
                            </NavItem>
                            <NavItem> 
                                <Link style={{fontSize:'18px'}} to="/pho">
                                Pho
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{fontSize:'18px'}} to="/bun">
                                Bun
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{fontSize:'18px'}} to="/vermicelli">
                                Vermicelli
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{fontSize:'18px'}} to="/com">
                                Com
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{fontSize:'18px'}} to="/drink">
                                Drink
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{fontSize:'18px'}} to="sideOrder">
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