Page({
  data: {
      url: null,
  },
  
  onLoad: function (options) {
    if(options.url){
      this.setData({
        url: options.url
      }); 
    }
  },

	onShareAppMessage: function (e) {
		var	shareObj = {
			title: "点击查询王者战力",
			path: '/pages/qq/index',
			imageUrl: '/images/share.png'
		};
		return shareObj;
	}
})