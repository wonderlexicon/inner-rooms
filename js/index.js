<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <link rel="stylesheet" href="main.css">
  <title>VR: So simple even the Marketing team can use it.</title>
  <meta name="description" content="Now in 3D!">

  <script src="https://cdnjs.cloudflare.com/ajax/libs/aframe/0.6.0/aframe-master.min.js"></script>
  <script src="https://cdn.rawgit.com/donmccurdy/aframe-extras/v3.8.6/dist/aframe-extras.min.js"></script>

</head>
<body>

  <a-scene fog="type: linear; color: #000; far: 16; near: 7">

    <!-- Splash Screen
    <div class="splash">
      <div class="splash__card">
        <h1>Presentations in VR</h1>
        <p>You can move around with WASD keys (desktop), by tapping the screen (mobile) or with the button on your Google Cardboard.</p>
        <img class="splash__img" src="img/other/whoa.jpg" alt="whoa" />
        <button class="splash__button">Enter</button>
      </div>
    </div> -->

    <!-- Load Assets -->
    <a-assets>
      <!-- global -->
      <img id="floor" src="img/other/floor.jpg">
      <img id="wall" src="img/other/wall-concrete.jpg">
      <img id="wall-secret" src="img/other/wall-concrete-secret.jpg">
      <img id="wall-brick" src="img/other/brick.jpg">
      <img id="room-sign-1" src="img/other/room-sign-1.png">
      <img id="room-sign-2" src="img/other/room-sign-2.png">

      <!-- team -->
      <img id="team-poster" src="img/team/poster.png">
      <img id="team-arcadio" src="img/team/arcadio.png">
      <img id="team-dan" src="img/team/dan.png">
      <img id="team-dustin" src="img/team/dustin.png">
      <img id="team-judy" src="img/team/judy.png">
      <img id="team-maceij" src="img/team/maceij.png">
      <img id="team-porfirio" src="img/team/porfirio.png">

      <!-- Example Room 1-->
      <img id="room1-example" src="img/room1/example.png">

      <!-- Example Room 2-->
      <img id="room2-final1" src="img/room2/final-1.png">
      <img id="room2-final2" src="img/room2/final-2.png">
      <img id="room2-final3" src="img/room2/final-3.png">
      <img id="room2-final4" src="img/room2/final-4.png">
      <img id="room2-mock1" src="img/room2/mock-1.png">
      <img id="room2-mock2" src="img/room2/mock-2.png">
      <img id="room2-mock3" src="img/room2/mock-3.png">
      <img id="room2-mock4" src="img/room2/mock-4.png">
      <img id="room2-wire1" src="img/room2/wire-1.png">
      <img id="room2-wire2" src="img/room2/wire-2.png">
      <img id="room2-wire3" src="img/room2/wire-3.png">
      <img id="room2-wire4" src="img/room2/wire-4.png">
      <img id="room2-final-sign" src="img/room2/final-sign.png">
      <img id="room2-mock-sign" src="img/room2/mock-sign.png">
      <img id="room2-wire-sign" src="img/room2/wire-sign.png">

      <!-- Example Room 3 -->
      <img id="room3-example" src="img/room3/example.png">
      <img id="room3-example-stat" src="img/room3/examplestat.png">
      <img id="room3-example-num" src="img/room3/examplenum.png">
      <img id="room3-page-before" src="img/room3/page-before.png">
      <img id="room3-page-after" src="img/room3/page-after.png">
      <img id="room3-beforeafter" src="img/room3/beforeafter.png">

      <!-- Example Room 4-->
      <img id="room4-map" src="img/room4/map.png" />
      <img id="room4-photo1" src="img/room4/photo1.png">
      <img id="room4-photo2" src="img/room4/photo2.png">
      <img id="room4-photo3" src="img/room4/photo3.png">
      <img id="room4-photo4" src="img/room4/photo4.png">
      <img id="room4-photo5" src="img/room4/photo5.png">
      <img id="room4-photo6" src="img/room4/photo6.png">
      <img id="room4-sign-photos" src="img/room4/sign-photos.png">
      <img id="room4-sign-roadshow" src="img/room4/sign-roadshow.png">

      <!-- Example Room 5 -->
      <img id="room5-sign-back" src="img/room5/sign-back.png">
      <img id="room5-sign-side" src="img/room5/sign-side.png">
      <img id="room5-landing" src="img/room5/landing.png">
      <img id="room5-rust" src="img/room5/rust.png">
      <img id="room5-speech" src="img/room5/speech.png">
      <img id="room5-vr" src="img/room5/vr.png">
      <img id="room5-wa" src="img/room5/wa.png">

      <!-- Example Theater 6-->
      <video id="theaterVideo" autoplay loop="true" webkit-playsinline playsinline src="img/theater/movie.mp4"></video>
      <img id="theater-curtains" src="img/theater/curtains.png">
      <a-asset-item id="couch-obj" src="img/theater/couch/model.obj"></a-asset-item>
      <a-asset-item id="couch-mtl" src="img/theater/couch/materials.mtl"></a-asset-item>

      <!-- Secret Room -->
      <a-asset-item id="fox-obj" src="img/secret/fox/model.obj"></a-asset-item>
      <a-asset-item id="fox-mtl" src="img/secret/fox/materials.mtl"></a-asset-item>
      <!-- Nicoleta stuff -->
      <video id="weirdnessVid" preload="" loop="true" webkit-playsinline playsinline src="vid/weirdness.mp4"></video>
    </a-assets>

    <!-- User / Camera -->
    <a-entity
      id="player"
      camera="user-height: 1.6"
      universal-controls
      kinematic-body
      listener
      position: "0 9 0"
      >
      <a-cursor></a-cursor>
    </a-entity>


    <!-- Start Room (spawn) -->
    <a-entity position="-1.5 1.5 19.5" rotation="0 0 0">
      <!--left wall -->
      <a-entity rotation= "0 90 0">
        <a-video position="1 1.5 -4.4" src="#weirdnessVid" weirdness-video-handler height="9" width="11"></a-video>
      </a-entity>
    </a-entity>

    <!-- hallway -->
    <!-- right wall -->
    <a-image position="-.1 3 3" rotation="0 -90 0" src="#team-dan" height="3" width="3"></a-image>
    <a-image position="-.1 3 12" rotation="0 -90 0" src="#team-arcadio" height="3" width="3"></a-image>
    <a-image position="-.1 3 -9" rotation="0 -90 0" src="#team-judy" height="3" width="3"></a-image>
    <!-- left wall -->
    <a-image position="-2.9 3 12" rotation="0 90 0" src="#team-porfirio" height="3" width="3"></a-image>
    <a-image position="-2.9 3 -9" rotation="0 90 0" src="#team-dustin" height="3" width="3"></a-image>
    <a-image position="-2.9 3 3" rotation="0 90 0" src="#team-maceij" height="3" width="3"></a-image>

    <!-- Exampe Room 1 (Immediate right) -->
    <a-entity position="10.5 1.5 19.5" rotation="0 -90 0">
      <!-- Room Sign -->
      <a-image position="-1.45 1 6.02" rotation="0 90 0" src="#room-sign-1" height="1.5" width="3"></a-image>
      <a-image position="1.45 1 6.02" rotation="0 -90 0" src="#room-sign-2" height="1.5" width="3"></a-image>
      <!-- Back wall -->
      <a-image position="-2 1.5 -4.4" src="#room1-example" height="5" width="2.5"></a-image>
      <a-image position="2 1.5 -4.4" src="#room1-example" height="5" width="2.5"></a-image>
      <!--right wall -->
      <a-entity rotation= "0 -90 0">
        <a-image position="-2 1.5 -4.4" src="#room1-example" height="5" width="2.5"></a-image>
        <a-image position="2 1.5 -4.4" src="#room1-example" height="5" width="2.5"></a-image>
      </a-entity>
      <!--left wall -->
      <a-entity rotation= "0 90 0">
        <a-image position="-2 1.5 -4.4" src="#room1-example" height="5" width="2.5"></a-image>
        <a-image position="2 1.5 -4.4" src="#room1-example" height="5" width="2.5"></a-image>
      </a-entity>
    </a-entity>

    <!-- Example Room 2 (First Left) -->
    <a-entity position="-10.5 1.5 7.5" rotation="0 90 0">
      <!-- Room Sign -->
      <a-image position="-1.45 1 6.02" rotation="0 90 0" src="#room-sign-1" height="1.5" width="3"></a-image>
      <a-image position="1.45 1 6.02" rotation="0 -90 0" src="#room-sign-2" height="1.5" width="3"></a-image>
      <!-- Back wall -->
      <a-image position="-2 0 -4.4" src="#room2-final1" height="2.5" width="2.5"></a-image>
      <a-image position="-2 2.4 -4.4" src="#room2-final2" height="2.5" width="2.5"></a-image>
      <a-image position="2 0 -4.4" src="#room2-final3" height="2.5" width="2.5"></a-image>
      <a-image position="2 2.4 -4.4" src="#room2-final4" height="2.5" width="2.5"></a-image>
      <a-image position="0 5.1 -4.2" rotation="15 0 0" src="#room2-final-sign" height="2.5" width="5"></a-image>
      <!--right wall -->
      <a-entity rotation= "0 -90 0">
        <a-image position="-2 0 -4.4" src="#room2-mock1" height="2.5" width="2.5"></a-image>
        <a-image position="-2 2.4 -4.4" src="#room2-mock2" height="2.5" width="2.5"></a-image>
        <a-image position="2 0 -4.4" src="#room2-mock3" height="2.5" width="2.5"></a-image>
        <a-image position="2 2.4 -4.4" src="#room2-mock4" height="2.5" width="2.5"></a-image>
        <a-image position="0 5.1 -4.2" rotation="15 0 0" src="#room2-mock-sign" height="2.5" width="5"></a-image>
      </a-entity>
      <!--left wall -->
      <a-entity rotation= "0 90 0">
        <a-image position="-2 0 -4.4" src="#room2-wire1" height="2.5" width="2.5"></a-image>
        <a-image position="-2 2.4 -4.4" src="#room2-wire2" height="2.5" width="2.5"></a-image>
        <a-image position="2 0 -4.4" src="#room2-wire3" height="2.5" width="2.5"></a-image>
        <a-image position="2 2.4 -4.4" src="#room2-wire4" height="2.5" width="2.5"></a-image>
        <a-image position="0 5.1 -4.2" rotation="15 0 0" src="#room2-wire-sign" height="2.5" width="5"></a-image>
      </a-entity>
    </a-entity>

    <!-- Room 3 (First Right) -->
    <a-entity position="7.5 1.5 7.5" rotation="0 -90 0">
      <!-- Room Sign -->
      <a-image position="-1.45 1 6.02" rotation="0 90 0" src="#room-sign-1" height="1.5" width="3"></a-image>
      <a-image position="1.45 1 6.02" rotation="0 -90 0" src="#room-sign-2" height="1.5" width="3"></a-image>
      <!-- Back wall -->
      <a-image position="-2.2 1.3 -4.4" src="#room3-page-before" height="4" width="4"></a-image>
      <a-image position="2.2 1.3 -4.4" src="#room3-page-after" height="4" width="4"></a-image>
      <a-image position="0 5.1 -4.2" rotation="15 0 0" src="#room3-beforeafter" height="2.5" width="5"></a-image>
      <!--right wall -->
      <a-entity rotation= "0 -90 0">
        <a-image position="-2 1.3 -4.4" src="#room3-example" height="5" width="2.5"></a-image>
        <a-box position="2.5 0 -3.6" color="#fb8e92" depth="1" height="3.02" width="1"></a-box>
        <a-box position="1 -.7 -3.6" color="#b0b4e5" depth="1" height="1.53" width="1"></a-box>
        <a-image position="1 -.5 -3.05" src="#room3-example-stat" height="1" width="1"></a-image>
        <a-image position="2.5 -.5 -3.05" src="#room3-example-stat" height="1" width="1"></a-image>
      </a-entity>
      <!--left wall -->
      <a-entity rotation= "0 90 0">
        <a-image position="1.5 1.3 -4.4" src="#room3-example" height="5" width="2.5"></a-image>
        <a-box position="-3 -.3 -3.6" color="#b0b4e5" depth="1" height="2.27" width="1"></a-box>
        <a-box position="-2 .85 -3.6" color="#000" depth="1" height=".23" width="1"></a-box>
        <a-box position="-1 -.3 -3.6" color="#fb8e92" depth="1" height="2.5" width="1"></a-box>
        <a-image position="-3 -.3 -3.05" src="#room3-example-stat" height="1" width="1"></a-image>
        <a-image position="-2 .85 -3.05" src="#room3-example-num" height="1" width="1"></a-image>
        <a-image position="-1 -.3 -3.05" src="#room3-example-stat" height="1" width="1"></a-image>
      </a-entity>
    </a-entity>

    <!-- Example Room 4 (Second Left) -->
    <a-entity position="-10.5 1.5 -4.5" rotation="0 90 0">
      <!-- Room Sign -->
      <a-image position="-1.45 1 6.02" rotation="0 90 0" src="#room-sign-1" height="1.5" width="3"></a-image>
      <a-image position="1.45 1 6.02" rotation="0 -90 0" src="#room-sign-2" height="1.5" width="3"></a-image>
      <!-- Back wall -->
      <a-image position="0 1.5 -4.4" src="#room4-map" height="7" width="7"></a-image>
      <a-image position="0 5.1 -4.2" rotation="15 0 0" src="#room4-sign-roadshow" height="2.5" width="5"></a-image>
      <!--right wall -->
      <a-entity rotation= "0 -90 0">
        <a-image position="-2 0 -4.4" src="#room4-photo1" height="2.5" width="2.5"></a-image>
        <a-image position="0 2.4 -4.4" src="#room4-photo2" height="2" width="2"></a-image>
        <a-image position="2 0 -4.4" src="#room4-photo3" height="2.5" width="2.5"></a-image>
        <a-image position="0 5.1 -4.2" rotation="15 0 0" src="#room4-sign-photos" height="2.5" width="5"></a-image>
      </a-entity>
      <!--left wall -->
      <a-entity rotation= "0 90 0">
        <a-image position="-2 0 -4.4" src="#room4-photo4" height="2.5" width="2.5"></a-image>
        <a-image position="0 2.4 -4.4" src="#room4-photo5" height="2" width="2"></a-image>
        <a-image position="2 0 -4.4" src="#room4-photo6" height="2.5" width="2.5"></a-image>
        <a-image position="0 5.1 -4.2" rotation="15 0 0" src="#room4-sign-photos" height="2.5" width="5"></a-image>
      </a-entity>
    </a-entity>

    <!-- Example Room 5 (Second Right) -->
    <a-entity position="7.5 1.5 -4.5" rotation="0 -90 0">
      <!-- Room Sign -->
      <a-image position="-1.45 1 6.02" rotation="0 90 0" src="#room-sign-1" height="1.5" width="3"></a-image>
      <a-image position="1.45 1 6.02" rotation="0 -90 0" src="#room-sign-2" height="1.5" width="3"></a-image>
      <!-- Back wall -->
      <a-image position="0 1.3 -4.4" src="#room5-landing" height="5" width="2.5"></a-image>
      <a-image position="0 5.1 -4.2" rotation="15 0 0" src="#room5-sign-back" height="2.5" width="5"></a-image>
      <!--right wall -->
      <a-entity rotation= "0 -90 0">
        <a-image position="-2 1.3 -4.4" src="#room5-rust" height="5" width="2.5"></a-image>
        <a-image position="2 1.3 -4.4" src="#room5-speech" height="5" width="2.5"></a-image>
        <a-image position="0 5.1 -4.2" rotation="15 0 0" src="#room5-sign-side" height="2.5" width="5"></a-image>
      </a-entity>
      <!--left wall -->
      <a-entity rotation= "0 90 0">
        <a-image position="-2 1.3 -4.4" src="#room5-vr" height="5" width="2.5"></a-image>
        <a-image position="2 1.3 -4.4" src="#room5-wa" height="5" width="2.5"></a-image>
        <a-image position="0 5.1 -4.2" rotation="15 0 0" src="#room5-sign-side" height="2.5" width="5"></a-image>
      </a-entity>
    </a-entity>


    <!-- Example Room 6 (far back room ) -->
    <a-entity position="-1.5 1.5 -22.5">
      <!-- Room Sign -->
      <a-image position="-1.45 1 6.02" rotation="0 90 0" src="#room-sign-1" height="1.5" width="3"></a-image>
      <a-image position="1.45 1 6.02" rotation="0 -90 0" src="#room-sign-2" height="1.5" width="3"></a-image>
      <!-- Back wall -->
      <a-video src="#theaterVideo" width="7" height="5.25" position="0 1.4 -4.4"></a-video>
      <a-image position="0 0 -4.4" src="#theater-curtains" height="12" width="9"></a-image>
      <!-- objects -->
      <a-entity obj-model="obj: #couch-obj; mtl: #couch-mtl" position ="0 -1 1" rotation="0 0 0" scale="2 2 2"></a-entity>
      <!-- ceiling -->
      <a-plane position="0 6 0" rotation="90 0 0" height="9" width="9" color="black"></a-plane>
    </a-entity>

    <!-- Secret Room (Second Right) -->
    <a-entity position="-22.5 1.5 19.5" rotation="0 0 0">
      <a-entity obj-model="obj: #fox-obj; mtl: #fox-mtl" rotation="0 -110 0"></a-entity>
    </a-entity>



    <!-- Ground -->
    <a-grid id="ground" static-body material="src: #floor; repeat: 15 15" rotation="0 -90 0"></a-grid>

    <!-- Walls (used by map.js -->)
    <a-entity id="walls"></a-entity>


    <!-- Sky -->
    <a-sky id="sky" color="#0000ff"></a-sky>

  </a-scene>

  <script src="js/map.js"></script>
  <script src="js/video.js"></script>

</body>
</html>
