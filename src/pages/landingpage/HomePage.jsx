import React, { useContext, useState, useMemo, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useLocation,
} from "react-router-dom";
import {
  Card,

 styled,
  Grid,
  TextField,
  Button,
  CssBaseline,
} from "@mui/material";

import { Paper, Box, Typography, ButtonBase } from "@mui/material";
import SliderManager from "./SliderManager";
import $ from "jquery";
import scanToPayImage from "../../images/icon_images/scan2pay.png";
import mobiTokenImage from "../../images/icon_images/mobitoken.png";
import nullImage from "../../images/icon_images/null.png";
import paymentImage from "../../images/icon_images/success.png";
import cardImage from "../../images/icon_images/pmt-card-bg.png";
import cashlessImage from "../../images/icon_images/cashless3.png";
import lifestyleImage from "../../images/icon_images/lifestyle.png";
import emailImage from "../../images/icon_images/email.png";
import faqImage from "../../images/icon_images/faq.png";
import ticketImage from "../../images/icon_images/ticket.png";
import chatImage from "../../images/icon_images/chat.png";
import joinusImage from "../../images/icon_images/join-us-ic.jpeg";
import alertImage from "../../images/icon_images/alert-ic.jpeg";
import logoImage from "../../images/logo/mobibk.png";
import loginImage from "../../images/icon_images/ic_login_circle.jpeg";
import gtbankImage from "../../images/icon_images/gtbank.png";
import agentBankingImage from "../../images/icon_images/AGbanking.png";
import servicesImage from "../../images/icon_images/services.png";
import BottomMenu from "./BottomMenu";
import Footer from "./Footer";

//global inline styling
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

