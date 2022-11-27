//利用mockjs插件,造出数据可视化的接口
//引入Mock
import Mock from 'mockjs';
//引入JSON数据
import data from './training.json';
//造一个接口:第一个参数接口地址  第二个参数:接口返回服务器数据
Mock.mock("/mock/training",{code:200,data});