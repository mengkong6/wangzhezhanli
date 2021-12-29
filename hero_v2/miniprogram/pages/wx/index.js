let videoAd = null

Page({
	data: {
		showDialog: false,
		currHero: "",
		appConfig: null,
	},

	onLoad: function () {
		var appConfig = wx.getStorageSync('appConfig');
		this.setData({
			appConfig: appConfig,
		});

		if (wx.createRewardedVideoAd) {
			videoAd = wx.createRewardedVideoAd({
				adUnitId: appConfig.ad.video_adUnitId
			})
			videoAd.onLoad(() => { })
			videoAd.onError((err) => { })
		}
	},

	search: function (e) {
		var _this = this;
		var type = e.currentTarget.dataset.type;
		var hero = _this.data.currHero;
		if (hero == "" || type == "") {
			wx.showToast({
				title: '没有找到相关英雄',
				icon: 'none'
			})
		} else {
			_this.hideModal();
			if(this.data.appConfig){
				if (this.data.appConfig.ad.IOSvideoStatus){
					this.ShowAD(hero,type);
				} else {
					wx.navigateTo({
						url: '/pages/detail/detail?hero=' + hero + "&type=" + type,
					})
				}
			} else {
				wx.showModal({
					title: '温馨提示',
					content: '数据加载失败，请重新载入',
					showCancel: false,
					cancelText: "否",
					confirmText: "好的",
					success: function (res) {
						wx.setStorageSync('readNotice', true);
					},
				})
			}
		}
	},


	ShowAD: function (hero, type) {
		wx.showModal({
			title: '提示',
			content: '该数据需要观看广告后查看',
			cancelText: '宝宝不看',
			confirmText: '看一下吧',
			success(res) {
				if (res.confirm) {
					if (videoAd) {
						videoAd.show().catch(() => {
							videoAd.load()
								.then(() => videoAd.show())
								.catch(err => {
									wx.navigateTo({
										url: '/pages/detail/detail?hero=' + hero + "&type=" + type,
									})
								})
						})
						videoAd.onClose((result) => {
							if (result && result.isEnded || result === undefined) {
								wx.navigateTo({
									url: '/pages/detail/detail?hero=' + hero + "&type=" + type,
								})
							} else {
								wx.showToast({
									title: '你放弃了查询',
									icon: 'none'
								})
							}
						})
					}
				} else if (res.cancel) {
					wx.showToast({
						title: '期待下次光临',
						icon: 'none'
					})
				}
			}
		})
	},

	openWebView: function (e) {
		var that = this;
		var index = e.currentTarget.dataset.index;
		wx.navigateTo({
			url: '/pages/web-view/web-view?url=' + that.data.appConfig.swiper[index].url,
		})
	},

	showModal: function (e) {
		this.setData({
			currHero: e.currentTarget.dataset.hero,
			showDialog: true
		})
	},

	hideModal: function () {
		this.setData({
			showDialog: false
		})
	},

	onShareAppMessage: function (e) {
		var	shareObj = {
			title: "点击查询王者战力",
			path: '/pages/wx/index',
			imageUrl: '/images/share.png'
		};
		return shareObj;
	}
})
