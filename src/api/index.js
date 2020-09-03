import Ajax from '@/Ajax/Ajax'
export const reqCategoryList = () => Ajax({
  url:'/product/getBaseCategoryList',
  method:'GET'
})