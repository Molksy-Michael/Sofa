import {useRouterHistory} from 'react-router'
import createHistory from 'history/createBrowserHistory'


const browserHistory = useRouterHistory(createHistory)({
    basename: '/ylitka/'
});

export default browserHistory;
