import React, { Component, Fragment } from 'react';

import Header from 'Container/Header/Header'


export default class LandingPage extends Component {
    render() {
        return (
            <Fragment>
                <Header {...this.props}></Header>
            </Fragment>
        )
    }
}
