import React from 'react'
import {Route, Switch} from "react-router-dom";
import {Supplies} from "../components/supplies";
import {Inconel} from "../components/inconel";
import {Warehouse} from "../components/warehouse";
import {Contacts} from "../components/contacts";
import {Main} from "../components/main";

export const ContentContainer = () => {
    return (
        <Switch>
            <Route path="/supplies">
                <Supplies/>
            </Route>
            <Route path="/inconel">
                <Inconel/>
            </Route>
            <Route path="/warehouse">
               <Warehouse/>
            </Route>
            <Route path="/contacts">
                <Contacts/>
            </Route>
            <Route path="/">
                <Main/>
            </Route>
        </Switch>
    )
}