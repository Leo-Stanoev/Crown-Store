import React from 'react';
import './SellingPage.css';

class SellingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            TargetItem: '',
            counter: 0,
            list: []
        }
        }

    handleClick = (event) => {
        fetch('http://localhost:3000/TransactionPage/'+event.currentTarget.getAttribute("data-value"))
        .then(response => response.json())
        .then(transaction => this.props.loadTransaction(transaction))
        this.props.onRouteChange('itempage')
    }

    handleCreateSale = () =>{
        this.props.onRouteChange('createsale')
    }

    CreateList = () => {
        if(this.props.transactions != "Empty"){
        this.state.list = this.props.transactions.map(transaction => {
            if(transaction.TransactionType ==='Sell' && transaction.Completed === false ){ //
                return(
            <div className="flex-container grow pointer ml3" key={transaction.TransactionID} data-value={transaction.TransactionID} onClick={this.handleClick} >
                <img className ="itemLogo ml4" alt='' src={transaction.ItemImageURL}/>
                <p className="listp name">{transaction.ItemName}</p>
                <p className="listp slot">{transaction.ItemSlot}</p>
                <p className="listp level">{transaction.ItemLevel}</p>
                <p className="listp slot">{transaction.ItemGoldCost}</p>
                <p className="listp type">{transaction.UserName}</p>
            </div>
            )
            }
            else{
                return null;
            }
        })
    }
}

render(){
    return(
        <div>
            {console.log("re-rendered start")}
            {this.CreateList()}
            <div className="ml3 pointer grow tc fw6 f2 white strong" onClick={this.handleCreateSale}>Create a Sell Order</div>
            <div className="header-flex-container ml3">
            <img className ="itemLogo ml4" alt='' />
            <p className="listp name">Name</p>
            <p className="listp slot">Slot</p>
            <p className="listp level">Level</p>
            <p className="listp slot">Price</p>
            <p className="listp type">Seller</p>
            </div>
            <div>{this.state.list}</div>
        </div>
    )

}
}
export default SellingPage;