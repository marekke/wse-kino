export function convertDateToInternalFormat(date) {
  return date.toISOString().replace('T'," ").substring(0, 19);
}