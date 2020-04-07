export const numberWithCommas = (x) => {
  let xToString = x.toString();
  let xWithoutDot = xToString.split('.').join("");
  return xWithoutDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
