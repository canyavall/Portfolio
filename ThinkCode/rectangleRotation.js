//A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane.
//Its center (the intersection point of its diagonals)
// coincides with the point (0, 0), but the sides of the rectangle are not parallel to
// the axes; instead, they are forming 45 degree angles with the axes.
function rectangleRotation(a, b) {
  //Calculate hipotenusa of square with 1 on side and calculate points
  const hip = 1.41421356,
  lon = Math.floor((a/hip)+1),
  alt = Math.floor((b/hip)+1),
  res = lon*alt + (lon-1) * (alt-1);
  return res - ((lon + alt) % 2);
}

console.log(rectangleRotation(6,4));//23
console.log(rectangleRotation(30,2));//65
console.log(rectangleRotation(3258, 2980));//9709253
console.log(rectangleRotation(1982, 3066));//6075503
console.log(rectangleRotation(3172, 420));//1329803
console.log(rectangleRotation(6926, 6864));//47540033
console.log(rectangleRotation(5878, 3098));//18209627
console.log(rectangleRotation(8,6));//49
console.log(rectangleRotation(16,20));//333
console.log(rectangleRotation(5618, 5888));//33079007
console.log(rectangleRotation(7960, 172));//1367725
console.log(rectangleRotation(5316, 3028));//16097655
