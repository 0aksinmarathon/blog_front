import './App.css';
import React from 'react';
import ButtonAppBar from './ButtonAppBar';
import About from "./components/About";
import Articles from "./components/Articles";
import ArticleDetail from "./components/ArticleDetail";
import Home from "./components/Home";
import Counter from "./components/Counter";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './state/reducers'

const store = createStore(reducer)

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <ButtonAppBar/>
                    <div>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route exact path='/article' component={Articles}/>
                        <Route path="/article/:id" component={ArticleDetail} />
                        <Route path='/counter' component={Counter}/>
                    </div>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
