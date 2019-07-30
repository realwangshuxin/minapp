// pages/main/main.js
import Toast from 'vant-weapp/toast/toast';
const db = wx.cloud.database({
  env: "wangshuxin-78uzn"
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/banner1.jpg',
      '../../images/banner2.jpg',
      '../../images/banner3.jpg'
    ],
    time1:5618,
    time2:309,
    time3:347,
    show: false,
    like1:"cloud://wangshuxin-78uzn.7761-wangshuxin-78uzn/like.png",
    like2:"cloud://wangshuxin-78uzn.7761-wangshuxin-78uzn/like.png",
    like3:"cloud://wangshuxin-78uzn.7761-wangshuxin-78uzn/like.png",
    focus: false,
    search_list:[],
    inputValue:''
  },
  setSearchStorage: function () {
    db.collection('detail').where({
      //使用正则查询，实现对搜索的模糊查询
      title: db.RegExp({
        regexp: this.data.inputValue,
        //从搜索栏中获取的value作为规则进行匹配。
        options: 'i',
        //大小写不区分
      })
    }).get({
      success: res => {
        console.log(res)
        this.setData({
          search_list: res.data[0]
        })
        var id = res.data[0]._id
        wx.navigateTo({
          url: '/pages/detail/detail?id=' + id
        })
      },
      fail:err=>{
        console.log(err)
      }
    })
  },
  bindInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
    console.log('bindInput' + this.data.inputValue)
  },
  openKeyboard() {
    this.setData({
      focus: true
    })
  },
  change(e){
    var id=e.target.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id
    })
  },
  onClose() {
    this.setData({show:true});
  },
  onOpen(){
    this.setData({ show: false });
  },
  like1(e){
    if (this.data.like1 == "cloud://wangshuxin-78uzn.7761-wangshuxin-78uzn/like.png" && e.currentTarget.dataset.time == this.data.time1){
      this.setData({ like1: "cloud://wangshuxin-78uzn.7761-wangshuxin-78uzn/like1.png" });
      var num = e.currentTarget.dataset.time + 1;
      this.setData({ time1: num })
    }else{
      this.setData({ like1: "cloud://wangshuxin-78uzn.7761-wangshuxin-78uzn/like.png" });
      var num = e.currentTarget.dataset.time-1;
      this.setData({ time1: num })
    }
  },
  like2(e){
    if (this.data.like2 == "cloud://wangshuxin-78uzn.7761-wangshuxin-78uzn/like.png" && e.currentTarget.dataset.time == this.data.time2) {
      this.setData({ like2: "cloud://wangshuxin-78uzn.7761-wangshuxin-78uzn/like1.png" });
      var num = e.currentTarget.dataset.time + 1;
      this.setData({ time2: num })
    } else {
      this.setData({ like2: "cloud://wangshuxin-78uzn.7761-wangshuxin-78uzn/like.png" });
      var num = e.currentTarget.dataset.time - 1;
      this.setData({ time2: num })
    }
  },
  like3(e){
    if (this.data.like3 == "cloud://wangshuxin-78uzn.7761-wangshuxin-78uzn/like.png" && e.currentTarget.dataset.time == this.data.time3) {
      this.setData({ like3: "cloud://wangshuxin-78uzn.7761-wangshuxin-78uzn/like1.png" });
      var num = e.currentTarget.dataset.time + 1;
      this.setData({ time3: num })
    } else {
      this.setData({ like3: "cloud://wangshuxin-78uzn.7761-wangshuxin-78uzn/like.png" });
      var num = e.currentTarget.dataset.time - 1;
      this.setData({ time3: num })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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