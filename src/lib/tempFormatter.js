export default function tempFormatter(temp) {
  const formattedTemp = Math.round(temp - 273.15);
  return formattedTemp;
}
