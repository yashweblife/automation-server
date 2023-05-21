export function lerp(a:number, b:number, t:number){
    return(a + (b-a) * t);
}
export function getFetch(url:string, data:string){
    return(fetch(url,{
        method:"get",
        headers:{
            "Content-Type":"application/json"
        },
        body:data
    }))
}
export function postFetch(url:string, data:string){
    return(fetch(url,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:data
    }))
}
export function deleteFetch(url:string, data:string){
    return(fetch(url,{
        method:"delete",
        headers:{
            "Content-Type":"application/json"
        },
        body:data
    }))
}
export function checkUserAvailable(){
    const test = localStorage.getItem("user")
    if(test == "undefined"){
        return false
    }
    return true;
}
export function subscribeToRTDB(id:string){
    setInterval(
        ()=>{
            getFetch("/rtdb",JSON.stringify({id:id}))
        },
        1000
    )
}