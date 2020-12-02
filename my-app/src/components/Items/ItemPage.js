import React from 'react';
import './ListItem.css';
import Empty from '../../resources/EmptyStar.png'
import Full from '../../../src/resources/FullStar.png'
import StarRatings from '../../../node_modules/react-rating';


class ItemPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            done: false,
        }
        }
        
    handleCompleteTransaction = ()=> {
        this.setState({done: true }) 
            //display the rating prompt
            //console.log(this.props.data.TransactionID, this.props.data.UserName, this.props.MyUser.UserName)
    }

    goBack = () => {
        if(this.props.data.TransactionType === "Buy"){
        this.props.onRouteChange('buyingpage')
    }

        else if(this.props.data.TransactionType === "Sell"){
            this.props.onRouteChange('sellingpage')
        }
    }

    handleCompleteRating = (event) => {
        fetch('http://localhost:3000/CompleteTransaction', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              TransactionID: this.props.data.TransactionID,
              PosterID: this.props.data.UserID,
              LoggedUserID: this.props.MyUser.UserID,
              Rating: event
            })
          })
          
          .then(response => response.json())
          .then(transaction => {
              this.setState({transactions: transaction})
              this.props.onRouteChange('home')
              this.props.refresh()
          })

    }


    render(){
        return(
            <div>
                
                <div className='center container b' style={{maxWidth:'500px'}}>
                <div>

                <input onClick={this.goBack} 
                style={{ margin:"0 0 10px -150px", boxShadow: "2px 2px 4px 2px black", alignSelf:"center"}} 
                className="b ph3 pv2 ba bw1 b- bg-green grow pointer f3 dib" type="submit" value="Go Back"/>
                </div>

                    <img className ="img ml4 6rem" style ={{height:'90px', marginTop:"15px"}} alt='' src={this.props.data.ItemImageURL} ></img>
                        <p> {`Item Name: ${this.props.data.ItemName}`}</p>
                        <p> {`Item Slot: ${this.props.data.ItemSlot}`}</p>
                        <p> {`Item Type: ${this.props.data.ItemType}`}</p>
                        <p> {`Item Level: ${this.props.data.ItemLevel}`}</p>
                        <p> {`Cost: ${this.props.data.ItemGoldCost}`}</p>
                        <p> {`Poster: ${this.props.data.UserName}`}</p>
                        <p> {`Server: ${this.props.data.UserServer}`}</p>
                        <p> {`Faction: ${this.props.data.UserFaction}`}</p>
                        <p> {`Poster Rating: `} <StarRatings emptySymbol={<img src={Empty} style={{width:"45px"}} alt=""/>} fullSymbol={<img src={Full} style={{width:"45px"}} alt=""/>} initialRating={this.props.data.UserRating} quiet={true} readonly={true}/></p>
        

                        {this.props.data.UserName !== this.props.MyUser.UserName &&
                            <input onClick={this.handleCompleteTransaction} style={{ margin:"0 0 10px 100px", boxShadow: "2px 2px 4px 2px black", alignSelf:"center"}} className="b ph3 pv2 ba bw1 b- bg-green grow pointer f3 dib" type="submit" value="Complete Transaction"/>
                        }
                        {this.state.done === true &&
                            <div>
                            <p style={{margin:"5px 0 0px 150px"}} >Please Rate!</p>
                            <StarRatings onClick={this.handleCompleteRating} style={{marginLeft:"125px"}} emptySymbol={<img src={Empty} style={{width:"45px"}} alt=""/>} fullSymbol={<img src={Full} style={{width:"45px"}} alt=""/>} initialRating={0}/>
                            </div>
                        }
                </div> 
            </div>
        )
    };

}

export default ItemPage;