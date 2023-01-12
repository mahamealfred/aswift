import React, { useContext, useState, useMemo, useRef, useEffect } from "react";
import {
  Container,
  Card,
 
 styled,
  Grid,
  CssBaseline

} from "@mui/material";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useLocation,
} from "react-router-dom";
import { Paper, Box, Typography, ButtonBase } from "@mui/material";
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

export default function ServicePage() {

    const classes = useStyles();
  return (
    <div>
      <div id="main-wrapper">
        <div id="content">
          <div
            class="owl-carousel owl-theme single-slideshow"
            data-autoplay="true"
            data-loop="true"
            data-autoheight="true"
            data-nav="true"
            data-items="1"
          >
             <Paper
              elevation={0}
              variant="outlined"
              sx={{
                p: 1,
                marginTop:1,
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
                            <Card elevation={0}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  {" "}
                                  <img src={serviceImage} />
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
            <div class="container">
              <h6 style={{ textAlign: "center", fontSize: 14, width: "100%" }}>
                A range of services to support individual needs
              </h6>
              <br />
              <div class="container">
                <div class="row">
                  <div class="section-header">
                    <h4
                      style={{
                        backgroundColor: "#fbe5d6",
                        width: "100%",
                        fontSize: 15,
                      }}
                    >
                      MobiGov
                    </h4>
                  </div>

                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
                  >
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="/services/rra">
                            <Card elevation={10}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={rraImage} />
                                </i>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">RRA</h3>*/}
                          </Link>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={10}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  {" "}
                                  <img src={rssbImage}/>
                                </i>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">RSSB</h3>*/}
                          </Link>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={10}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  {" "}
                                  <img src={ejohezaImage} />
                                </i>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">Ejo Heza</h3>*/}
                          </Link>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={10}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  {" "}
                                  <img src={rnitImage} />
                                </i>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">RNIT</h3>*/}
                          </Link>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
              <br />
              <div class="container" style={{ marginTop: 5 }}>
                <div class="row ">
                  <div class="section-header">
                    <h4
                      style={{
                        backgroundColor: "#fbe5d6",
                        width: "100%",
                        fontSize: 15,
                      }}
                    >
                      Utilities
                    </h4>
                  </div>

                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
                  >
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={10}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  {" "}
                                  <img src={electricityImage} />
                                </i>
                              </span>
                            </Card>
                            {/*<h3 class="text-body text-1">Electricity</h3>*/}
                          </Link>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={10}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  {" "}
                                  <img src={wasacImage} />
                                </i>
                              </span>
                            </Card>

                            {/*} <h3 class="text-body text-1">Airtime</h3>*/}
                          </Link>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={10}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  {" "}
                                  <img src={mtnImage} />
                                </i>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">Airtime</h3>*/}
                          </Link>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>

              <br />
              <div class="container" style={{ marginTop: 5 }}>
                <div class="row ">
                  <div class="section-header">
                    <h2
                      style={{
                        backgroundColor: "#fbe5d6",
                        width: "100%",
                        fontSize: 15,
                      }}
                    >
                      Value-added Services
                    </h2>
                  </div>

                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
                  >
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={10}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  {" "}
                                  <img src={mobishuliImage} />
                                </i>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">Electricity</h3>*/}
                          </Link>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
              <br />
              <div class="container" style={{ marginTop: 5 }}>
                <div class="row ">
                  <div class="section-header">
                    <h2
                      style={{
                        backgroundColor: "#fbe5d6",
                        width: "100%",
                        fontSize: 15,
                      }}
                    >
                    Agency Banking
                    </h2>
                  </div>

                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
                  >
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={10}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  {" "}
                                  <img src={gtbankImage} />
                                </i>
                              </span>
                            </Card>
                            {/*<h3 class="text-body text-1">Electricity</h3>*/}
                          </Link>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>

              <div class="transaction-section pb-15">
                <br />
                <div class="section-header">
                  <h2></h2>
                  <div class="view-all">
                    <Link to="#"></Link>
                  </div>
                </div>

              
              </div>
            </div>
          </div>

       
        </div>
   
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
    </div>
  );
}
