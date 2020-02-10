/* Created by Artem Tarnovskii {DATE: 01/10/2020} for © Plezimet Group Metallurgical Services */

import React from 'react';
import s from './stylesheets/App.module.css';
import {MainContainer} from "./containers/main-container";
import {HeaderContainer} from "./containers/header-container";
import {ContactsContainer} from "./containers/contacts-container";
import {MaterialsContainer} from "./containers/materials-container";
import {Doc} from "./components/docs";
import {Footer} from "./components/footer";
import {Redirect, Route, Switch} from "react-router";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.setLanguage.bind(this);
    }

    setLanguage = (language) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        localStorage.language = language;
        this.forceUpdate();
    };

    setHeaderVisibleMode = (mode) => {
        this.setState({
            headerMode: mode
        })
    };

    render() {
        return (
            <div className={s.App}>
                <HeaderContainer setLanguage={this.setLanguage}/>
                <Switch>
                    <Route exact path={`/${localStorage.language}/contacts`}>
                        <ContactsContainer setHeaderMode={this.setHeaderVisibleMode}/>
                        <Footer setLanguage={this.setLanguage}/>
                    </Route>
                    <Route exact path={"/docs"}>
                        <Doc setHeaderMode={this.setHeaderVisibleMode}/>
                    </Route>
                    <Route exact path={`/${localStorage.language}/materials`}>
                        <MaterialsContainer setHeaderMode={this.setHeaderVisibleMode}/>
                        <Footer setLanguage={this.setLanguage}/>
                    </Route>
                    <Route exact path={`/${localStorage.language}`}>
                        <MainContainer setHeaderMode={this.setHeaderVisibleMode}/>
                        <Footer setLanguage={this.setLanguage}/>
                    </Route>
                    <Redirect from="/" to={`/${localStorage.language}`}/>
                </Switch>
            </div>
        );
    }
}

export default App;
