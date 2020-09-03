import React, { Component } from "react";

export default class Banner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            offers: []
        };
    }

    render() {
        return (
            <div>
                this is banner section for special offers
            </div>
        )
    }
}