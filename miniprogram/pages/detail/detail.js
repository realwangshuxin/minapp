// pages/detail/detail.js
const db = wx.cloud.database({
  env: "wangshuxin-78uzn"
});
Page({
  /**
   * 页面的初始数据
   */
  data: {
    txt:"\n",
    list:[]
  },
  buy(){
    db.collection("ticket").where({
      id: this.data.list._id
    }).get().then(res => {
      // console.log(res)
      var did=res.data[0]._id
      // console.log(did)
      wx.navigateTo({
        url: '/pages/buy/buy?id='+did,
      })
    }).catch(err => { console.log(err) })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {

    }
    return {
      title: '转发',
      path: '/pages/index/community/topic/topic?jsonStr=' + this.data.list,
      success: function (res) {
        console.log('成功', res)
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection("detail").where({
      _id:options.id
    }).get().then(res => { 
      console.log(res)
      this.setData({
        list:res.data[0]
      })
      console.log(this.data.list) 
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