import Main from '../containers/Main';
import Teams from '../containers/Teams';
import Team from '../containers/Team';
import Page404 from '../containers/Page404';
import Fixtures from '../containers/Fixtures'


export default [
    {
        "name": "Main",
        "path": "/",
        "component": Main,
        "showInNavBar": true,
    },
    {
        "name": "Teams",
        "path": "/teams",
        "component": Teams,
        "showInNavBar": true,
    },
    {
        "name": "Team",
        "path": "/team/:id",
        "component": Team,
        "showInNavBar": false,
    },
    {
        "name": "Fixtures",
        "path": "/fixtures",
        "component": Fixtures,
        "showInNavBar": true,
    },
    {
        "name": "404",
        "component": Page404,
        "showInNavBar": false,
    },
]