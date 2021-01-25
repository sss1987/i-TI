//index.js
//获取应用实例
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    section: [
      { name: '热门', id: '1001' },
      { name: '分区', id: '1004' },
      { name: '教学', id: '1005' }
    ],
      
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    userInfo: {},
    currentId: 1001,
    hotList: [
      {
        coverImg: '../../resources/index/test.png',
        title: '健身视频',
        playNum: '4231',
        commentNum: '12',
        avid: 'av1',
        link: '/pages/play/play'
      },
      {
        coverImg: '../../resources/index/test.png',
        title: '健身视频',
        playNum: '403',
        commentNum: '14',
        avid: 'av2',
        link: '/pages/play/play'
      },
      {
        coverImg: '../../resources/index/test.png',
        title: '健身视频',
        playNum: '4698',
        commentNum: '12',
        avid: 'av3',
        link: '/pages/play/play'
      },
      {
        coverImg: '../../resources/index/test.png',
        title: '健身视频',
        playNum: '74',
        commentNum: '3',
        avid: 'av4',
        link: '/pages/play/play',
        
      },
      {
        coverImg: '../../resources/index/test.png',
        title: '健身视频',
        playNum: '4698',
        commentNum: '12',
        avid: 'av3',
        link: '/pages/play/play'
      },
      {
        coverImg: '../../resources/index/test.png',
        title: '健身视频',
        playNum: '4698',
        commentNum: '12',
        avid: 'av5',
        link: '/pages/play/play'
      },
      {
        coverImg: '../../resources/index/test.png',
        title: '健身视频',
        playNum: '4698',
        commentNum: '12',
        avid: 'av6'
      },
      {
        coverImg: '../../resources/index/test.png',
        title: '健身视频',
        playNum: '4698',
        commentNum: '12',
        avid: 'av7'
      },
      {
        coverImg: '../../resources/index/test.png',
        title: '健身视频',
        playNum: '4698',
        commentNum: '12',
        avid: 'av8'
      }
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setTopDistance();
    this.setData({
      stagePoint: util.stagePoint()
    })
   /*  if (this.data.currentId == 1001) {
      this.Page();
    }
    else if (this.data.currentId == 1004) {
      this.channelPage();
    }
    else if (this.data.currentId == 1003) {
      this.livePage();
    } */
    if (this.data.currentId == 1004) {
      this.channelPage();
    }
    else if (this.data.currentId == 1003) {
      this.livePage();
    }
  },
  setTopDistance: function () {
    var stagewidth = util.stagePoint().stageWidth;
    var distance = (stagewidth / this.data.section.length - 42)/2;
    this.setData({
      topdistance: distance       //每个标签的间距
    })
  },
  //上方选项点击
  handleTap: function (e) {
    let id = e.currentTarget.id;
    if (id) {
      this.setData({ currentId: id })
      this.onLoad();
    }

  },
  channelPage: function () {
    var stagewidth = util.stagePoint().stageWidth;
    var distance = (stagewidth / 4);
    var titlename = [{ name: "跑步", icon: "../../resources/classify/paobu.png" },  
      { name: "游泳", icon: "../../resources/classify/youyong.png" },   
      { name: "健身", icon: "../../resources/classify/jianshen.png" },   
    { name: "太极", icon: "../../resources/classify/taiji.png" },    
    { name: "舞蹈", icon: "../../resources/classify/wudao.png" }, 
    { name: "羽毛球", icon: "../../resources/classify/yumao.png" },  
    { name: "乒乓球", icon: "../../resources/classify/pingpang.png" },   
    { name: "轮滑", icon: "../../resources/classify/lunhua.png" },    
    
    ]
    this.setData({
      channeldistance: distance,       //每个标签的间距
      channelname: titlename
    })

  },
  livePage: function () {
    var stagewidth = util.stagePoint().stageWidth;
    var distance = (stagewidth / 5);
    var titlename = [{ name: "关注", icon: "../../resources/images/关注.png" },
      { name: "中心", icon: "../../resources/images/中心.png" },
      { name: "小视频", icon: "../../resources/images/小视频.png" },
      { name: "搜索", icon: "../../resources/images/搜索.png" },
      { name: "分类", icon: "../../resources/images/分类.png" }
    ]
    this.setData({
      live1distance: distance,       //每个标签的间距
      live1name: titlename
    })

  },
})
