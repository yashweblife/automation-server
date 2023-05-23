export class Vector{
    public components:Float32Array;
    public length:number=3;
    constructor(size:number){
        this.components = new Float32Array(size);
        this.length = size;
    }
    public add(v:Vector){
        for(let i=0;i<this.length;i++){
            this.components[i]+=v.components[i]
        }
        return(this)
    }
    public subtract(v:Vector){
        for(let i=0;i<this.length;i++){
            this.components[i]-=v.components[i]
        }
        return(this)
    }
    public magnitude(){
        let output = 0;
        for(let i=0;i<this.length;i++){
            output += this.components[i]*this.components[i]
        }
        return(Math.sqrt(output))
    }
    public normalize(magnitude:number){
        let mag = 0;
        for(let i=0;i<this.length;i++){
            mag += this.components[i]*this.components[i]
            this.components[i]*=magnitude;
        }
        mag = Math.sqrt(mag)
        for(let i=0;i<this.length;i++){
            this.components[i]/=mag;
        }
        return(this)
    }
}