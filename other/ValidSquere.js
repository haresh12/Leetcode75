function validSquare(p1, p2, p3, p4) {
    const getDistance = (x, y) => ((x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2);
    const sides = new Set();
    const points = [p1, p2, p3, p4];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (i != j) sides.add(getDistance(points[i], points[j]));
        }
    }
    return !sides.has(0) && sides.size == 2;
}

console.log(validSquare([0,0],[1,1],[1,0],[0,1]))