// pages/buy/buy.js
const db = wx.cloud.database({
  env: "wangshuxin-78uzn"
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[],
    inputValue:"",
    inputValue2:""
  },
  cart(){
    if (this.data.inputValue == "") {
      wx.showToast({
        title: '请输入手机号',
        icon: "none",
        duration: 2000
      })
      return;
    }
    if (this.data.inputValue == "") {
      wx.showToast({
        title: '请输入姓名',
        icon: "none",
        duration: 2000
      })
      return;
    }
    var id=this.data.arr._id;
    console.log(id)
    wx.navigateTo({
      url: '/pages/cart/cart?id='+id,
    })
    db.collection('user').add({
      data: {
        name:this.data.inputValue,
        phone:this.data.inputValue2,
        id: this.data.arr._id
      },
      success: res => {console.log(res)},
      fail: err => {},
    })
  },
  bindInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindInput2: function (e) {
    this.setData({
      inputValue2: e.detail.value
    })
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