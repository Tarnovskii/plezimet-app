import React from 'react'
import {Header} from "../components/Header-component";

export class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _opacity: 0,
            _height: "75px",
            _mtFontSize: "0",
            _mtVisibility: "hidden",
            _mtHeight: "0px",
            _mtTop: "-20px",
        };
        this.dropDownHandler.bind(this);
    }

    dropDownHandler = (action) => {
        let newState = {};
        if (action === "mouseOn") {
            if (window.pageYOffset < 30) {
                newState._opacity = 0.3
            }
            newState._mtTop = "calc(50% - 1em)";
            newState._mtFontSize = "large";
            newState._mtVisibility = "visible";
            newState._mtHeight = "45px";
        } else if (action === "mouseOut") {
            if (window.pageYOffset < 30) {
                newState._opacity = window.pageYOffset / 100;
            }
            newState._opacity = window.pageYOffset / 100;
            newState._mtFontSize = "0";
            newState._mtVisibility = "hidden";
            newState._mtHeight = "0px";
            newState._mtTop = "-20px";
        }
        this.setState(newState);
    };

    componentDidMount() {
        window.onscroll = () => {
            if (window.pageYOffset <= 100) {
                this.setState({
                    _opacity: window.pageYOffset / 100,
                    _height: `${75 - window.pageYOffset / 4}px`
                });
            }
            if (window.pageYOffset >= 100) {
                this.setState({
                    _opacity: 1,
                    _height: "50px"
                });
            }
        };
    }

    render() {
        return (
            <Header
                furaWidth={this.state._furaWidth}
                opacity={this.state._opacity}
                height={this.state._height}
                mtVisible={this.state._mtVisibility}
                mtHeight={this.state._mtHeight}
                mtFontSize={this.state._mtFontSize}
                mtTop={this.state._mtTop}
                dropDownHandler={this.dropDownHandler}
            />
        )
    }
}
