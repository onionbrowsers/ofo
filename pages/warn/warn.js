// pages/warn/warn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxValue: [],
    checkboxList: [{
      checked: false,
      title: "私锁私用"
    }, {
      checked: false,
      title: "违规乱停"
    }, {
      checked: false,
      title: "密码不对"
    }, {
      checked: false,
      title: "刹车坏了"
    }, {
      checked: false,
      title: "车牌缺损"
    }, {
      checked: false,
      title: "轮胎坏了"
    }, {
      checked: false,
      title: "车锁坏了"
    }, {
      checked: false,
      title: "其他故障"
    }],
    pics: [],
    text: "添加图片",
    bikeInfo: {
      number: 0,
      desc: ""
    }
  },
  num: function (e) {
    this.setData({
      bikeInfo: {
        number: e.detail.value,
        desc: this.data.bikeInfo.desc
      }
    })
  },
  change: function (e) {
    this.setData({
      bikeInfo: {
        number: this.data.bikeInfo.number,
        desc: e.detail.value
      }
    })
  },
  submit: function () {
    if (this.data.checkboxValue.length && this.data.pics.length && this.data.bikeInfo.number && this.data.bikeInfo.desc) {

    } else {
      wx.showModal({
        title: '警告', 
        content: '请将信息完善',
        success: (res) => {
          if (res.confirm) {

          } else {
            wx.redirectTo({
              url: '../index/index',
            })
          }
        }
      })
    }
  },
  bindChange: function (e) {
    this.data.checkboxValue = e.detail.value
  },
  takePhoto: function () {
    wx.chooseImage({
      success: (res) => {
        var pic = this.data.pics
        var pics = pic.concat(res.tempFilePaths)
        this.setData({
          pics: pics,
          text: "+"
        })
      },
    })
  },
  del: function (e) {
    var index = e.currentTarget.dataset.id
    this.data.pics.splice(index, 1)
    var pic = this.data.pics
    if (this.data.pics.length) {
      this.setData({
        pics: pic
      })
    } else {
      this.setData({
        pics: pic,
        text: "添加图片"
      })
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