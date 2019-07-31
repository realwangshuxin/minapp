// pages/cart/cart.js
const db = wx.cloud.database({
  env: "wangshuxin-78uzn"
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:1,
    price:398,
    total:398,
    result:[],
    phone:""
  },
  down(){
    if(this.data.count>1){
      var count2=this.data.count-1;
      var total2=count2*this.data.price
      this.setData({
        count:count2,
        total:total2
      })
    }
  },
  up() {
    if (this.data.count<10) {
      var count2 = this.data.count + 1;
      var total2 = count2 * this.data.price
      this.setData({
        count: count2,
        total: total2
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection("ticket").where({
      _id: options.id
    }).get().then(res => {
      this.setData({
        result: res.data[0],
        price: res.data[0].list[0].price2
      })
      console.log(this.data.result)
    }).catch(err => { console.log(err) })

    db.collection("user").where({
      id: options.id
    }).get().then(res => {
      this.setData({
        phone: res.data[0].phone
      })
      console.log(this.data.phone)
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