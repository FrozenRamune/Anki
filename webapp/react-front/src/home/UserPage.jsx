const React = await import(/* webpackChunkName: "modules/react" */'react');
const connect = await import(/* webpackChunkName: "modules/react-redux" */'react-redux');
import { load } from './user'

const { withTheme, withStyles } = await import(/* webpackChunkName: "modules/@material-ui_core_styles" */'@material-ui/core/styles');
const { AppBar, Toolbar, Avatar, Card, CardContent, Button, Dialog, DialogTitle, DialogContent } = await import(/* webpackChunkName: "modules/@material-ui_core" */'@material-ui/core');
const { Email } = await import(/* webpackChunkName: "modules/@material-ui_icons" */'@material-ui/icons');
const withWidth = await import(/* webpackChunkName: "modules/@material-ui_core_withWidth" */'@material-ui/core/withWidth');
const { orange } = await import(/* webpackChunkName: "modules/@material-ui_core_colors" */'@material-ui/core/colors');

class UserPage extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            open: false,
            user: null,
        };
    }
    
    componentDidMount() {
        this.props.load();
    }

    handleClickOpen(user) {
        this.setState({
            open: true,
            user: user,
        });
    }

    handleRequestClose() {
        this.setState({ open: false });
    }

    handlePageMove(path) {
        this.props.history.push(path);
    }

    render () {
        const { users, theme, classes, width, location } = this.props;
        const { primary } = theme.pallete;

        console.log(location);

        console.log(users)
        return (
            <>
                <AppBar position="static" color="primary">
                    <Toolbar classes={{root: classes.root}} >
                        タイトル({ width == 'xs' ? 'スマホ' : 'PC'})
                        <Button style={{color: '#fff', position: 'absolute', top: 15, right: 0}} onClick={() => this.handlePageMove('.todo')}>TODOページへ</Button>
                    </Toolbar>
                </AppBar>
                {users && users.map((user) => {
                    return (
                        <Card key={user.email} style={{marginTop: '10px'}}>
                            <CardContent className={classes.card}>
                                <Avatar src={user.picture.thumbnail} />
                                <p style={{margin: 10, color: primary[500]}}>{'名前：' + user.name.first + ' ' + user.name.last}</p>
                                <p className={classes.gender}>{'性別：' + (user.gender == 'male' ? '男性' : '女性')}</p>
                                <div style={{textAlign: 'right'}}>
                                    <Button variant="contained" color='secondary' onClick={() => this.handleClickOpen(user)}><Email style={{marginRight: 5, color: orange[200]}} />Email</Button>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
                {
                    this.state.open &&
                    <Dialog open={this.state.open} onClose={() => this.handleRequestClose()}>
                        <DialogTitle>メールアドレス</DialogTitle>
                        <DialogContent>{this.state.user.email}</DialogContent>
                    </Dialog>
                }
            </>
        );
    }
}

export default withWidth()(
withTheme(
withStyles((theme) => ({
    root: {
        fontStyle: 'italic',
        fontSize: 21,
        minHeight: 64,
        [theme.breakpoints.down('xs')]: {
            fontStyle: 'normal',
        },
    },
    card: {
        background: props => `${props.bgcolor}`,
    },
    gender: {
        margin: 10,
        color: theme.palette.secondary[500],
    },
}))(
    connect(
        state => ({
            users: state.user.users,
        }),
        { load }
    )(UserPage)
)))