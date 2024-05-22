export function calculateAngleFromOrigin(x: number, y: number) {
  // Use Math.atan2 to get the angle in radians
  const angleInRadians = Math.atan2(y, x);
  // Convert radians to degrees
  const angleInDegrees = angleInRadians * (180 / Math.PI);
  // Ensure the angle is positive
  return angleInDegrees < 0 ? angleInDegrees + 360 : angleInDegrees;
}
