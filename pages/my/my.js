// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      img: "",
      nikeName: "未登录"
    },
    actionText: "登录",
    btnType: "primary"
  },
  wallet:function () {
    wx.redirectTo({
      url: '../wallet/wallet',
    })
  },
  login: function () {
    if (this.data.actionText == "登录") {
      wx.login({ 
        success: (res) => {
          wx.showLoading({
            title: '正在登录',
          }), 
          wx.getUserInfo({
            success: (res) => {
              wx.hideLoading(),
                this.setData({
                  userInfo: {
                    img: res.userInfo.avatarUrl,
                    nikeName: res.userInfo.nickName
                  },
                  actionText: "退出登录",
                  btnType: "warn"
                })
              wx.setStorage({
                key: 'userInfo',
                data: {
                  userInfo: {
                    img: res.userInfo.avatarUrl,
                    nikeName: res.userInfo.nickName
                  },
                  actionText: "退出登录",
                  btnType: "warn"
                },
              })
              console.log(res)
            }
          })
        }
      })
    }else{
      wx.showModal({
        title: '注意',
        content: '确定退出？',
        success:(res) => {
          if(res.confirm){
            wx.removeStorageSync("userInfo")
            this.setData({
              userInfo: {
                img: "",
                nikeName: "未登录"
              },
              actionText: "登录",
              btnType: "primary"
            })
          }
        }
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'userInfo',
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: {
            img: res.data.userInfo.img,
            nikeName: res.data.userInfo.nikeName
          },
          actionText: res.data.actionText,
          btnType: res.data.btnType
        })
      },
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