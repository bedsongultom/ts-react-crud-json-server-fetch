/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from "react";
import IItems from "../../interfaces/IItems";

type Props = {
    handleDeleteBy:(event: any , id:string)=> void;
    handleEditBy:(id:string)=>void;
}

class ItemList extends Component<Props & IItems ,{}>{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: Props & IItems){
        super(props);
    }
    
    render(): React.ReactNode {
        return(
            <React.Fragment>
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.item_name}</td>
                    <td>{this.props.price}</td>
                    <td  className="text-center align-middle">
                        <div className="d-grid gap-2 d-md-flex">
                            <button className="btn btn-warning" 
                                    onClick={()=>this.props.handleEditBy(this.props.id)} >
                                    Edit
                            </button>       
                            <button className="btn btn-danger"
                                onClick={(event)=>this.props.handleDeleteBy(event, this.props.id)} >
                                    Delete
                            </button>                                
                        </div>
                    </td>
                </tr>               
            </React.Fragment>
        )
    }
}
export default ItemList;