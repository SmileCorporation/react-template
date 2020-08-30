/*
 * @Author: your name
 * @Date: 2020-08-30 15:10:55
 * @LastEditTime: 2020-08-30 15:40:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-template\src\routes\header\index.js
 */

import React,{Component} from "react";
import './index.css'

export default class titFooter extends Component{
   render(){
       return(
           <div className="footer">
               <div>
                   投资咨询
               </div>
               <div>
                 合作伙伴
               </div>
               <div>
                  企业查询
               </div>
           </div>
       )
   }
}