import React from 'react';
import { Route, Switch } from "react-router-dom";

const generateRoutesArray = (Routes) => {
    return Routes.map((route,indx) => <Route key={indx} exact path={route.path} component={route.component} />)    
}

function RoutesComponent(props) {
    return (
        <Switch>
          {generateRoutesArray(props.routes)}
        </Switch>
    );
}

export default RoutesComponent;