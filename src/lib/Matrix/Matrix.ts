export class Matrix{
    public components:Float32Array
    constructor(size:number){
        this.components = new Float32Array(size);
    }
}

export class MatrixMath{
    constructor(){}
    public add(a:Matrix, b:Matrix){}
    public subtract(a:Matrix, b:Matrix){}
    public magnitude(a:Matrix){}
    public normalize(a:Matrix, b:number=1){}
}