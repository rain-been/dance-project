//引入mock插件
import Mock from "mockjs";
//轮播图
import banner from './banner.json'
//技能
import userSkill from './userSkill.json'
//播放视频
import video from './video.json'
Mock.mock("/mock/banner",{code:200,data:banner});
Mock.mock("/mock/userSkill",{code:200,data:userSkill});

Mock.mock("/mock/video",{code:200,data:video});
