import Main from '../containers/Main';
import Teams from '../containers/Teams';
import Team from '../containers/Team';
import Page404 from '../containers/Page404';


export default [
    {
        "name": "Main",
        "path": "/",
        "component": Main
    },
    {
        "name": "Teams",
        "path": "/teams",
        "component": Teams
    },
    {
        "name": "Team",
        "path": "/team/:id",
        "component": Team,
    },
    {
        "name": "404",
        "component": Page404
    }
]