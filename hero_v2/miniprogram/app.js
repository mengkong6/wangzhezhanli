//app.js
App({
  onLaunch: function () {

    wx.showLoading({
      title: '加载中...',
    })

    wx.request({
      url: 'https://www.somekey.cn/mini/hero/getHeroConfig.json',
      success: res => {
        if (res.data.code == 200) {
          var result = res.data.data;
          wx.setStorageSync('appConfig', result);
          if (result.notice.switch) {
            setTimeout(function () {
              wx.showModal({
                title: '温馨提示',
                content: result.notice.content,
                showCancel: false,
                cancelText: "否",
                confirmText: "好的",
                success: function (res) {
                  wx.setStorageSync('readNotice', true);
                },
              })
            }, 1000)
          }

        } else {
          wx.showToast({
            title: '加载失败',
            icon: 'info'
          })
        }
      },
      complete: () => {
        wx.hideLoading();
      }
    })
    
    this.globalData = {
      userInfo: {},
      canIUseGetUserProfile: false,
      hasUserInfo: false,
    }
  }
})
