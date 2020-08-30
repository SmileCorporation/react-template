/*
 * @Author: your name
 * @Date: 2020-08-30 15:10:55
 * @LastEditTime: 2020-08-30 16:35:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-template\src\routes\header\index.js
 */

import React, { Component } from "react";
import './index.css'
import { Carousel } from 'antd';
import aboutOne from '../../../asserts/aboutOne.png'
import aboutTwo from '../../../asserts/aboutTwo.png'
import aboutThree from '../../../asserts/aboutThree.png'
import aboutFour from '../../../asserts/aboutFour.png'

export default class titContent extends Component {

    render() {
        return (
            <div className="content">
                <Carousel autoplay>
                    <div>
                       <img src={aboutOne} className="carousel" alt="不愁码码" />
                    </div>
                    <div>
                    <img src={aboutTwo}  className="carousel" alt="不愁码码" />
                     </div>
                    <div>
                    <img src={aboutThree}  className="carousel" alt="不愁码码" />
                    </div>
                    <div>
                    <img src={aboutFour}  className="carousel" alt="不愁码码" />
                    </div>
                </Carousel>
                
            </div>
        )
    }
}