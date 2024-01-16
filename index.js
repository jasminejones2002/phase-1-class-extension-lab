class Polygon {
    constructor(array) {
        this.array = array
    }
    get countSides() {
        return this.array.length
    }
    get perimeter() {
        let sum = 0
        this.array.forEach(num => {
            sum += num;
        })
        return sum
    }
}

class Triangle extends Polygon {
    get isValid() {
       if (this.countSides === 3) {
        const [side1, side2, side3] = this.array;
        return side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;
       } 
        return false;
    }
}

class Square extends Polygon {
    get isValid() {
        const uniqeSides = new Set(this.array)
        return uniqeSides.size === 1
    }
    get area() {
        return this.array[0] ** 2
    }
}