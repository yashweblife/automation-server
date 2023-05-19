export class $ {
    public dom: HTMLElement;
    constructor(public a: string = "div") {
        this.dom = document.createElement(a);
    }
    public static makeDOM(a: string = "div") {
        return (new $(a));
    }
    public addClass(a: string) {
        this.dom.classList.add(a);
        return (this)
    }
    public removeClass(a: string) {
        this.dom.classList.remove(a);
        return (this)
    }
    public toggleClass(a: string) {
        this.dom.classList.toggle(a);
        return (this)
    }
    public setText(a: string) {
        this.dom.innerText = a;
        return (this)
    }
    public setHTML(a:string){
        this.dom.innerHTML = a;
        return(this)
    }
    public addChild(a:$){
        this.dom.append(a.dom);
        return(this)
    }
    public addChildren(a:$[]){
        const vals = a.map((val:$)=>val.dom)
        this.dom.append(...vals)
        return(this)
    }
    public addEvent(a:string, b:(e:any)=>void){
        this.dom.addEventListener('a',b);
        return(this)
    }
    public addID(a:string){
        this.dom.id = a;
        return(this)
    }
}