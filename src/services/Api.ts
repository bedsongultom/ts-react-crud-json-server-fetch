
//CREATE BY BEDSON GULTOM 8th-FEB-2023
import IItems from "../interfaces/IItems"                               
class Api {
    get = async ()  =>{
        return  await fetch("http://localhost:3001/items", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json",
                "Cache-Control":"no-cache, no-store",
                "Pragma": "no-cache",
            }
        })
    }

    getBy = async(id:string )=>{
        return await fetch("http://localhost:3001/items/"+ id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json",
                //handling error 304 on browser
                "Cache-Control":"no-cache, no-store",
                "Pragma": "no-cache",
            },
        });
    }

    create = async(state: IItems)=>{
        return await fetch("http://localhost:3001/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json",
            },
            body:JSON.stringify({id: state.id, item_name: state.item_name, price: state.price})
        })
    }

    update = async(id: string, state: IItems)=>{
        return await fetch("http://localhost:3001/items/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify({id: state.id, item_name: state.item_name, price: state.price})
        })   
    }

    delete = async(id: string )=>{
        return await fetch("http://localhost:3001/items/"+ id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
        })   
    }

}

export default Api;