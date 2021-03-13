import React, { Component } from 'react';
import './index.css';
import FrontText from './FrontText.js';
import Grape from './Grape.js';
import Shark from './Shark.js';
var state = 0;

class Site extends React.Component {
    constructor() {
        super();
        this.grape = this.grape.bind(this);
        this.shark = this.shark.bind(this);
        this.home = this.home.bind(this);
    };
    
    grape() {
        state = 1;
        this.forceUpdate();
    }
    shark() {
        state = 2;
        this.forceUpdate();
    }
    home() {
        state = 0;
        this.forceUpdate();
    }
    
    render() {
        if (state === 0) {
            return (
                <div>
                    <h1 onClick={this.home}>Buffzeed.com</h1>
                    <div id="horizontal">
                        <button onClick={this.grape}>The Grape Thing, Explained</button>
                        <button onClick={this.shark}>SharkBoy and Lavagirl Fanfiction</button>
                        <button><a href="https://ko-fi.com/jeevitat" target="_blank" rel="noopener noreferrer">Give me 20 dollars</a></button>
                    </div>
                    <FrontText />
                </div>
            );
        } else if (state == 1) {
            return (
                <div>
                    <h1 onClick={this.home}>Buffzeed.com</h1>
                    <div id="horizontal">
                        <button onClick={this.grape}>The Grape Thing, Explained</button>
                        <button onClick={this.shark}>SharkBoy and Lavagirl Fanfiction</button>
                        <button><a href="https://ko-fi.com/jeevitat" target="_blank" rel="noopener noreferrer">Give me 20 dollars</a></button>
                    </div>
                    <Grape />
                </div>
            );
        } else if (state == 2) {
            return (
                <div>
                    <h1 onClick={this.home}>Buffzeed.com</h1>
                    <div id="horizontal">
                        <button onClick={this.grape}>The Grape Thing, Explained</button>
                        <button onClick={this.shark}>SharkBoy and Lavagirl Fanfiction</button>
                        <button><a href="https://ko-fi.com/jeevitat" target="_blank" rel="noopener noreferrer">Give me 20 dollars</a></button>
                    </div>
                    <Shark />
                </div>
            );
        } else {
            return (
                <div>
                    <h1 onClick={this.home}>Buffzeed.com</h1>
                    <div id="horizontal">
                        <button onClick={this.grape}>The Grape Thing, Explained</button>
                        <button onClick={this.shark}>SharkBoy and Lavagirl Fanfiction</button>
                        <button><a href="https://ko-fi.com/jeevitat" target="_blank" rel="noopener noreferrer">Give me 20 dollars</a></button>
                    </div>
                    <p>Guess something went wrong homie oops</p>
                </div>
            );
        }
    }

}

export default Site;