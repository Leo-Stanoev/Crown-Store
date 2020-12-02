import React, { Component } from 'react';
import './SellingPage.css';
import ListItem from '../Items/ListItem';

class SellingPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            TargetItem: '',
            counter: 0
        }
    }

    handleClick = (event) => {
        this.setState({TargetItem: event.target.value})
        console.log("document.getElementById")
        
        
      }

render(){
    this.counter=0;
    const items = this.props.items.map(item => {
        this.counter ++;
        return(
        <ListItem onClick={this.handleClick} id="hi" key={item.ItemID} 
                    ItemID={item.ItemID}
                    ItemImageURL={item.ItemImageURL}
                    ItemName={item.ItemName} 
                    ItemSlot={item.ItemSlot}
                    ItemType={item.ItemType} 
                    ItemLevel={item.ItemLevel}
             />
             
        
        )
        
    })
    return(
        
        <div>{items} </div>
        
    )

}
}
export default SellingPage;