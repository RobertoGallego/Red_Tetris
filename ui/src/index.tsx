import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux"
import store from "./redux/store";

import ArticlesList from "./components/articles/articleList";
import Navbar from "./components/navbar/navbar";
import VideoList from "./components/videos/videoList";
import VideoForm from "./components/videos/videoForm";

import "./index.css";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path={["/", "/videos"]} component={VideoList} />
                    <Route exact path="/articles" component={ArticlesList} />
                    <Route path="/new-video" component={VideoForm} />
                    <Route path="/update/:id" component={VideoForm} />
                </Switch>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
    
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
