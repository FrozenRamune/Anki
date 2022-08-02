const { combineReducers } = await import(/* webpackChunkName: "modules/redux" */'redux');

import user from './user';

export default combineReducers({
    user,
});