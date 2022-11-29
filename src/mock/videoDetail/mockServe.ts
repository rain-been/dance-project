
import lable from '../videoDetail/label.json'
import theme from '../videoDetail/theme.json'
import videoListData from '../videoDetail/videoList.json'
// mock接口
import Mock from 'mockjs'
// mock接口-Get接口
Mock.mock('/mock/videoDeail/lable',{code:200,data:lable.labelList})
Mock.mock('/mock/videoDetail/videoList',{code:200,data:videoListData})
Mock.mock('/mock/videoDeail/theme',{code:200,data:theme})