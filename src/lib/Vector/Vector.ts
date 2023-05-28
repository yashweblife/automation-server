export class Vector {
    public components: Float32Array;
    public length: number = 3;
    constructor(size: number) {
        this.components = new Float32Array(size);
        this.length = size;
    }
    public add(v: Vector) {
        for (let i = 0; i < this.length; i++) {
            this.components[i] += v.components[i]
        }
        return (this)
    }
    public subtract(v: Vector) {
        for (let i = 0; i < this.length; i++) {
            this.components[i] -= v.components[i]
        }
        return (this)
    }
    public multiply(v: Vector) {
        for (let i = 0; i < this.length; i++) {
            this.components[i] *= v.components[i]
        }
        return (this)
    }
    public scalar(val: number) {
        for (let i = 0; i < this.length; i++) {
            this.components[i] *= val;
        }
        return (this)
    }
    public magnitude() {
        let output = 0;
        for (let i = 0; i < this.length; i++) {
            output += this.components[i] * this.components[i]
        }
        return (Math.sqrt(output))
    }
    public normalize(magnitude: number) {
        let mag = 0;
        for (let i = 0; i < this.length; i++) {
            mag += this.components[i] * this.components[i]
            this.components[i] *= magnitude;
        }
        mag = Math.sqrt(mag)
        for (let i = 0; i < this.length; i++) {
            this.components[i] /= mag;
        }
        return (this)
    }
    public distance(v: Vector) {
        let output = 0;
        for (let i = 0; i < this.length; i++) {
            output += (this.components[i] - v.components[i]) ** 2
        }
        return (Math.sqrt(output))
    }
    public dot(v: Vector) {
        let output = 0
        for (let i = 0; i < this.length; i++) {
            output += this.components[i] * v.components[i]
        }
        return (output)
    }
    public lerp(v: Vector, t: number) {
        const output: Vector = new Vector(this.length)
        for (let i = 0; i < this.length; i++) {
            output.components[i] = this.components[i] + (v.components[i] - this.components[i]) * t
        }
        return (output);
    }
    public copy() {
        const output = new Vector(this.length);
        for (let i = 0; i < this.length; i++) {
            output.components[i] = this.components[i];
        }
        return (output)
    }
    public static getRandom(size: number, mag: number) {
        const output = new Vector(size);
        for (let i = 0; i < size; i++) {
            output.components[i] = Math.random() * mag
        }
        return (output)
    }
    public static getAdd(a: Vector, b: Vector) {
        const output = new Vector(a.length);
        for (let i = 0; i < output.length; i++) {
            output.components[i] = a.components[i] + b.components[i]
        }
        return (output)
    }
    public static getSub(a: Vector, b: Vector) {
        const output = new Vector(a.length);
        for (let i = 0; i < output.length; i++) {
            output.components[i] = a.components[i] - b.components[i]
        }
        return (output)
    }
    public static getNormalized(a: Vector) {
        const output = new Vector(a.length);
        let mag = 0;
        for (let i = 0; i < output.length; i++) {
            mag += a.components[i] ** 2
        }
        mag = Math.sqrt(mag);
        for (let i = 0; i < output.length; i++) {
            output.components[i] = a.components[i] / mag
        }
        return (output)
    }
    public getAverage(a: Vector[]) {
        const output = new Vector(a[0].length);
        for (let i = 0; i < a.length; i++) {
            const b = a[i]
            output.add(b);
        }
        output.scalar(a.length);
    }
    public getRotateX(a:Vector, b:number){
        const output = new Vector(a.length)
    }
}