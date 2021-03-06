/*
 * @Author: your name
 * @Date: 2020-08-30 14:43:33
 * @LastEditTime: 2020-09-29 20:23:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-template\src\routes\index\Index.js
 */
import React, { Component } from "react"
import { Layout } from "antd";
import { HashRouter, Route, Switch } from 'react-router-dom';
import titHeader from './header';
import titFooter from "./footer";
import titContent from "./contents";
import "../../App.css"

const { Header, Footer, Content } = Layout;


export default class Index extends Component {
    render() {
        return (
            <Layout>
                <Header className="header">
                    <HashRouter>
                        <Switch>
                            <Route path="/" component={titHeader} />
                        </Switch>
                    </HashRouter>
                </Header>
                <Content>
                <HashRouter>
                        <Switch>
                            <Route path="/" component={titContent} />
                        </Switch>
                    </HashRouter>
                </Content>
                <Footer className="footer" style={{height: 150}}>
                    <HashRouter>
                        <Switch>
                            <Route path="/" component={titFooter} />
                        </Switch>
                    </HashRouter>
                </Footer>
            </Layout>
        )
    }
}