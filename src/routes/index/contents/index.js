/*
 * @Author: 不愁码码开发团队
 * @Date: 2020-08-30 15:10:55
 * @LastEditTime: 2020-09-29 20:35:23
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
import Axios from 'axios'

export default class titContent extends Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            cooperationData: [],
        }
    }
    getCooperation(index) {
        const data = [];
        this.state.cooperationData.forEach((item, index) => {
            data.push(
                <div className="cooperation-model" key={index}>
                    <div className="cooperation-model-top">
                        <img src={item.img} width="100%" height="100%" className="cooperation-img" alt={item.title} />
                    </div>
                    <div className="cooperation-model-title">{item.title}</div>
                </div>)
        })
        return data;
    }

    UNSAFE_componentWillMount() {
        Axios.get('https://www.fastmock.site/mock/38b63f3a46203fadc7c390612ad9a2ba/nomama/cooperation/project').then(res => {
            console.log(res);
            const { data } = res;
            this.setState({
                cooperationData: data,
            })

        })

    }
    render() {


        console.log(this.formRef);
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
                        {this.getCooperation()}
                    </div>
                    
                    <div className="cooperation-title">
                        平台服务
                    </div>
                    <div className="cooperation-container">
                        {this.getCooperation()}
                    </div>
                    
                </div>
            </div>
        )
    }
}
