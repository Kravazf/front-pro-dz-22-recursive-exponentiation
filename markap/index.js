function calculateExponential(num, degree) {
  if (degree === 0) {
  return 1;
  }

  if (degree < 0) {
    return 1 / calculateExponential(num, -degree);
  }

  return num * calculateExponential(num, degree -1);
}

result = calculateExponential(2, 3);

console.log(result);
