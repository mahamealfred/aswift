import React, { Component } from "react";


const  Home  = React.lazy(() => import('../pages/home'));
export default class Dashboard extends Component {
  render() {
    // const props=this.props.children
    return (
      <div>
        <Home >
        {this.props.children}
        </Home>  
      
        {/* <Footer/> */}
      </div>
    );
  }
}