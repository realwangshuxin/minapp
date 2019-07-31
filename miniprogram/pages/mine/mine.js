// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    name:"",
    src:"cloud://wangshuxin-78uzn.7761-wangshuxin-78uzn-1259662524/Icon_wode.png",
    login:true,
    show:false
  },
  yes(){
     setTimeout(function(){
            wx.switchTab({
              url: '/pages/main/main'
            })
          },1000)
          this.setData({
            name:"LOVEIS404NOTFOUND",
            src:"cloud://wangshuxin-78uzn.7761-wangshuxin-78uzn-1259662524/mine.jpg",
            login:false,
            show:false
          })
  },
  bindGetUserInfo: function (e) {
    this.setData({
      show:true
    })
    if (e.detail.userInfo) {
     
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              //从数据库获取用户信息
              that.queryUsreInfo();
              //用户已经授权过
              wx.switchTab({
                url: ''
              })
            }
          });
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})