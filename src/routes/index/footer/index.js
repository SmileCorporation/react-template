/*
 * @Author: your name
 * @Date: 2020-08-30 15:10:55
 * @LastEditTime: 2020-09-03 01:06:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-template\src\routes\header\index.js
 */

import React, { Component } from "react";
import WxCode from "../../../asserts/mama/WxCode.jpg"
import './index.css'

export default class titFooter extends Component {
    render() {
        return (
            <div className="footer">
                <div className="header-model">
                    <div className="title">服务咨询</div>
                    <div className="link">
                        <a>系统制作</a>
                        <a>快速成长</a>
                        <a>定制服务</a>
                    </div>
                </div>
                <div className="header-model">
                    <div className="title">快速下单</div>
                    <div className="link">
                        <a>软件安装</a>
                        <a>网站制作</a>
                        <a>APP制作</a>
                    </div>
                </div>
                <div className="header-model">

                    <div className="title">框架下载</div>
                    <div className="link">
                        <a>React框架</a>
                        <a>Vue框架</a>
                        <a>Angular框架</a>
                    </div>
                </div>
                <div className="header-model">
                    <div className="title">友 情 链 接</div>
                    <div className="link">
                        <a>哔哩哔哩</a>
                        <a>菜鸟教程</a>
                        <a>W3CSchool</a>
                    </div>
                </div>
                <div className="header-model">
                    <div>
                        <div className="title">
                            关注码码公众号
                       </div>
                    </div>
                    <div>
                        <img src={WxCode} alt="mama" className="footer-img" />
                    </div>
                </div>
            </div>
        )
    }
}