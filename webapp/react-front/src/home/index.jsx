const React = await import(/* webpackChunkName: "modules/react" */'react');
const { createRoot } = await import(/* webpackChunkName: "modules/react-dom_client" */'react-dom/client');
const { createStore, applyMiddleware, compose } = await import(/* webpackChunkName: "modules/redux" */'redux');
const { Provider } = await import(/* webpackChunkName: "modules/react-redux" */'react-redux');
const { MuiThemeProvider, createMuiTheme } = await import(/* webpackChunkName: "modules/@material-ui_core_styles" */'@material-ui/core/styles');
const client = await import(/* webpackChunkName: "modules/axios" */'axios');
const thunk = await import(/* webpackChunkName: "modules/redux-thunk" */'redux-thunk');

import App from './App';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const thunkWithClient = thunk.withExtraArgument(client);
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkWithClient)));

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            50: '#e3f2fd',
            100: '#bbdefb',
            200: '#90caf9',
            300: '#64b5f6',
            400: '#42a5f5',
            500: '#2196f3',
            600: '#1e88e5',
            700: '#1976d2',
            800: '#1565c0',
            900: '#0d47a1',
            A100: '#82b1ff',
            A200: '#448aff',
            A400: '#2979ff',
            A700: '#2962ff',
            contrastDefaultColor: 'light',
        },
        secondary: {
            50: '#fce4ec',
            100: '#f8bbd0',
            200: '#f48fb1',
            300: '#f06292',
            400: '#ec407a',
            500: '#e91e63',
            600: '#d81b60',
            700: '#c2185b',
            800: '#ad1457',
            900: '#880e4f',
            A100: '#ff80ab',
            A200: '#ff4081',
            A400: '#f50057',
            A700: '#c51162',
            contrastDefaultColor: 'light',
        },
    },
    'breakpoints': {
        'keys': [
            'xs',
            'sm',
            'md',
            'lg',
            'xl',
        ],
        'values': {
            'xs': 360,
            'sm': 768,
            'md': 992,
            'lg': 1000000000, 
            'xl': 1000000000,
        },
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none'
            },
        },
    },
})

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>
);

export {};