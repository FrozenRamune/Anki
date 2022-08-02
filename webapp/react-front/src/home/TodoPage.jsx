const React = await import(/* webpackChunkName: "modules/react" */'react');
const { AppBar, Toolbar, Button } = await import(/* webpackChunkName: "modules/@material-ui_core" */'@material-ui/core');
const { withRouter } = await import(/* webpackChunkName: "modules/react-router-dom" */'react-router-dom');

class TodoPage extends React.Component {

    render() {
        return (
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        TODOページ
                        <BackButton>ユーザーページへ</BackButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

let BackButton = ({history, location}) => {
    console.log(location);
    return <Button style={{color: '#fff', position: 'absolute', top: 15, right: 0}} onClick={() => history.goBack()}>ユーザーページへ</Button>
};

BackButton = withRouter(BackButton);

export default TodoPage;