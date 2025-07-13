import p5Types from "p5";

let canvasParent: Element;
let parentStyle: CSSStyleDeclaration;
let canvasWidth: number, canvasHeight: number;
let x: number, y: number, size: number, xSpeed: number, ySpeed: number;

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

  x = 1 / 2;
  y = 1 / 6;
  size = 1 / 40;
  xSpeed = 1 / 1000;
  ySpeed = 1 / 1000;

  p5.noStroke();
  p5.fill(255, 160, 40);
};

const draw = (p5: p5Types) => {
  p5.background(102, 102, 102);

  x = p5.lerp(x, p5.mouseX, 1);
  y = p5.lerp(y, p5.mouseY, 1);

  p5.ellipse(x, y, 66, 66);
  // y += ySpeed;
  // x += xSpeed;

  // if (thisX > canvasWidth - thisSize / 2) xSpeed = -1 / 1000;
  // if (thisX < thisSize / 2) xSpeed = 1 / 1000;
  // if (thisY > canvasHeight - thisSize / 2) ySpeed = -1 / 1000;
  // if (thisY < thisSize / 2) ySpeed = 1 / 1000;
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

export { setup, draw, windowResized };
