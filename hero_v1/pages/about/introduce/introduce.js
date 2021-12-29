const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,  
  },
  onLoad: function () {
	  
  },
  
  pageBack() {
    wx.navigateBack({
      delta: 1
    });
  },
  
  previewImage: function(e) {
  	var current = e.target.dataset.src;
	var imglist = [current];
  	wx.previewImage({
  		current: current,
  		urls: imglist
  	})
  },
  
  onShareAppMessage: function() {
  	return {
  		title: '网课答案不用愁，戳我搜索',
  		path: 'pages/homepage/wangke/wangke',
  		imageUrl: "/images/share.png",
  		success: (res) => {
  			console.log("转发成功", res);
  		},
  		fail: (res) => {
  			console.log("转发失败", res);
  		}
  	}
  },
  
});
