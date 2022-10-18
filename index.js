// Your code here
class Polygon{
    constructor(array){
        this.sides = array
    }
    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce(accumulator, 0)

        function accumulator(previous, current){
            return previous + current
        }
    }
}

class Triangle extends Polygon{
    get isValid(){
        if ((this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[0] + this.sides[2] > this.sides[1]) && (this.sides[1] + this.sides[2] > this.sides[0])){
            return true
        }
        return false
    }
}

class Square extends Polygon{
    get isValid(){
        return this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] == this.sides[3]
    }

    get area(){
        return this.sides[0] * this.sides[1]
    }
}