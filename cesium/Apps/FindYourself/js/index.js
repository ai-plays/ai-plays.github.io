
function autoPlayvideo() {
  wx.config({
      // 配置信息, 即使不正确也能使用 wx.ready
      debug: false,
      appId: '',
      timestamp: 1,
      nonceStr: '',
      signature: '',
      jsApiList: []
  });
  wx.ready(function() {
      document.getElementById('my_video').play();
      alert("3");
  });
}


