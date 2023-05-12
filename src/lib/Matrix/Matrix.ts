export class Matrix{
    public components:Float32Array
    constructor(public size:number){
        this.components = new Float32Array(size);
    }
}

export class MatrixMath{
    constructor(){}
    public add(a:Matrix, b:Matrix){
        const output = new Float32Array(a.size)
        for(let i=0;i<a.size;i++){
            output[i] = a.components[i]+b.components[i];
        }
        return(output)
    }
    public subtract(a:Matrix, b:Matrix){
        const output = new Float32Array(a.size)
        for(let i=0;i<a.size;i++){
            output[i] = a.components[i]-b.components[i];
        }
        return(output)
    }
    public magnitude(a:Matrix){
        let output = 0;
        for(let i=0;i<a.size;i++){
            output += a.components[i]**2
        }
        return(Math.sqrt(output))
    }
    public distance(a:Matrix, b:Matrix){
        let output = 0;
        for(let i=0;i<a.size;i++){
            output += (a.components[i]-b.components[i])**2
        }
        return(Math.sqrt(output))
    }
    public normalize(a:Matrix, b:number=1){
        let mag = 0;
        for(let i=0;i<a.size;i++){
            mag += a.components[i]**2
        }
        mag = b/Math.sqrt(mag)
        for(let i=0;i<a.size;i++){
            a.components[i] *= mag;
        }
    }
}