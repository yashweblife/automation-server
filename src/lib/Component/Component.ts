export class Component<T extends HTMLElement>{
    public dom:T;
    constructor(type: keyof HTMLElementTagNameMap){
        this.dom = <T>document.createElement(type);
    }
    public addEvent<K extends keyof GlobalEventHandlersEventMap>(
        type:K,
        listener:(this:T, ev:GlobalEventHandlersEventMap[K])=> void,
        options?:boolean | AddEventListenerOptions
    ){
        this.dom.addEventListener(type, listener as EventListenerOrEventListenerObject, options);
    }
    public addClass(data:string){
        this.dom.classList.add(data);
    }
    public addText(data:string){
        this.dom.innerText = data;
    }
    public addChild(data:Component<any>){
        this.dom.append(data.dom);
    }
    public addChildren(data:Component<any>[]){
        data.forEach((val:Component<any>)=>{
            this.dom.append(val.dom); 
        })
    }

}
