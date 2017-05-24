// pages/search/search.js
var util = require('../../utils/subjectUtil.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: "",
    movies: [],
    hidden: true,
    modalHidden: true
  },
  bindKeyInput: function (e) {
    this.setData({ inputVal: e.detail.value });
  },
  search: function () {
    if (this.data.inputVal == "") {
      this.setData({ modalHidden: false })
      return;
    }
    this.setData({ hidden: false });
    var page = this;
    wx.request({
      url: 'http://api.douban.com/v2/movie/search?q=' + page.data.inputVal,
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        var subjects = res.data.subjects;
        util.processSubjects(subjects);
        page.setData({ movies: subjects, hidden: true });
        console.log(page.data)
      }
    })
  },
  hideModal: function () {
    this.setData({ modalHidden: true })
  },
  detail: function (e) {
    getApp().detail(e);
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