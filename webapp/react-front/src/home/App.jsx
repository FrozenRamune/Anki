const React = await import(/* webpackChunkName: "modules/react" */'react');
const { BrowserRouter, Route, Switch } = await import(/* webpackChunkName: "modules/react-router-dom" */'react-router-dom');

import UserPage from './UserPage';
import TodoPage from './TodoPage';
import NotFound from './NotFound';

export default () => {
   <BrowserRouter>
        <Switch>
            <Route exact path="/" render={(props) => <UserPage {...props} bgcolor='#a0f0a0' />} />
            <Route path="/todo" component={TodoPage} />
            <Route component={NotFound} />
        </Switch>
   </BrowserRouter>
}