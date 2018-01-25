// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:'126.491',
    latitude:'45.79'
  },
  show:function () {
    wx.getLocation({
      success: (res) => {
        this.setData({
          longitude:res.longitude,
          latitude:res.latitude
        })
      }
    }),
    wx.getSystemInfo({
      success: (res) => {
         this.setData({
           controls:[{
             id:1,
             iconPath: "/images/location.png",
             position:{
                width:50,
                height:50,
                left:10,
                top:res.windowHeight - 70
             },
             clickable:true
           }, {
             id: 2,
             iconPath: "/images/use.png",
             position: {
               width: 90,
               height: 90,
               left: res.windowWidth/2 -45,
               top: res.windowHeight - 150
             },
             clickable: true
             }, {
               id: 3,
               iconPath: "/images/warn.png",
               position: {
                 width: 50,
                 height: 50,
                 left: res.windowWidth-70,
                 top: res.windowHeight - 70
               }, clickable: true
           }, {
             id: 4,
             iconPath: "/images/avatar.png",
             position: {
               width: 50,
               height: 50,
               left: res.windowWidth- 70,
               top: res.windowHeight - 150
             }, clickable: true
             }, {
               id: 5,
               iconPath: "/images/marker.png",
               position: {
                 width: 30,
                 height: 50,
                 left: res.windowWidth/2 - 16 ,
                 top: res.windowHeight/2 - 50
               }, clickable: true
             }]
         })
      },
    })
  },
  bind:function (e) {
    switch(e.controlId){
      case 1:
        this.moveToCenter()
        break;
      case 2:
        if(this.flag){
          wx.navigateBack({
            dalta:1
          })
        }else{
          wx.scanCode({
            success: () => {
              wx / wx.showLoading({
                title: '正在获取密码',
                mask: true,
                success: function (res) { },
                fail: function (res) { },
                complete: function (res) { },
              })
              wx.request({
                url: "https://www.easy-mock.com/mock/5a693cfca8f61a09bd187a20/ofo/ofo",
                success: (res) => {
                  console.log(res)
                  wx.redirectTo({
                    url: `../scanCode/scanCode?pass=${res.data.password}&num=${res.data.number}`,
                  })
                }
              })
            }
          })
        }
        break;
        case 3:
          wx.navigateTo({
            url: '../warn/warn',
          })
        break;
        case 4:
        wx.navigateTo({
          url: '../my/my',
        })

    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.flag = options.flag
    this.show()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     this.moveToCenter()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.mapContext = wx.createMapContext("map", this)
  },
  moveToCenter : function () {
    this.mapContext.moveToLocation()
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