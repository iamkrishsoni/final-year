import React, { useRef, useEffect, useState } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

// ✅ REPLACE THIS with your Vercel-hosted .glb file URL
const MODEL_URL = "https://models-rose.vercel.app/models/home.glb"; // or your Vercel .glb

export default function App() {
  const webviewRef = useRef(null);
  const [webViewLoaded, setWebViewLoaded] = useState(false);

  useEffect(() => {
    if (webViewLoaded && webviewRef.current) {
      webviewRef.current.postMessage(MODEL_URL);
    }
  }, [webViewLoaded]);

  return (
    <View style={{ flex: 1 }}>
      <WebView
        ref={webviewRef}
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onLoadEnd={() => setWebViewLoaded(true)}
        allowFileAccess={true}
        allowUniversalAccessFromFileURLs={true}
        mixedContentMode="always"
      />
    </View>
  );
}

const htmlContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Babylon GLB Viewer</title>
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: black;
      }
      canvas {
        width: 100%;
        height: 100%;
        touch-action: none;
      }
    </style>
  </head>
  <body>
    <canvas id="renderCanvas"></canvas>
    <script src="https://cdn.babylonjs.com/babylon.js"></script>
    <script src="https://cdn.babylonjs.com/loaders/babylon.glTF2FileLoader.min.js"></script>
    <script>
      const canvas = document.getElementById("renderCanvas");
      const engine = new BABYLON.Engine(canvas, true);
      const scene = new BABYLON.Scene(engine);

      const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2.5, 10, BABYLON.Vector3.Zero(), scene);
      camera.attachControl(canvas, true);

      const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);

      document.addEventListener("message", function (event) {
        const modelUrl = event.data;
        console.log("🔗 Loading model:", modelUrl);

        BABYLON.SceneLoader.Append("", modelUrl, scene, () => {
          console.log("✅ Model loaded");
          engine.runRenderLoop(() => scene.render());
        }, null, function (scene, message) {
          console.error("❌ Load error:", message);
          alert("❌ Failed to load: " + message);
        });
      });

      window.addEventListener("resize", function () {
        engine.resize();
      });
    </script>
  </body>
</html>
`;
