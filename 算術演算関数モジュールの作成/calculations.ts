export function add(x: number, y: number): number {
  return x + y;
}

export function subtract(x: number, y: number): number {
  return x - y;
}

export function multiply(x: number, y: number) {
  return x * y;
}

export function divide(x: number, y: number) {
  if (y != 0) {
    return x / y;
  } else {
    console.log("第二引数が「0」のため:error");
  }
}
