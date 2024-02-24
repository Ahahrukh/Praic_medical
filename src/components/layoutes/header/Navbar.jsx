import React from "react"; 
import "./Navbar.scss";
import logo from '../../images/icons/logo.png'
import {Flex  } from "antd";
import { UserOutlined } from "@ant-design/icons";
const Navbar = ({data}) => {

    return (
        <nav className='navbar'>
            <div className="detail">
                <div className="appointment2">
                    <img src={logo} alt="image" style={{width:"80px" , marginTop:"15px" , height:"30px"}} />
                </div>
                {
                  data.map((elem)=>(
                    elem.element1
                  ))
                }
                
            </div>
            <div className="otherDetails">
                <Flex gap="small" wrap="wrap">
                    {data.map((elem)=>(
                        <div>{elem.buttons}</div>
                    ))}
                </Flex>
                    {data.map((elem)=>(
                        elem.element2
                    ))}
                <div>
                    {data.map((elem)=>(
                        elem.element3
                    ))}
                </div>
            </div>
            <div className="navbar-container">
                <label htmlFor="menu-toggle" className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
                </label>
                <div className="menu-items">
        
                </div>
            </div>
        </nav>
    );
}

export default Navbar