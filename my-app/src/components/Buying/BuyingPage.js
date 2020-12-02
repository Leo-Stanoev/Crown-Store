import React, { Component } from 'react';
import './BuyingPage.css';

class BuyingPage extends Component{
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

handleCreateBuy = () =>{
    this.props.onRouteChange('createbuy')
}

CreateList = () => {
    console.log(this.props.transactions)
    if(this.props.transactions != "Empty"){
    this.state.list = this.props.transactions.map(transaction => {
        if(transaction.TransactionType ==='Buy' && transaction.Completed === false ){
            return(
        <div className="flex-container grow pointer ml3 w-75" key={transaction.TransactionID} 
            data-value={transaction.TransactionID} onClick={this.handleClick}>
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
            {this.CreateList()}
            <div className="ml3 pointer grow tc fw6 f2 white strong" onClick={this.handleCreateBuy}>Create a Buy Order</div>
            <div className="header-flex-container">
            <img className ="itemLogo ml4" alt='' />
            <p className="listp name">Name</p>
            <p className="listp slot">Slot</p>
            <p className="listp level">Level</p>
            <p className="listp slot">Price</p>
            <p className="listp type">Buyer</p>
            </div>
            <div>{this.state.list}</div>
        </div>
    )

}
}
export default BuyingPage;