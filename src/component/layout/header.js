import React, { useState } from "react";
import { Navbar,NavbarToggler,Collapse,Nav,NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
function Header(){

const [nav,setNav]=useState({
          isNavOpen: false
})


const  toggleNav=()=> {
        setNav({
          isNavOpen: !nav.isNavOpen
        });
      }
    return(

                <Navbar dark className="bg-primary container-fluid" expand="md">
                    <div className="container row" style={{margin:'auto'}}>
                        <NavLink className="Nav-Brand" to="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavLink>
                        <NavbarToggler onClick={toggleNav} />
                        <Collapse isOpen={nav.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink id='1' className="nav-link"  to='/Staff'><span className="bi bi-people-fill bi-lg"></span>Nhân viên</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink id='2' className="nav-link " to='/department'><span className="bi bi-person-video2 bi-lg"></span> Phòng ban </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink id='3' className="nav-link " to='/money'><span className="bi bi-card-coin bi-lg"></span> Bảng lương</NavLink>
                            </NavItem>

                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
          
      
   

    )
}




export default Header