import React, {Component, Fragment} from 'react';
import Header from './Header';
import One from './One';
import Two from './Two';
import Three from './Three';
import For from './For';
import Footer from './Footer';
import './index.css';

export default class App extends Component{

    render(){
        return(
            <Fragment>

            <Header />
            <One />
            <Two />
            <Three />
            <For />
            <Footer />

            </Fragment>

        )
    }

}