import React from 'react'
import {Header} from "../components/Header-component";

export class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _opacity: 0.5,
        };
    }
    componentDidMount() {
        window.onscroll = () => {
            if (window.pageYOffset <= 50) {
                this.setState({
                    _opacity: 0.5 + window.pageYOffset / 100
                });
                console.log(this.state._opacity)
            }
        };
    }

    render() {
        return (
            <Header opacity={this.state._opacity}/>
        )
    }
}