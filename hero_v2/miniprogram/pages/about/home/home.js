//获取应用实例
const app = getApp()
let videoAd = null

Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse:false,
    appConfig: null
  },
  
  attached() {
    var appConfig = wx.getStorageSync('appConfig');
    if (wx.createRewardedVideoAd) {
      videoAd = wx.createRewardedVideoAd({
        adUnitId: appConfig.ad.video_adUnitId
      })
      videoAd.onLoad(() => {})
      videoAd.onError((err) => {})
      videoAd.onClose((res) => {})
    }

    if (wx.getUserProfile) {
      this.setData({
        canIUse: true
      })
    }

  },
  methods: {
    getUserInfo(e) {
      wx.getUserProfile({
        desc: '用于展示会员资料', 
        success: (res) => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    },

    goDetailPage(e) {
      var page = e.currentTarget.dataset.page;
      wx.navigateTo({
        url: page
      })
    },

    showAD: function (e) {
      var self = this;
      wx.showModal({
        title: '提示',
        content: '观看视频广告，才能解锁呦',
        cancelText: '不需要',
        confirmText: '立即观看',
        success(res) {
          if (res.confirm) {
            if (videoAd) {
              videoAd.show().catch(() => {
                videoAd.load()
                  .then(() => videoAd.show())
                  .catch(err => {
                    self.goDetailPage(e); 
                  })
              })
              videoAd.onClose((result) => {
                if (result && result.isEnded || result === undefined) {
                  self.goDetailPage(e); 
                } else {
                  wx.showToast({
                    title: '解锁失败',
                    icon: 'error'
                  })
                }
              })
            }
          }
        }
      })
    },

  }
})