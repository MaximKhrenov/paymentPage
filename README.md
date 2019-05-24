<!doctype HTML><a href="https://aframe.io/blog/arjs/">Check out Mozilla's blog on this</a>

<br>
<br>

<!-- include A-Frame obviously, in the head-->

<!-- include ar.js for A-Frame -->
<script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>
<body style='margin : 0px; overflow: hidden;'>
  <a-scene embedded arjs>
    <!-- create your content here. just a box for now -->
    <a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
    <!-- define a camera which will move according to the marker position -->
    <a-marker-camera preset='hiro'></a-marker-camera>
  </a-scene>
</body>


<head>
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
</head>
<script src="https://aframe.io/releases/0.9.0/aframe.min.js"></script>
<script src="https://rawgit.com/jeromeetienne/AR.js/master/aframe/build/aframe-ar.min.js"></script>
<script src="https://rawgit.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js"></script>

<body style='margin : 0px; overflow: hidden;'>
<!-- we add detectionMode and matrixCodeType to tell AR.js to recognize barcode markers -->
<a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;'>

    <a-assets>
        <a-asset-item id="animated-asset" src="https://raw.githubusercontent.com/nicolocarpignoli/nicolocarpignoli.github.io/master/ar-playground/models/CesiumMan.gltf"></a-asset-item>
    </a-assets>

    <a-marker type='barcode' value='7'>
        <a-box position='0 0.5 0' color="yellow"></a-box>
    </a-marker>

    <a-marker id="animated-marker" type='barcode' value='6'>
        <a-entity
                gltf-model="#animated-asset"
                scale="2">
        </a-entity>
    </a-marker>

    <!-- use this <a-entity camera> to support multiple-markers, otherwise use <a-marker-camera> instead of </a-marker> -->
    <a-entity camera></a-entity>
</a-scene>
</body>
</html>
