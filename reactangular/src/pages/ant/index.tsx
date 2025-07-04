import { useRef, useEffect, useMemo, useCallback, useState } from "react";

const BOARD_SIZE = 400;
const CANVAS_SIZE = 1200;
const CELL_SIZE = CANVAS_SIZE / BOARD_SIZE;

const DIRECTIONS = {
  NORTH: { row: -1, col: 0 },
  SOUTH: { row: 1, col: 0 },
  EAST: { row: 0, col: 1 },
  WEST: { row: 0, col: -1 },
} as const;

const COLORS = {
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  BORDER: "#333333",
} as const;

const DIRECTION_ORDER = ["NORTH", "EAST", "SOUTH", "WEST"] as const;

const cellColor = new Map<string, string>([["50,50", COLORS.WHITE]]);

const drawCheckerboard = (
  ctx: CanvasRenderingContext2D,
  boardSize: number,
  cellSize: number
) => {
  ctx.fillStyle = COLORS.WHITE;
  ctx.fillRect(0, 0, boardSize * cellSize, boardSize * cellSize);

  ctx.strokeStyle = COLORS.BORDER;
  ctx.lineWidth = 1;

  for (let col = 0; col <= boardSize; col++) {
    const x = col * cellSize;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, boardSize * cellSize);
    ctx.stroke();
  }

  for (let row = 0; row <= boardSize; row++) {
    const y = row * cellSize;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(boardSize * cellSize, y);
    ctx.stroke();
  }
};

const drawCell = (
  ctx: CanvasRenderingContext2D,
  row: number,
  col: number,
  cellSize: number,
  color: string
) => {
  const x = col * cellSize;
  const y = row * cellSize;

  ctx.fillStyle = color;
  ctx.fillRect(x, y, cellSize, cellSize);

  ctx.strokeStyle = COLORS.BORDER;
  ctx.lineWidth = 1;
  ctx.strokeRect(x, y, cellSize, cellSize);
};

const rotateRight = (direction: (typeof DIRECTION_ORDER)[number]) => {
  const currentIndex = DIRECTION_ORDER.indexOf(direction);
  return DIRECTION_ORDER[(currentIndex + 1) % DIRECTION_ORDER.length];
};

const rotateLeft = (direction: (typeof DIRECTION_ORDER)[number]) => {
  const currentIndex = DIRECTION_ORDER.indexOf(direction);
  return DIRECTION_ORDER[
    (currentIndex - 1 + DIRECTION_ORDER.length) % DIRECTION_ORDER.length
  ];
};

const moveAnt = (
  ctx: CanvasRenderingContext2D,
  row: number,
  col: number,
  direction: (typeof DIRECTION_ORDER)[number],
  cellSize: number,
  setAntPosition: (position: {
    row: number;
    col: number;
    direction: (typeof DIRECTION_ORDER)[number];
  }) => void
) => {
  // 오른쪽으로 회전 후 이전 칸을 변경
  const currentColor = cellColor.get(`${row},${col}`);
  const nextColor = currentColor === COLORS.WHITE ? COLORS.BLACK : COLORS.WHITE;

  cellColor.set(`${row},${col}`, nextColor);
  drawCell(ctx, row, col, cellSize, nextColor);

  if (nextColor === COLORS.WHITE) {
    const nextDirection = rotateRight(direction);

    setAntPosition({
      row: row + DIRECTIONS[nextDirection].row,
      col: col + DIRECTIONS[nextDirection].col,
      direction: nextDirection,
    });
  } else {
    const nextDirection = rotateLeft(direction);
    setAntPosition({
      row: row + DIRECTIONS[nextDirection].row,
      col: col + DIRECTIONS[nextDirection].col,
      direction: nextDirection,
    });
  }
};

export default function Ant() {
  const [antPosition, setAntPosition] = useState<{
    row: number;
    col: number;
    direction: (typeof DIRECTION_ORDER)[number];
  }>({ row: 200, col: 200, direction: "NORTH" });

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;

    drawCheckerboard(ctx, BOARD_SIZE, CELL_SIZE);
  }, []);

  useEffect(() => {
    initializeCanvas();
  }, [initializeCanvas]);

  const canvasStyle = useMemo(
    () => ({
      border: `2px solid ${COLORS.BORDER}`,
      display: "block" as const,
      margin: "0 auto",
      maxWidth: "100%",
      height: "auto",
    }),
    []
  );

  const moveAntCallback = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    moveAnt(
      ctx,
      antPosition.row,
      antPosition.col,
      antPosition.direction,
      CELL_SIZE,
      setAntPosition
    );
  }, [antPosition, setAntPosition]);

  useEffect(() => {
    const interval = setInterval(moveAntCallback, 1);
    return () => clearInterval(interval);
  }, [moveAntCallback]);

  return (
    <div>
      <canvas ref={canvasRef} style={canvasStyle} />
    </div>
  );
}
