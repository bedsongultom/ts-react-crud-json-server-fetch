import React, {Component, ChangeEvent} from "react";
import { v4 as uuidv4 } from "uuid";
import ItemForm from "../components/items/ItemForm";
import ItemList from "../components/items/ItemList";
import Api from "../services/Api";
const api = new Api();

class ItemPage extends Component<{}>{
        state = {
            id:uuidv4(),
            item_name:'',
            price:'',

            items:[{
                id:'',
                item_name:'',
                price:''
            }],  
        }
    componentDidMount =()=>{
        this.readItems();
        
    }    
    
    readItems = async()=>{
        await api.get()
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({ items: data });
            return this;
        })
        .catch((error)=>{
            console.error({ message: error.message });
        }) 
    }

    readItemsById = async(id:string)=>{
        await api.getBy(id)
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({ 
                id: id, 
                item_name: data.item_name, 
                price: data.price }); 
            return this; 
        })
        .catch((error)=>{
            console.error({ message: error.message });
        }) 
    }
   
    removeItemsBy = async( event: React.MouseEvent<HTMLButtonElement>, id:string )=>{
        event.preventDefault();
        await api.delete(id)
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({ items: data });
            alert("ID: " +id+ " deleted successFully !");
        })
        .catch((error)=>{
            console.log({ message : error.message });
        })
        this.readItems();
        window.location.replace("");
      
    }
    
    onChangeId = (event: ChangeEvent<HTMLInputElement>)=>{   
        this.setState({ id: event.target.value });
    }
    onChangeItemName = (event: ChangeEvent<HTMLInputElement>)=>{
        this.setState({ item_name : event.target.value });
    }
    onChangePrice = (event: ChangeEvent<HTMLInputElement>)=>{
        this.setState({ price: event.target.value });
    }

    handleOnClickUpdate = async (event: React.MouseEvent<HTMLButtonElement>, id:string)=>{
        event.preventDefault();
        const newItem = {
            id: this.state.id,
            item_name: this.state.item_name,
            price: this.state.price
        };
        
        await api.update(id, newItem)
        .then((res)=>res.json())
        .then((data)=>{
            let id = data.items.id;
            let item_name = data.items.items.name;
            let price     = data.items.price;
            this.setState({ id: id, item_name: item_name, price: price });
           

        })
        .catch((error)=>{
            console.log({ message : error.message });
        })

        this.readItems();
        alert("ID: "+newItem.id + " updated successully");
        this.setState({ id:uuidv4(), item_name:"", price:""});

     
    }

    handleOnClickSubmit= async (event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        const newItem = {
            id: this.state.id,
            item_name: this.state.item_name,
            price: this.state.price
        };

        await api.create(newItem)
        .then((res)=>res.json())
        .then((data)=>{
            let id = data.items.id;
            let item_name = data.items.items.name;
            let price     = data.items.price;

            this.setState({ id: id, item_name: item_name, price: price });
            alert("ID: "+id+" saved successully");

        })
        .catch((error)=>{
            console.log({ message : error.message });
        })

        this.readItems();
        this.setState({ id:uuidv4(), item_name:"", price:""});
    }

    render() {
       const { items } = this.state;
        return(
            <React.Fragment>
                <div className="container py-4">
                  <div className="shadow-lg card ps-2 pe-2">   
                    <ItemForm  id={this.state.id} 
                        item_name={this.state.item_name} 
                        price={this.state.price} 
                        onChangeId={this.onChangeId}
                        onChangeItemName = {this.onChangeItemName}
                        onChangePrice = {this.onChangePrice}
                        handleOnClickSubmit={(e: React.MouseEvent<HTMLButtonElement>)=>this.handleOnClickSubmit(e)}
                        handleOnClickUpdate={(e: React.MouseEvent<HTMLButtonElement>)=>this.handleOnClickUpdate(e, this.state.id)}/>
                    <hr/>
                    <div className="container">
                        <div className=" card mb-4">
                        <table className="table table-responsive table-hover">
                            <thead className="ps-2 pe-2">
                                <tr>
                                    <th>ID</th>
                                    <th>ItemName</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.length < 1 ? <tr className="text-center"><td colSpan={5}> Data Not Found !</td></tr>:
                                items.map((item, key) =>{
                                    return(
                                    <ItemList key={key}
                                        id={item.id}
                                        item_name={item.item_name}
                                        price={item.price}
                                        handleEditBy={()=>this.readItemsById(item.id)}
                                        handleDeleteBy={ (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>this.removeItemsBy(e, item.id)} />
                                )})}
                                
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
                
            </React.Fragment>
        )
    }
}
export default ItemPage;

