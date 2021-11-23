// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
const install = (Vue, vm) => {
	let api = {}
	// 获取广告位列表信息
	api.getAdvert = params => vm.$u.get('/advertisingspace/advertising', params)
	
	// 获取动态列表信息
	api.getFeeds = params => vm.$u.get('/feeds', params)
	
	// 获取资讯列表信息
	api.getNews = params => vm.$u.get('/news', params)
	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = api
}

export default {
	install
}