let interstitialAd = null;

Page({
  data: {
    heroInfo: null,
    appConfig: null,
    params: null
  },

  onLoad: function (options) {
    var appConfig = wx.getStorageSync('appConfig');
    this.setData({
      params: options,
      appConfig: appConfig
    });

    if (options.hero != "" && options.type != "") {
      this.loadHeroInfo(options.hero, options.type);
    }

    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: appConfig.ad.screen_adUnitId
      })
      interstitialAd.onLoad(() => { })
      interstitialAd.onError((err) => { })
      interstitialAd.onClose(() => { })
    }

    if(appConfig && appConfig.ad.showScreen){
      setTimeout(function () {
        if (interstitialAd) {
          interstitialAd.show().catch((err) => {
            console.log('插屏广告加载失败')
          })
        }
      }, 3000);
    }
  },

  loadHeroInfo: function (hero, type) {
    var _this = this;
    wx.showLoading({
      title: '加载中...',
    });
    var url = _this.data.appConfig.config.getHeroInfo + '?hero='+hero+'&type='+type;
    wx.request({
      url: url,
      success: res => {
        if (res.data.code == 200) {
          _this.setData({
            heroInfo: res.data.data
          });
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
  },

  openWebView: function (e) {
		wx.navigateTo({
			url: '/pages/web-view/web-view?url='+ this.data.appConfig.config.gaizhanqu,
		})
	},

  onReady: function () {

  },

  goHome: function(){
    wx.switchTab({
      url: "/pages/qq/index"
    })
  },

  zhanqu: function(){
    wx.switchTab({
      url: "/pages/help/help"
    })
  },

  share: function(){
    this.onShareAppMessage();
  },

  onShareAppMessage: function () {
    if(this.data.params){
      var hero = this.data.params.hero;
      var type = this.data.params.type;
      return {
        title: hero + "最低战力",
        path: '/pages/detail/detail?hero=' + hero + "&type=" + type,
        imageUrl: '/images/share.png'
      }
    } else {
      return {
        title: "点击查询王者战力",
        path: '/pages/qq/index',
        imageUrl: '/images/share.png'
      }
    }
  }
})