function isPathCrossing(path: string): boolean {
  const obj = new Set();
  obj.add("0,0");
  let currX = 0;
  let currY = 0;

  for (const p of path) {
    if (p === "N") currY++;
    else if (p === "S") currY--;
    else if (p === "E") currX++;
    else currX--;

    const newPoint = `${currX},${currY}`;
    if (obj.has(newPoint)) return true;
    obj.add(newPoint);
  }
  return false;
}
