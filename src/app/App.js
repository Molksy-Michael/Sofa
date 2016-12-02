import React from 'react'
import {Link} from 'react-router'

import Header from './components/parts/PureHeader'
import getContent from './components/services/contentService'

export default React.createClass({
    onGetAllContent() {
        console.log(getContent());
    },
    
    render() {
        return (
            <div>
                {Header()}
                <h2>First app</h2>
                <div>
                    <Link to={{pathname: '/about'}}>
                        <button>About</button>
                    </Link>
                    <Link to={{pathname: '/'}}>
                        <button>Home</button>
                    </Link>
                    <button onClick={this.onGetAllContent}>Get content</button>
                </div>
                {this.props.children}
            </div>
        );
    }
});

