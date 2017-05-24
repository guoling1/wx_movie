var util = require('../../utils/subjectUtil.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "/assets/img/001.jpg",
      "/assets/img/002.jpg",
      "/assets/img/003.jpg"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    movies:[],
    hidden:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMovie()
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

  loadMovie: function(){
    var that = this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters',
      header:{
        "Content-Type":'json'
      },
      success:function(res){
        console.log(res)
        var subjects = res.data.subjects;
        util.processSubjects(subjects);
        that.setData({movies:subjects,hidden:true})
      },
      fail:function(err){
        console.log(err)
      }
    })
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