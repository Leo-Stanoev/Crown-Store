import React from 'react';
import './Home.css';
import BuyButton from './BuyButton'
import SellButton from './SellButton'

class Home extends React.Component{
    //constructor(props){
    //    super(props);
    //}

    onBuyButton = () => {
        this.props.refresh()
        this.props.onRouteChange('buyingpage')
      }

      onSellButton = () => {
        this.props.refresh()
        this.props.onRouteChange('sellingpage')
      }

    render(){
        //const {onRouteChange} = this.props;
        return (
            <div>
                <div className='buttons'>
                <div className="buy pointer grow" onClick={this.onBuyButton}><BuyButton /></div>
                <div className="buy pointer grow" onClick={this.onSellButton}><SellButton/></div>
                </div>
            </div>
        );
    }
}

export default Home;