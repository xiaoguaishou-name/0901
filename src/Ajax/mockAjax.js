import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const service = axios.create({
  baseURL:'/mock',//配置基础路径
  timeout:20000,//设置超时限制
})

//请求拦截器
service.interceptors.request.use(config=>{
  // 进度条开启
  NProgress.start()
  return config
})

//响应拦截器
service.interceptors.response.use(response=>{
  // 进度条停止
  NProgress.done()
  return response.data
},error=>{
  NProgress.done()
  alert('请求出错' + error.message || '未知错误')
  //中断promise链
  return new Promise(()=>{})
})
export default service