export const addZero = (n: number) => {
  if (n > 0 && n < 10) return "0" + n;

  return n + "";
};
