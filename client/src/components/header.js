import React ,{ Component } from 'react';
// import { render } from 'react-dom';
import "../styles/header.css"

export default class Header extends Component {

    render() {
        return (
            <div class="header">
  <a href="#default" class="logo">Ordain</a>
  <div class="header-left">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  <div class="header-right" >
      <a href="#login"> Login</a>
  </div>
</div>

        )
    }
}
