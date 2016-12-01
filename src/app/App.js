import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
    render() {
        return (
            <div>
                <h1>First app</h1>
                <div>
                    <Link to={{pathname: '/about'}}>
                        <button>About</button>
                    </Link>
                    <Link to={{pathname: '/'}}>
                        <button>Home</button>
                    </Link>
                </div>
                {this.props.children}
            </div>
        );
    }
});

