/*
 * @Author: your name
 * @Date: 2020-08-30 00:58:41
 * @LastEditTime: 2020-08-30 14:48:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-template\src\App.js
 */
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Index from './routes/index/Index';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" component={Index} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
