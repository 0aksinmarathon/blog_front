import './App.css';
import React from 'react';
import ButtonAppBar from './ButtonAppBar';
import About from "./components/About";
import Articles from "./components/Articles";
import ArticleDetail from "./components/ArticleDetail";
import Home from "./components/Home";
import Counter from "./components/Counter";
import LoginPageF from "./components/LoginPageF";
import Auth from "./components/Auth";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './state/reducers'
import axios from 'axios';

const store = createStore(reducer)

function App() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization')
    console.debug('App')
    console.debug(localStorage.getItem('Authorization'))
    console.debug(axios.defaults.headers.common['Authorization'])
    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <ButtonAppBar/>
                    <div>
                        <Route path='/login' component={LoginPageF}/>
                        <Auth>
                            <Route exact path='/' component={Home}/>
                            <Route path='/about' component={About}/>
                            <Route exact path='/article' component={Articles}/>
                            <Route path="/article/:id" component={ArticleDetail} />
                            <Route path='/counter' component={Counter}/>
                        </Auth>
                    </div>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