export default function HomePage() {
  //variable declaration
  const [showChat, setShowChat] = useState(false);
  const classes = useStyles();
  //scripting block
  useEffect(() => {
    //alert($("#input").val())
    // Preloader
    $(window).on("load", function () {
      $('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
      $("#preloader").delay(333).fadeOut("slow"); // will fade out the white DIV that covers the web app.
      $("body").delay(333);
    });

    // Dropdown show on hover
    $(
      ".primary-menu ul.navbar-nav li.dropdown, .login-signup ul.navbar-nav li.dropdown"
    ).on("mouseover", function () {
      if ($(window).width() > 991) {
        $(this).find("> .dropdown-menu").stop().slideDown("fast");
        $(this).bind("mouseleave", function () {
          $(this).find("> .dropdown-menu").stop().css("display", "none");
        });
      }
    });

    // When dropdown going off to the out of the screen.
    $(".primary-menu .dropdown-menu").each(function () {
      var menu = $("#header .header-row").offset();
      var dropdown = $(this).parent().offset();

      var i =
        dropdown.left +
        $(this).outerWidth() -
        (menu.left + $("#header .header-row").outerWidth());

      if (i > 0) {
        $(this).css("margin-left", "-" + (i + 5) + "px");
      }
    });

    // DropDown Arrow
    $(".primary-menu")
      .find("a.dropdown-toggle")
      .append($("<i />").addClass("arrow"));

    // Mobile Collapse Nav
    $(
      '.primary-menu .dropdown-toggle[href="#"], .primary-menu .dropdown-toggle[href!="#"] .arrow'
    ).on("click", function (e) {
      if ($(window).width() < 991) {
        e.preventDefault();
        var $parentli = $(this).closest("li");
        $parentli.siblings("li").find(".dropdown-menu:visible").slideUp();
        $parentli.find("> .dropdown-menu").stop().slideToggle();
        $parentli.siblings("li").find("a .arrow.open").toggleClass("open");
        $parentli.find("> a .arrow").toggleClass("open");
      }
    });

    // Mobile Menu Button Icon
    $(".navbar-toggler").on("click", function () {
      $(this).toggleClass("open");
    });
  });

  return (
    <div>
      
      <div id="main-wrapper">
      
        <header id="header">
          <div class="container">
            <div class="header-row">
              <div class="header-column justify-content-start">
                <div class="logo">
                  {" "}
                  <a class="d-flex" href="#" title="ASwift">
                    <img
                      src={logoImage}
                      width="250"
                      height="100"
                      alt="ASwift"
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
                <nav class="primary-menu navbar navbar-expand-lg">
                  <div id="header-nav" class="collapse navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                      <li class="dropdown">
                        {" "}
                        <a href="/">Home</a>
                      </li>
                      <li class="dropdown dropdown-mega">
                        {" "}
                        <a href="/#">About Us</a>
                      </li>
                      <li>
                        <a href="/#">Business</a>
                      </li>
                      <li>
                        <a href="/#">Support</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div class="header-column justify-content-end">
                <nav class="login-signup navbar navbar-expand">
                  <ul class="navbar-nav">
                    <li>
                      <a href="/authentication-signin">
                        {" "}
                        <img src={loginImage} width="50" />
                      </a>{" "}
                    </li>
                    <li class="align-items-center h-auto ml-sm-3">
                      <a
                        class="btn btn-primary d-none d-sm-block"
                        href="/signup"
                      >
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>

        {
          //<!-- Content end --> <!-- Footer
        }

        <div id="content">
          <div
            class="owl-carousel owl-theme single-slideshow"
            data-autoplay="true"
            data-loop="true"
            data-autoheight="true"
            data-nav="true"
            data-items="1"
          >
            <SliderManager />
            <h6>
              <i class="flaticon-right-arrow" style={{ fontSize: 12 }}>
                {" "}
                <b>Service Zone</b>
              </i>
            </h6>
            <Paper
              elevation={0}
              variant="outlined"
              sx={{
                p: 0,
                margin: "auto",
                maxWidth: "100%",
                borderColor: 'orange',
                borderRadius:2,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
              className={classes.root}
            >
              <div class="container">
                <div class="row">
               
                  <Grid container spacing={1}>
                  <Grid item xs={3} sm={3}>
                      <div class="col-sm-8 col-lg-6 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="/authentication-signin">
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={servicesImage} />
                                </i>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">Ticket</h3>*/}
                          </Link>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                      <div class="col-sm-8 col-lg-6 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <a href="#">
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={agentBankingImage} />
                                </i>
                              </span>
                            </Card>
                            <h3 class="text-body text-1"> </h3>
                          </a>
                        </div>
                      </div>
                    </Grid>

                    
                    <Grid item xs={3} sm={3}>
                      <div class="col-sm-8 col-lg-6">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <a>
                            <Card elevation={5}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={nullImage} />
                                </i>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">Message</h3>*/}
                          </a>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                      <div class="col-sm-8 col-lg-6">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={5}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={nullImage} />
                                </i>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">FAQ</h3>*/}
                          </Link>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Paper>
            <h6>
              <i class="flaticon-right-arrow" style={{ fontSize: 12 }}>
                {" "}
                <b>Payment Zone</b>
              </i>
            </h6>

            <Paper
              elevation={0}
              variant="outlined"
              sx={{
                p: 0,
                margin: "auto",
                maxWidth: "100%",
                borderColor: 'orange',
                borderRadius:2,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
              className={classes.root}
            >
              <div class="container">
                <div class="row">
                 
                  <Grid container spacing={1}>
                    <Grid item xs={3} sm={3}>
                      <div class="col-sm-8 col-lg-6 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <a href="#">
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={scanToPayImage} />
                                </i>
                              </span>
                            </Card>
                            <h3 class="text-body text-1"> </h3>
                          </a>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={3} sm={3}>
                      <div class="col-sm-8 col-lg-6 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <a>
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={mobiTokenImage} />
                                </i>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">Ticket</h3>*/}
                          </a>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                      <div class="col-sm-8 col-lg-6">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <a>
                            <Card elevation={5}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={nullImage} />
                                </i>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">Message</h3>*/}
                          </a>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                      <div class="col-sm-8 col-lg-6">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={5}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={paymentImage} />
                                </i>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">FAQ</h3>*/}
                          </Link>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Paper>
            <h6>
              <i class="flaticon-right-arrow" style={{ fontSize: 12 }}>
                {" "}
                <b>Membership Zone</b>
              </i>
            </h6>
            <Paper
              elevation={0}
              variant="outlined"
              sx={{
                p: 0,
                margin: "auto",
                maxWidth: "100%",
                borderColor: 'orange',
                borderRadius:2,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
              className={classes.root}
            >
              <div class="container">
                <div class="row">
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <div class="col-sm-12 col-lg-12 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="/signup">
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={joinusImage} />
                                </i>
                              </span>
                            </Card>
                          </Link>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Paper>

            <h6>
              <i class="flaticon-right-arrow" style={{ fontSize: 12 }}>
                {" "}
                <b>Communication Zone</b>
              </i>
            </h6>

            <Paper
              elevation={0}
              variant="outlined"
              sx={{
                p: 0,
                margin: "auto",
                maxWidth: "100%",
                borderColor: 'orange',
                borderRadius:2,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
              className={classes.root}
            >
              <div class="container">
                <div class="row">
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <div class="col-sm-12 col-lg-12 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={alertImage} />
                                </i>
                              </span>
                            </Card>
                          </Link>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Paper>
           
           
            <h6>
              <i class="flaticon-right-arrow" style={{ fontSize: 12 }}>
                {" "}
                <b>Support Zone</b>
              </i>
            </h6>

            <Paper
              elevation={0}
              variant="outlined"
              sx={{
                p: 0,
                margin: "auto",
                maxWidth: "100%",
                borderColor: 'orange',
                borderRadius:2,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
              className={classes.root}
            >
              <div class="container">
                <div class="row">
                  <h6
                    style={{
                      color: "#f76a07",
                      textAlign: "right",
                      fontSize: 10,
                    }}
                  >
                    <b>We are ready to help you 24/7/365</b>
                  </h6>
                  <Grid container spacing={1}>
                    <Grid item xs={3} sm={3}>
                      <div class="col-sm-8 col-lg-6 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <a href="#">
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={chatImage} />
                                </i>
                              </span>
                            </Card>
                            <h3 class="text-body text-1"> </h3>
                          </a>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={3} sm={3}>
                      <div class="col-sm-8 col-lg-6 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <a>
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={ticketImage} />
                                </i>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">Ticket</h3>*/}
                          </a>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                      <div class="col-sm-8 col-lg-6">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <a>
                            <Card elevation={5}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={emailImage} />
                                </i>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">Message</h3>*/}
                          </a>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                      <div class="col-sm-8 col-lg-6">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={5}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={faqImage} />
                                </i>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">FAQ</h3>*/}
                          </Link>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Paper>
          
          </div>

          <BottomMenu />
        </div>

        <Footer />
      </div>

      {
        //<!-- Document Wrapper end --> <!-- Back to Top
      }

      <a
        id="back-to-top"
        data-toggle="tooltip"
        title="Back to Top"
        href="javascript:void(0)"
      >
        <i class="fa fa-chevron-up"></i>
      </a>

      {
        //<!-- Video Modal
      }
    </div>
  );
}
