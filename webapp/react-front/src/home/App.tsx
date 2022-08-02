const React = (await import(/* webpackChunkName: "modules/react" */'react')).default;
import Rect from './Rect';

export const App: React.VFC = () => {
    return <div>Hello World!</div>
}