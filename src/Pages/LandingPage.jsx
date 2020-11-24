import React, { Component, Fragment } from 'react';

import Header from 'Container/Header/Header';
import Hero from 'Container/Hero/Hero'

import landingPage from 'Json/landingPage.json';

export default class LandingPage extends Component {
    render() {
        return (
            <Fragment>
                <Header {...this.props}></Header>
                <Hero data={landingPage}></Hero>
            </Fragment>
        )
    }
}
