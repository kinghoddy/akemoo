import React, { Component } from 'react';
import Home from './containers/home/home';
import { BrowserRouter, Route } from 'react-router-dom'
import Activity from './containers/activity/activity';
import Layout from './containers/Layout/Layout'


class App extends Component {

    render() {
        return (
            <BrowserRouter>

                <Layout>

                    <Route path="/activity" component={Activity} />
                    <Route exact path="/" component={Home} />

                </Layout>
            </BrowserRouter>
        )
    }
}

export default App;
