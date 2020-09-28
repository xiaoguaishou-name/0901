import Mock from 'mockjs'
import banner from './banner.json'
import floor from './floor.json'
//第一个参数是我们要请求的模拟接口，第二个参数是访问这个接口后返回的数据
Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/floor',{code:200,data:floor})
//最后切记在入口文件去引入一下，代表这个文件一开始就会执行