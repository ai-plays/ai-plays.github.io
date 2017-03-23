<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Use correct character set. -->
  <meta charset="utf-8">
  <!-- Tell IE to use the latest, best version. -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- Make the application on mobile take up the full browser screen and disable user scaling. -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
  <title>Find Yourself</title>
  <script src="../../Build/Cesium/Cesium.js"></script>
  <style>
      @import url(../../Build/Cesium/Widgets/widgets.css);
      html, body, #cesiumContainer {
          width: 100%; height: 100%; margin: 0; padding: 0; overflow: hidden;
      }
  </style>

  <link href="css/index.css" rel="stylesheet" type="text/css" />

  <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
</head>
<body>
  <!--
  <div id="cesiumContainer"></div>
  <script>
    var viewer = new Cesium.Viewer('cesiumContainer');
  </script>
  -->

  
  <video id="my_video" preload autoplay playsinline>
    <source src="res/the_known_universe_by_amnh.mp4#t=60" type="video/mp4">
    Your browser does not support the video tag.
  </video>

  <script>
  // 方法1: 现在微信官方已经推出了微信JS-SDK, 最好还是不要使用"野生"方式, 因为不知道什么时候就可以不能用了!
  // http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
  // 通过config接口注入权限验证配置后, 在 ready 中 play 一下 audio
  function autoPlayAudio1() {
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
  
  autoPlayAudio1();
  </script>

</body>
</html>
