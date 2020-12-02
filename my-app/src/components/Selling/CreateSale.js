import React from 'react';
import './SellingPage.css';
//import SellingPage from './SellingPage';

class CreateSale extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          ItemGoldCost: '',
          ItemID: 1,
        }
      }

      onItemChange = (itemSelected) => {
        this.setState({ItemID: itemSelected.target.value})
        console.log(this.state.ItemID)
      }
    
      onCostChange = (event) => {
        this.setState({ItemGoldCost: event.target.value})
        console.log(this.props.data.UserName)
      }
    
      onCreateSaleButton = () => {
        fetch('http://localhost:3000/New', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          UserID: this.props.data.UserID,
          TransactionType: 'Sell',
          ItemGoldCost: this.state.ItemGoldCost,
          ItemID: this.state.ItemID,
        })
      })
      
      .then(response => response.json())
      .then(transaction => {
          this.setState({transactions: transaction})
          this.props.refresh()
          this.props.onRouteChange('sellingpage')
      })
      }
    
      render() {
        let optionItems = this.props.items.map((item) =>
            <option value={item.ItemID} key={item.ItemID}> {item.ItemName + ", Level: " + item.ItemLevel + ", Type: " + item.ItemType} </option>
        );

        return(
            <article className="br5 ba br4 bw1 h-35 b--black-105 mv4 w-100 w-50-m w-25-1 mw7 shadow-5 center tc">
            <main className="pa4-80">
        <fieldset id="Register_up" className="ba b--transparent ph0 mh0">
          <legend className="f2 fw6 ph0 mh0 white center">Sell an Item</legend>

          <div className="mt3">
            <label className="db fw6 lh-copy f3 white" htmlFor="Items">Item</label>

            <select className="fw6 f3" id="itemSelected" onChange={this.onItemChange}> {optionItems} </select>

          </div>

          <div className="mt3">
            <label className="db fw6 lh-copy f3 white" htmlFor="Cost">Cost</label>
            <input className="pa2 FFFF00 input-reset ba bw1 b--white bg-transparent w-30 white" type="cost" name="cost"  id="cost" onChange={this.onCostChange}/>
        </div>
        </fieldset>
        <div className="mt4">
          <input onClick={this.onCreateSaleButton} className="b ph3 pv2 input-reset ba bw1 b- bg-transparent grow pointer f3 green dib" type="submit" value="Create Sale"/>
        </div>
        <div className="lh-copy mt3">
          <br/>
        </div>
    </main>
    </article>

        )
    
    }
    
}
export default CreateSale;