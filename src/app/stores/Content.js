import Reflux from 'reflux'
import React from 'react'
import axios from 'axios'

import ContentActions from './../actions/contentActions'

var content = Reflux.createStore({
    listenables: ContentActions,
    
    getInitialState() {
        return {
            content: {}
        }
    },
    
    onGetAll() {
        var self = this;
        axios.get("/getAllContent")
            .then((response) => {
                self.state.content = response.data;
                self.trigger(self.state);
            })
            .catch((err) => {
                console.log(err);
            })
    }
})