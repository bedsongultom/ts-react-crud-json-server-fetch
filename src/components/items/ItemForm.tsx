import React, { Component } from "react";

import IItems from "../../interfaces/IItems";

type Props = {
    onChangeId:(event: any)=> void;
    onChangeItemName: (event: any )=> void;
    onChangePrice: (event: any)=>void;
    handleOnClickUpdate: (event: any)=>void;
    handleOnClickSubmit:(event: any) =>void;
}

class ItemForm extends Component<Props & IItems ,{}>{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: Props & IItems){
        super(props);
    }
    

    render() {
        return (
            <React.Fragment>
                <div className="container center py-3">
                    <label className="center text-warning"><h2>TYPESCRIPT-REACT-CRUD-JSON-SERVER-FETCH</h2></label>
                    <form>
                        <div className="text-left">
                            <div className="form-group">
                                <div className="col-lg-12">
                                    <div className="row ">
                                        <div className="col-lg-12 pt-1">                                        
                                            <div className="form-group">
                                                                                       
                                                <input hidden type="text"  className="form-control"
                                                    value={this.props.id} name="id"
                                                    placeholder="Enter ID"
                                                    onChange={this.props.onChangeId}/>
                                            </div> 
                                        </div>                                       
                                        <div className="col-lg-12 pt-1">                                        
                                            <div className="form-group">
                                                <label htmlFor="item_name">Item Name </label>                                  
                                                <input type="text"  className="form-control"
                                                       value={this.props.item_name} name="item_name"
                                                       placeholder="Enter Item Name"
                                                       onChange={this.props.onChangeItemName}/> 
                                            </div>
                                        </div>
                                        <div className="col-lg-12 pt-1">                                        
                                            <div className="form-group">
                                                <label htmlFor="price">Price </label>                                        
                                                <input type="text"  className="form-control" 
                                                       value={this.props.price} name="price"
                                                       placeholder="Enter Price"
                                                       onChange={this.props.onChangePrice}/>                                       
                                            </div>
                                        </div>   
                                        <div className="col-lg-12">                                        
                                            <div className="form-group d-grid gap-2 d-md-flex">
                                                <button className="btn btn-primary text-white mt-2" onClick={this.props.handleOnClickSubmit}>Submit</button>
                                                <button className="btn btn-warning text-white mt-2" onClick={this.props.handleOnClickUpdate}>Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
export default ItemForm;