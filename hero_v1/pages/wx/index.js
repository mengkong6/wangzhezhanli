const app = getApp();

Page({
	data: {
		herolist: [],
		heroInfo: null,
		currHero: null,
		swiperList: app.globalData.swiperList
	},

	onLoad: function(options) {
		var _this = this;
		if(app.globalData.herolist.length > 0){
			_this.setData({
				herolist: app.globalData.herolist
			})
		} else {
			wx.showLoading({
				title: '加载中...',
				mask: true
			})
			wx.request({
				url: app.globalData.getHeroList,
				success: res => {
					if (res.data.code == 200) {
						app.globalData.herolist = res.data.data;
						_this.setData({
							herolist: res.data.data
						})
					} else {
						wx.showToast({
							title: '英雄加载失败',
							icon: 'info'
						})
					}
				},
				complete: () => {
					wx.hideLoading();
				}
			})
		}

	},

	findHero: function (e) {
		var _this = this;
		wx.showLoading({
			title: '加载中...',
		})
		var hero = e.currentTarget.dataset.hero;
		if (hero == "") {
			wx.showToast({
				title: '没有找到相关英雄',
				icon: 'info'
			})
		} else {
			_this.setData({
				currHero: hero
			});
			wx.request({
				url: app.globalData.getHeroInfo+'?hero='+hero+'&type=wx',
				success: res => {
					if (res.data.code == 200) {
						var result = res.data.data;
						var content = '最低县标：'+result.area+'（'+result.areaPower+'）\r\n'
						content = content + '最低市标：'+result.city+'（'+result.cityPower+'）\r\n'
						content = content + '最低省标：'+result.province+'（'+result.provincePower+'）\r\n'
						content = content + '更新时间：'+result.updatetime;
						wx.showModal({
							title:'安卓wx-'+hero,
							showCancel: false,
							content: content,
						})
					} else {
						wx.showToast({
							title: '请求失败',
							icon: 'info'
						})
					}
				},
				complete: () => {
					wx.hideLoading();
				}
			})
		}
	},
	
	onShareAppMessage: function() {
		var shareObj = {
			title: "免费王者战力查询", 
			path: '/pages/qq/index', 
			imageUrl: '/images/share.png'
		};
		return shareObj;
	}
})
