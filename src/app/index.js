import React from 'react'
import {Link} from 'react-router'

const App = ({isMobile}) => {
    const onClickHandler = function () {
        alert('I like your style');
    }

    return (
        <div>
            <h1>Hello world from some {isMobile ? 'mobile' : 'desktop'}</h1>
            <div>
                <Link to={{pathname: '/about'}}>
                    <button>About</button>
                </Link>
            </div>
            <div>
                <button onClick={onClickHandler}>Click me harder</button>
            </div>
        </div>
    );
}

App.propTypes = {
    isMobile: React.PropTypes.bool.isRequired
};

export default App;
