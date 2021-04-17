import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Container extends React.Component {
  state = {};
  render() {
    return(
    <div className="main-container">
      <Header className="box-header"/>
      <Body className="box-body"/>
      <Footer className="box-footer"/>
          
    </div>);
  }
}

export default Container;
