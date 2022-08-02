const React = (await import(/* webpackChunkName: "modules/react" */'react')).default;
import { ReactNode } from 'react';
import NumberPlate from './NumberPlate';

export default class Rect extends React.Component {

    static defaultProps = {
        num: 0,
        bgcolor: '#808080',
    };

    constructor(props) {
        super(props);
        this.state = { num: this.props.num }
    }

    componentDidMount(): void {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('componentDidUpdate', prevState);
    }

    componentWillUnmount(): void {
        console.log('componentWillUnmount');
    }

    countUp(): void {
        this.setState({ num: this.state.num + 1 });
    }

    render(): ReactNode {
        const { bgcolor } = this.props;
        const rectStyle = {
            background: bgcolor,
            display: 'table-cell',
            border: '1px #00 solid',
            fontSize: 20,
            width: 30,
            height: 30,
            textAlign: 'center',
            verticalAlign: 'center',
        }
        return (
            <div style={rectStyle} onClick={(e) => this.countUp()}>
                <NumberPlate><i>{this.state.num}</i></NumberPlate>
            </div>
        );
    }
}