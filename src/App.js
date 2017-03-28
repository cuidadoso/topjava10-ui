import React, { Component, PropTypes as pt } from 'react';
import {Router, useRouterHistory} from 'react-router';
import {createHistory} from 'history';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    static propTypes = {
        routes: pt.object.isRequired,
    };
    static displayName = 'Topjava10App';

    constructor(props) {
        super(props);
        const {initialState = {}} = props;
        const {context = window.CDT_CONTEXT, servletPath = window.CDT_SERVLETPATH} = initialState;
        const contextWithSlash = context ? `/${context}` : '';
        this.history = useRouterHistory(createHistory)(
            {basename: `${contextWithSlash}/${servletPath}`}
        );
    }

    render() {
        const { routes } = this.props;

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Router routes={routes} history={this.history} />
            </div>
        );
    }
}

export default App;
