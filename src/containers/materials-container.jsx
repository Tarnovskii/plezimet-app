import React from 'react'
import {Materials} from "../components/materials";

export class MaterialsContainer extends React.Component {
    componentDidMount() {
        this.props.setHeaderMode("static");
    }

    render() {
        return (
            <div>
                <Materials/>
            </div>
        )
    }

}
