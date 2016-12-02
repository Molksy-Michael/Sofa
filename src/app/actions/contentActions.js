import Reflux from 'reflux'

var contentActions = Reflux.createActions({
    'getAll' : {asyncResult: true}
});

export default contentActions;