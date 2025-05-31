"use client";
import { useEffect, useRef } from "react";

const STAR_COLOR = "#FFD700"; // Gold
const STAR_COUNT = 100; // Number of stars

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function StarsBG() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Handle resize
 const handleResize = () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  // Recreate stars for new dimensions
  stars = Array.from({ length: STAR_COUNT }).map(() => ({
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    r: randomBetween(0.4, 1),
    dx: randomBetween(-0.05, 0.05),
    dy: randomBetween(-0.05, 0.05),
  }));
};

    window.addEventListener("resize", handleResize);

    // Star data
    let stars = Array.from({ length: STAR_COUNT }).map(() => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      r: randomBetween(0.4, 1),
      dx: randomBetween(-0.05, 0.05),
      dy: randomBetween(-0.05, 0.05),
    }));

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let star of stars) {
        // Move
        star.x += star.dx;
        star.y += star.dy;

        // Bounce off edges
        if (star.x < 0 || star.x > width) star.dx *= -1;
        if (star.y < 0 || star.y > height) star.dy *= -1;

        // Draw
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = STAR_COLOR;
        ctx.globalAlpha = 0.8;
        ctx.shadowColor = STAR_COLOR;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-50 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
// This component creates a starry background using HTML5 Canvas.