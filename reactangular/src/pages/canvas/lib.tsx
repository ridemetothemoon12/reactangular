import p5Types from "p5";

let canvasParent: Element;
let parentStyle: CSSStyleDeclaration;
let canvasWidth: number, canvasHeight: number;

interface CircleData {
  x: number;
  y: number;
  size: number;
  xSpeed: number;
  ySpeed: number;
  currentX?: number;
  currentY?: number;
}

const setup = (p5: p5Types, canvasParentRef: Element) => {
  canvasParent = canvasParentRef;
  if (canvasParentRef.parentElement) {
    parentStyle = getComputedStyle(canvasParentRef.parentElement);
  } else {
    parentStyle = getComputedStyle(canvasParentRef);
  }
  canvasWidth = parseInt(parentStyle.width);
  canvasHeight = parseInt(parentStyle.height);

  p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);

  p5.noStroke();
  p5.fill(255, 160, 40);
};

const draw = (p5: p5Types) => {
  p5.background(102, 102, 102);
};

const drawCircle = (p5: p5Types, data: CircleData[]) => {
  data.forEach((item: CircleData, index: number) => {
    const colors = [
      [255, 100, 100],
      [100, 100, 255],
      [255, 255, 100],
      [255, 100, 255],
      [100, 255, 100],
      [100, 255, 255],
      [255, 150, 50],
      [150, 100, 255],
    ];

    const color = colors[index % colors.length];
    p5.fill(color[0], color[1], color[2]);

    if (item.currentX === undefined) {
      item.currentX = canvasWidth * item.x;
      item.currentY = canvasHeight * item.y;
    }

    item.currentX = p5.lerp(item.currentX, p5.mouseX, 0.05 * (index + 1));
    item.currentY = p5.lerp(item.currentY, p5.mouseY, 0.05 * (index + 1));

    const circleSize = Math.max(20, canvasWidth * item.size);
    p5.ellipse(item.currentX, item.currentY, circleSize, circleSize);
  });
};

const windowResized = (p5: p5Types) => {
  let parentStyle: CSSStyleDeclaration;
  if (canvasParent.parentElement) {
    parentStyle = getComputedStyle(canvasParent.parentElement);
  } else {
    parentStyle = getComputedStyle(canvasParent);
  }
  canvasWidth = parseInt(parentStyle.width);
  canvasHeight = parseInt(parentStyle.height);
  p5.resizeCanvas(canvasWidth, canvasHeight);
};

export { setup, draw, drawCircle, windowResized };
