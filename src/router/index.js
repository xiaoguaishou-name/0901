import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location,onResolved,onRejected){
  if(onResolved === undefined && onRejected === undefined){
    return originPush.call(this,location).catch(()=>{})
  }else{
    originPush.call(this,location,onResolved,onRejected)
  }
}
VueRouter.prototype.replace = function(location,onResolved,onRejected){
  if(onResolved === undefined && onRejected === undefined){
    return originReplace.call(this,location).catch(()=>{})
  }else{
    originReplace.call(this,location,onResolved,onRejected)
  }
}

Vue.use(VueRouter)

export default new VueRouter({
  routes
})

