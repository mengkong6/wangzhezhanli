//app.js
App({
  onLaunch: function () {
    this.globalData = {
      getHeroList:'https://www.somekey.cn/mini/hero/getHeroList.php',
      getHeroInfo:'https://www.somekey.cn/mini/hero/getHeroInfo.php',
      herolist: [],
      swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://7761-wangzhe-5ge9qlsf7b017509-1305930946.tcb.qcloud.la/ad1.png',
      }, {
        id: 1,
        type: 'image',
        url: 'https://7761-wangzhe-5ge9qlsf7b017509-1305930946.tcb.qcloud.la/ad2.png',
      }, {
        id: 2,
        type: 'image',
        url: 'https://7761-wangzhe-5ge9qlsf7b017509-1305930946.tcb.qcloud.la/ad3.png'
      }, {
        id: 3,
        type: 'image',
        url: 'https://7761-wangzhe-5ge9qlsf7b017509-1305930946.tcb.qcloud.la/ad4.png'
      }]
    }
  }
})
