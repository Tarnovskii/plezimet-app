import React from 'react'
import {Main} from "../components/main";

export class MainContainer extends React.Component {
    componentDidMount() {
        this.props.setHeaderMode("dynamic");
    }

    render() {
        return (
            <Main setHeaderMode={this.props.setHeaderMode}/>
        )
    }
}
