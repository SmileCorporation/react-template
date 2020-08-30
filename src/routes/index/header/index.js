/*
 * @Author: your name
 * @Date: 2020-08-30 15:10:55
 * @LastEditTime: 2020-08-30 15:35:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-template\src\routes\header\index.js
 */

 import React,{Component} from "react";
 import './index.css'

 export default class titHeader extends Component{
    render(){
        return(
            <div className="header">
                <div>
                  首页
                </div>
                <div>
                  关于我们
                </div>
                <div>
                   团队介绍
                </div>
                <div>
                    登陆 | 注册
                </div>
            </div>
        )
    }
 }