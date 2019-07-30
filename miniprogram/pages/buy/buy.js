// pages/buy/buy.js
const db = wx.cloud.database({
  env: "wangshuxin-78uzn"
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection("ticket").where({
      _id: options.id
    }).get().then(res => {
      console.log(res)
      this.setData({
        arr: res.data[0]
      })
    console.log(this.data.arr)
    }).catch(err => { console.log(err) })
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