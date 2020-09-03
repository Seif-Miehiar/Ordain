import React, { Component } from "react";
import '../styles/home.css'
import icon from "../styles/hand.png";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return(
            <div class="home">
                <div class="product-container">
                    <img class="icon" src={icon} alt="real estates" />
                </div>
            </div>
        )
    }
}