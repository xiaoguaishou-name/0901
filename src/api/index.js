import Ajax from '@/Ajax/Ajax'
import mockAjax from '@/Ajax/mockAjax'
//请求首页三级分类数据
export const reqCategoryList = () => Ajax({
  url:'/product/getBaseCategoryList',
  method:'GET'
})
//mock banner数据
export const reqBannerList = () => mockAjax({
  url:'/banner',
  method:'GET'
})

//mock floor数据
export const reqFloorList = () => mockAjax({
  url:'/floor',
  method:'GET'
})

// 请求搜索页商品数据
export const reqGoodsList = (searchParams) =>Ajax.post('/list',searchParams)
