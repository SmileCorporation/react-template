/*
 * @Author: 曹信坤
 * @Date: 2020-08-30 15:10:55
 * @LastEditTime: 2020-09-22 23:45:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-template\src\routes\header\index.js
 */

import React, { Component } from "react";
import './index.css'
import { Carousel, Form } from 'antd';
import aboutOne from '../../../asserts/aboutOne.png'
import aboutTwo from '../../../asserts/aboutTwo.png'
import aboutThree from '../../../asserts/aboutThree.png'
import aboutFour from '../../../asserts/aboutFour.png'

@Form.create({ fieldNameProp: null })
export default class titContent extends Component {
    getCooperation(index) {
        const data = [];
        for (let i = 0; i < index; i++) {
            data.push(<div className="cooperation-model"> </div>)
        };

        return data;
    }
    render() {
        return (
            <div className="content">
                <Carousel autoplay>
                    <div>
                        <img src={aboutOne} className="carousel" alt="不愁码码" />
                    </div>
                    <div>
                        <img src={aboutTwo} className="carousel" alt="不愁码码" />
                    </div>
                    <div>
                        <img src={aboutThree} className="carousel" alt="不愁码码" />
                    </div>
                    <div>
                        <img src={aboutFour} className="carousel" alt="不愁码码" />
                    </div>
                </Carousel>
                <div className="cooperation-header">
                    <div className="cooperation-title">
                        平台服务
                      </div>
                    <div className="cooperation-container">
                       {this.getCooperation(8)}

                    </div>

                </div>
            </div>
        )
    }
}