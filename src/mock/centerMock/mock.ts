// @ts-ignore
import Mock from "mockjs";
import userInfo from "./data/userInfo.json";
import dynamics from "./data/dynamics.json";
import members from "./data/members.json";
import city from "./data/city.json";
import skillevel from "./data/skillevel.json";
import myAvocationList from "./data/myAvocationList.json";
import avocationList from "./data/avocationList.json";

// 获取用户数据
Mock.mock("/mock/userinfo", {
  code: 200,
  data: userInfo,
  message: 'success'
});
// 获取资源动态
Mock.mock("/mock/dynamics", {
  code: 200,
  data: dynamics,
  message: 'success'
});
// 获取会员套餐列表
Mock.mock("/mock/members", {
  code: 200,
  data: members,
  message: 'success'
});
// 获取城市列表
Mock.mock("/mock/city", {
  code: 200,
  data: city,
  message: 'success'
});
// 获取技能等级
Mock.mock("/mock/skillevel", {
  code: 200,
  data: skillevel,
  message: 'success'
});
// 获取个人爱好
Mock.mock("/mock/myavocationlist", {
  code: 200,
  data: myAvocationList,
  message: 'success'
});
// 获取爱好列表
Mock.mock("/mock/avocationlist", {
  code: 200,
  data: avocationList,
  message: 'success'
});
