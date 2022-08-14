// @ts-check

export const gigasecond = (date) => {
  const gigaSecond = Math.pow(10, 12);

  return new Date(date.getTime() + gigaSecond);
};