// pages/comp/comp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 1,
    arr: [{
        name: "小明",
        age: "20",
        children: [{
            name: "小兰",
            age: "20",
          },
          {
            name: "小刚",
            age: "20",
          },
        ],
      },
      {
        name: "小红",
        age: "20",
        children: [{
            name: "小强",
            age: "20",
          },
          {
            name: "小白",
            age: "20",
          },
        ],
      }
    ]
  },


  onLoad(options) {
    return console.log(options);
  },
  onReady() {
    return console.log("ready");
  },
  onShow() {
    return console.log("show");
  },
  onHide() {
    return console.log("hide");
  },

  changeCount() {
    this.setData({
      count: ++this.data.count,
    })
  },
})