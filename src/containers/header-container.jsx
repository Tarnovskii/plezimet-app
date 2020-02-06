import React from 'react'
import {Header} from "../components/header";

export class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _opacity: 0,
            _height: "75px",
        };
    }

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
                setLanguage={this.props.setLanguage}
                opacity={this.state._opacity}
                height={this.state._height}
            />
        )
    }
}
