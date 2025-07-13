import { useEffect, useState, useRef } from "react";
import { draw, drawCircle, setup, windowResized } from "./lib";
import p5 from "p5";

export default function Canvas() {
  const dataRef = useRef([
    {
      x: 1 / 2,
      y: 1 / 6,
      size: 1 / 40,
      xSpeed: 1 / 1000,
      ySpeed: 1 / 1000,
    },
    {
      x: 1 / 3,
      y: 1 / 4,
      size: 1 / 40,
      xSpeed: 1 / 500,
      ySpeed: 1 / 500,
    },
    {
      x: 2 / 3,
      y: 1 / 2,
      size: 1 / 30,
      xSpeed: 1 / 800,
      ySpeed: 1 / 800,
    },
    {
      x: 1 / 4,
      y: 3 / 4,
      size: 1 / 50,
      xSpeed: 1 / 600,
      ySpeed: 1 / 600,
    },
    {
      x: 3 / 4,
      y: 1 / 3,
      size: 1 / 35,
      xSpeed: 1 / 700,
      ySpeed: 1 / 700,
    },
    {
      x: 1 / 6,
      y: 1 / 2,
      size: 1 / 45,
      xSpeed: 1 / 900,
      ySpeed: 1 / 900,
    },
    {
      x: 5 / 6,
      y: 2 / 3,
      size: 1 / 55,
      xSpeed: 1 / 400,
      ySpeed: 1 / 400,
    },
    {
      x: 1 / 2,
      y: 5 / 6,
      size: 1 / 25,
      xSpeed: 1 / 300,
      ySpeed: 1 / 300,
    },
  ]);

  const canvasRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5 | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && canvasRef.current && !p5InstanceRef.current) {
      p5InstanceRef.current = new p5((p: p5) => {
        p.setup = () => setup(p, canvasRef.current!);
        p.draw = () => {
          draw(p);
          drawCircle(p, dataRef.current);
        };
        p.windowResized = () => windowResized(p);
      }, canvasRef.current);
    }

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, [mounted]);

  return (
    <div ref={canvasRef} style={{ width: "100vw", height: "100vh" }}>
      {!mounted && <div>Loading...</div>}
    </div>
  );
}
