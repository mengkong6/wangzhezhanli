const app = getApp();

Page({
  data: {
  },
  onLoad: function () {
	  
  },
  
  previewImage: function(e) {
  	var current = e.target.dataset.src;
		var imglist = [current];
  	wx.previewImage({
  		current: current,
  		urls: imglist
  	})
  },
  
	onShareAppMessage: function (e) {
		var	shareObj = {
			title: "好友分享一个战力无人区给你",
			path: '/pages/qq/index',
			imageUrl: '/images/share.png'
		};
		return shareObj;
	}
  
});
