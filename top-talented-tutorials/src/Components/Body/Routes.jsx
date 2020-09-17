import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import Subjects from "./Subjects"
import Class from "./Class"

function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Routes path="/class" component={Class} />
                <Route path="/class/1/english" component={Subjects} />
            </Switch>
        </div>
    )
}

export default Routes