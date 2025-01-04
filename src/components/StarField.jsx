'use client';

import React, { useEffect, useRef } from 'react';

export default function StarField({
  speedFactor = 0.15,
  backgroundColor = 'black',
  starColor = [255, 255, 255],
  starCount = 2000,
  zIndex = 10,
}) {
  const canvasRef = useRef(null);  // Use a ref to target the canvas

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const c = canvas.getContext('2d');

      if (c) {
        let w = canvas.parentElement.offsetWidth;  // Use the parent's width and height
        let h = canvas.parentElement.offsetHeight;

        const setCanvasExtents = () => {
          canvas.width = w;
          canvas.height = h;
        };

        setCanvasExtents();

        window.onresize = () => {
          w = canvas.parentElement.offsetWidth;
          h = canvas.parentElement.offsetHeight;
          setCanvasExtents();
        };

        const makeStars = (count) => {
          const out = [];
          for (let i = 0; i < count; i++) {
            const s = {
              x: Math.random() * 1600 - 800,
              y: Math.random() * 900 - 450,
              z: Math.random() * 1000,
            };
            out.push(s);
          }
          return out;
        };

        let stars = makeStars(starCount);

        const clear = () => {
          c.fillStyle = backgroundColor;
          c.fillRect(0, 0, canvas.width, canvas.height);
        };

        const putPixel = (x, y, brightness) => {
          const rgb =
            'rgba(' +
            starColor[0] +
            ',' +
            starColor[1] +
            ',' +
            starColor[2] +
            ',' +
            brightness +
            ')';
          c.fillStyle = rgb;
          c.fillRect(x, y, 1, 1);
        };

        const moveStars = (distance) => {
          const count = stars.length;
          for (let i = 0; i < count; i++) {
            const s = stars[i];
            s.z -= distance;
            while (s.z <= 1) {
              s.z += 1000;
            }
          }
        };

        let prevTime;
        const init = (time) => {
          prevTime = time;
          requestAnimationFrame(tick);
        };

        const tick = (time) => {
          let elapsed = time - prevTime;
          prevTime = time;

          moveStars(elapsed * speedFactor);

          clear();

          const cx = w / 2;
          const cy = h / 2;

          const count = stars.length;
          for (let i = 0; i < count; i++) {
            const star = stars[i];

            const x = cx + star.x / (star.z * 0.001);
            const y = cy + star.y / (star.z * 0.001);

            if (x < 0 || x >= w || y < 0 || y >= h) {
              continue;
            }

            const d = star.z / 1000.0;
            const b = 1 - d * d;

            putPixel(x, y, b);
          }

          requestAnimationFrame(tick);
        };

        requestAnimationFrame(init);

        window.addEventListener('resize', function () {
          w = canvas.parentElement.offsetWidth;
          h = canvas.parentElement.offsetHeight;
          setCanvasExtents();
        });
      } else {
        console.error('Could not get 2d context from canvas element');
      }
    } else {
      console.error('Could not find canvas element');
    }

    return () => {
      window.onresize = null;
    };
  }, [starColor, backgroundColor, speedFactor, starCount]);

  return (
    <canvas
      ref={canvasRef}  // Referencing the canvas
      style={{
        position: 'absolute',  // Make it absolute within its parent div
        top: 0,
        left: 0,
        zIndex: zIndex,
        opacity: 1,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
      }}
    ></canvas>
  );
}