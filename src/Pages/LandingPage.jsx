import React, { Component, Fragment } from 'react';

import Header from 'Container/Header/Header';
import Hero from 'Container/Hero/Hero'
import MostPicked from 'Container/MostPicked/MostPicked';
import Categories from 'Component/Categories/Categories';


import landingPage from 'Json/landingPage.json';

export default class LandingPage extends Component {
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();

    }

    render() {
        return (
            <Fragment>
                <Header {...this.props}></Header>
                <Hero data={landingPage} refMostPicked={this.refMostPicked}/>
                <MostPicked refMostPicked={this.refMostPicked} data={landingPage}/>
                <Categories data={landingPage.categories} />
            </Fragment>
        )
    }
}
