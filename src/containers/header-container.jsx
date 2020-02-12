import React from 'react'
import {Header} from "../components/header";

export class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _opacity: 0,
            _height: "60px",
        };
        this.mouseEnterLeaveHandler.bind(this);
    }

    heanderController = () => {
        if (window.pageYOffset <= 100) {
            this.setState({
                _opacity: window.pageYOffset / 100,
                _height: `${60 - window.pageYOffset / 5}px`
            });
        }
        if (window.pageYOffset >= 100) {
            this.setState({
                _opacity: 1,
                _height: "40px"
            });
        }
    };

    mouseEnterLeaveHandler = (status) => {
        if (status === "leave") {
            this.heanderController();
        } else {
            this.setState({
                _opacity: 1,
            })
        }
    };

    componentDidMount() {
        window.onscroll = () => {
            this.heanderController();
        };
    }

    render() {
        return (
            <Header
                mouseEnterLeaveHandler={this.mouseEnterLeaveHandler}
                setLanguage={this.props.setLanguage}
                opacity={this.state._opacity}
                height={this.state._height}
            />
        )
    }
}
