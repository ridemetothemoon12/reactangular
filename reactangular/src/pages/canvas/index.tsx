import { useEffect, useState, useRef } from "react";
import { draw, setup, windowResized } from "./lib";
import p5 from "p5";

export default function Canvas() {
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
        p.draw = () => draw(p);
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
