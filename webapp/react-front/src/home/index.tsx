const React = (await import(/* webpackChunkName: "modules/react" */'react')).default;
const ReactDOM = (await import(/* webpackChunkName: "modules/react-dom" */'react-dom')).default;
import { App } from './App';

ReactDOM.render(<App />, document.getElementById('root'));
export{};