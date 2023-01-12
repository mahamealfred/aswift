import React, { useState } from 'react';
import './index.css';
import { Link,useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import BottomMenu from '../../components/BottomMenu';
import logoImage from "../../images/logo/mobibk.png";
import loginImage from "../../images/icon_images/ic_login_circle.jpeg";
import serviceImage from "../../images/icon_images/serviceicon.png";
import rraImage from "../../images/icon_images/rra.png";
import rssbImage from "../../images/icon_images/rssb.png";
import rnitImage from "../../images/icon_images/rnit.png";
import ejohezaImage from "../../images/icon_images/ejoheza.png";
import electricityImage from "../../images/icon_images/electricity.png";
import mtnImage from "../../images/icon_images/mtn.png";
import mobishuliImage from "../../images/icon_images/mobishuli.png";
import wasacImage from "../../images/icon_images/wasac.png";
import gtbankImage from "../../images/icon_images/gtbank.png";
import { Avatar, Box, IconButton, Tooltip ,Paper} from '@mui/material';
import {
    Container,
    Card,
   
   styled,
    Grid,
    CssBaseline
  
  } from "@mui/material";
  const useStyles = styled((theme) => ({
    root: {
      borderRadius: 10,
      borderColor: "#ff9900",
      padding: 2,
      marginTop: 5,
      marginLeft: 5,
      marginRightt: 5,
    },
  }));

const Sidebar = ({...props}) => {
  const [show, setShow] = useState(false);
  const { children } = props;
  const classes = useStyles();
  const history=useHistory();
  const handleLogout=()=>{
    localStorage.removeItem('mobicashAuth');
    sessionStorage.removeItem('mobicash-auth')
   return history.push('/display',{push:true})
  }
  return (
    <main className={show ? 'space-toggle' : null}>
      {/* <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
      </header> */}
      <header id="header" className={`header ${show ? 'space-toggle' : null}`}>
      <Box sx={{display:{xs:"none",sm:"flex"}}}>
      <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
      </Box>
          <div class="container">
            <div class="header-row">
              <div class="header-column justify-content-start">
                <div class="logo">
                  {" "}
                  <a class="d-flex" href="#" title="MobiSwift">
                    <img
                      src={logoImage}
                      width="250"
                      height="100"
                      alt="MobiSwift"
                    />
                  </a>{" "}
                </div>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#header-nav"
                >
                  {" "}
                  <span></span> <span></span> <span></span>{" "}
                </button>
                <Box sx={{display:{xs:"flex",sm:"none"}}}>
                <nav class="primary-menu navbar navbar-expand-lg">
                  <div id="header-nav" class="collapse navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                      <li class="dropdown">
                        {" "}
                        <a href="/">Home</a>
                      </li>
                      <li class="dropdown dropdown-mega">
                        {" "}
                        <a href="/#">Services</a>
                      </li>
                      <li>
                        <a href="/#">My Account</a>
                      </li>
                      <li>
                        <a href="/#">Transaction</a>
                      </li>
                    </ul>
                  </div>
                </nav>
                </Box>
              </div>
              <div class="header-column justify-content-end">
                <nav class="login-signup navbar navbar-expand">
                  <ul class="navbar-nav">
                  <li>
                  <Box sx={{ display: { xs: 'flex', md: 'flex' }, padding:1}}>
         <Tooltip title="Logout" sx={{ mt: 1,display: { xs: 'none', md: 'none' } }}>
       <IconButton   onClick={handleLogout} size="large" aria-label="show 4 new mails"  sx={{color:"#F9842C"}} >
              {/* <LogoutIcon  sx={{color:"#F9842C"}} /> */}
              <Avatar    size="small" sx={{ bgcolor:"#F9842C", fontSize:"12px" }}>Logout</Avatar>
            </IconButton>
         </Tooltip>
          </Box>
                  </li>
         
                    {/* <li>
                      <a href="/signin">
                        {" "}
                        <img src={loginImage} width="50" />
                      </a>{" "}
                    </li> */}
                    {/* <li class="align-items-center h-auto ml-sm-3">
                      <a
                        class="btn btn-primary d-none d-sm-block"
                        href="/signup"
                      >
                        Sign Up
                      </a>
                    </li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className='nav-logo-name'>Homepage</span>
            </Link>

            <div className='nav-list'>
              <Link to='/dashboard' className='nav-link active'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Services</span>
              </Link>
              <Link to='/hotel' className='nav-link'>
                <i className='fas fa-wallet nav-link-icon'></i>
                <span className='nav-link-name'>My Account</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <i className='fas fa-dollar-sign nav-link-icon'></i>
                <span className='nav-link-name'>Transactions</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <i className='fas fa-circle  nav-link-icon'></i>
                <span className='nav-link-name'>Change Pin</span>
              </Link>
            </div>
          </div>

          <Button onClick={handleLogout} className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Button>
        </nav>
      </aside>
      {children}
      <BottomMenu />
    </main>
  );
};

export default Sidebar;
