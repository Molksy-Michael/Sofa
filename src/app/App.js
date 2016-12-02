import React from 'react'
import Reflux from 'reflux'
import {Link} from 'react-router'

import ContentStore from './stores/Content'
import ContentActions from './actions/contentActions'
import Header from './components/parts/PureHeader'
import Content from './components/Content'
import getContent from './components/services/contentService'

export default React.createClass({
    mixins: [Reflux.listenTo(ContentStore, 'onContentLoaded')],

    getInitialState(){
        var initialState = {
            content: {}
        };

        return initialState;
    },

    onContentLoaded(newContent) {
        this.setState({content : newContent})
    },

    onGetAllContent() {
        ContentActions.getAll();
    },

    render() {
        let self = this;
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

