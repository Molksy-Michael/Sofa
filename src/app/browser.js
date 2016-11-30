import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, useRouterHistory} from 'react-router';

import App from './index';
import browserHistory from './browserHistory.js'
import routes from './routes';

ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('root'));

/*<App {...window.__APP_INITIAL_STATE__} />*/