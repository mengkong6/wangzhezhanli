const app = getApp();
Page({
  data: {

  },
  onLoad: function () { },
  pageBack() {
    wx.navigateBack({
      delta: 1
    });
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
