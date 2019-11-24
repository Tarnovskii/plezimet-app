import React from 'react'
import {Route, Switch} from "react-router-dom";
import {Inconel} from "../components/inconel";
import {Main} from "../components/main";
import {Doc} from "../components/docs";
import {Page404} from "../components/404";
import {ContactsContainer} from "./contacts-container";

export const ContentContainer = () => {
    return (
        <Switch>
            <Route exact path="/materials">
                <Inconel/>
            </Route>
            <Route exact path="/contacts">
                <ContactsContainer/>
            </Route>
            <Route exact path="/docs">
                <Doc/>
            </Route>
            <Route exact path="/">
                <Main/>
            </Route>
            <Route path = "/">
                <Page404/>
            </Route>
        </Switch>
    )
};
