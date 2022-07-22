import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export const CanvasDraw: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    0;
    const c = canvasRef.current;
    if (!c) {
      return;
    }

    const ctx = c.getContext("2d");
    if (!ctx) {
      return;
    }

    const x = 0,
      y = 0,
      w = 100,
      h = 14,
      r = 7;

    const roundRect = (x, y, w, h, r) => {
      var min_size = Math.min(w, h);
      if (r > min_size / 2) r = min_size / 2;
      // 开始绘制
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
      return ctx;
    };

    ctx.fillStyle = "#e3e4e6";
    roundRect(x, y, w, h, r);
    ctx.fill();

    ctx.fillStyle = "#5859FA";
    roundRect(x, y, w * 0.5, h, r);
    ctx.fill();
  }, []);

  return (
    <Style>
      <canvas ref={canvasRef} width={500} height={500}></canvas>
    </Style>
  );
};

const Style = styled.div`
  .c {
    width: 500px;
    height: 500px;
  }
`;
