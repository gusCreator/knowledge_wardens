import React, { useEffect } from 'react';

declare function createUnityInstance(
  canvas: HTMLCanvasElement,
  config: {
    dataUrl: string;
    frameworkUrl: string;
    codeUrl: string;
    streamingAssetsUrl?: string;
    companyName?: string;
    productName?: string;
    productVersion?: string;
  }
): Promise<any>;


const UnityGame: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = process.env.PUBLIC_URL + '/unity-game/Build.loader.js';
    script.onload = () => {
      const canvas = document.querySelector("#unity-canvas") as HTMLCanvasElement;
      if (canvas) {
        createUnityInstance(canvas, {
          dataUrl: process.env.PUBLIC_URL + '/unity-game/Build.data.br',
          frameworkUrl: process.env.PUBLIC_URL + '/unity-game/Build.framework.js.br',
          codeUrl: process.env.PUBLIC_URL + '/unity-game/Build.wasm.br',
          streamingAssetsUrl: process.env.PUBLIC_URL + '/unity-game/StreamingAssets',
          companyName: "CORS",
          productName: "Knowledge-wardens",
          productVersion: "1.0",
        }).then((unityInstance) => {
          console.log('Eureka! cargado correctamente xd');
        }).catch((message) => {
          console.error(message);
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <canvas id="unity-canvas" width="960" height="600"></canvas>
      <div id="unity-loading-bar">
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full"></div>
        </div>
      </div>
    </div>
  );
};

export default UnityGame;
