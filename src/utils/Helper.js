export function convertDateToInternalFormat(date) {
  return date.toISOString().replace('T'," ").substring(0, 19);
}

export function checkIfIsInteger(input) {
  return isNaN(input) || input.toString().includes('.');
}