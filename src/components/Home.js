import logo from '../logo.svg';
import React from 'react';
import {Button} from '@material-ui/core';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

function Home() {
    const count = useSelector((state) => state.counter.count_value)
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Reactckansdcovnasdjkvnckjasdncvkjas
                </a>
                <Button color="primary" onClick={() => {
                    alert('clicked')
                }}>Hello World</Button>
                <Link to="/about">About</Link>,
                <Link to="/article">Articles</Link>
                <Link to="/counter">Counter</Link>
                <h1>{count}</h1>
            </header>
        </div>
    );
}

export default Home;
