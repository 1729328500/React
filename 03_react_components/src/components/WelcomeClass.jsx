import { Component } from "react";
import PropTyes from "prop-types";

class WelcomeClass extends Component {
  render() {
    return <h1>Hello World ,{this.props.name}</h1>;
  }
}

WelcomeClass.prototypes = {};
export default WelcomeClass;
