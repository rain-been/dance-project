
import Mock from 'mockjs'
import all from './all.json'
import create from './create.json'
import join from './join.json'
import course from './course.json'
import history from './history.json'
import details from './details.json'

Mock.mock('/mock/getHistoryData', () => {
  return {
    code: 200,
    data:history,
    message: 'success'
  }
})
Mock.mock('/mock/getAllMyData', () => {
  return {
    code: 200,
    data:all,
    message: 'success'
  }
})
Mock.mock('/mock/getMyData/myListCategory=my_create', () => {
  return {
    code: 200,
    data:create,
    message: 'success'
  }
})
Mock.mock('/mock/getMyData/myListCategory=1', () => {
  return {
    code: 200,
    data:all,
    message: 'success'
  }
})
Mock.mock('/mock/getMyData/myListCategory=my_join', () => {
  return {
    code: 200,
    data:join,
    message: 'success'
  }
})
Mock.mock('/mock/getMyData/myListCategory=my_course', () => {
  return {
    code: 200,
    data:course,
    message: 'success'
  }
})
Mock.mock('/mock/getDetails', () => {
  return {
    code: 200,
    data:details,
    message: 'success'
  }
})