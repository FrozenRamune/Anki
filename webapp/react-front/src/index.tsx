const React = (await import('react')).default;
const ReactDOM = (await import('react-dom')).default;
const App = (await import('./App')).App;

ReactDOM.render(<App />, document.getElementById('root'));
export{};