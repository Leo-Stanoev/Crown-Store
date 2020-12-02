import React, { Component } from 'react'
import BuyingPage from'./components/Buying/BuyingPage';
import SellingPage from'./components/Selling/SellingPage';
import Home from './components/Home/Home'; 
import Profile from './components/Profile/Profile';
//import ListItem from './components/ListItem';
import SignIn from './components/SignInOrRegister/SignIn';
import Register from './components/SignInOrRegister/Register';
import Navigation from './components/Navigation';
import Logo from './components/Home/Logo';
import LogoNotSigned from './components/Home/LogoNotSigned';
import TargetProfile from './components/Profile/TargetProfile';
import ItemPage from './components/Items/ItemPage';
import CreateSale from './components/Selling/CreateSale';
import CreateBuy from './components/Buying/CreateBuy';


const InitialState = {
    route: 'signin',
    items: [],
    hi: "no",
    isSignedIn: false,
    TargetItem: '',
     user: {
        UserID:'',
        UserName:'',
        UserEmail:'',
        UserJoinDate:'',
        UserRating:'',
        UserCompletedTransactions:'',
        UserServer:'',
        UserFaction:''
    },
    transactions: [],
    transaction:   {
        TransactionID: '',
        TransactionType: '',
        CreationDate: '',
        CompletionDate: '',
        Completed: false,
        MatchedOrderID: '',
        ItemID: '',
        ItemName: '',
        ItemSlot: '',
        ItemType: '',
        ItemLevel: '',
        ItemGoldCost: '',
        UserID: '',
        UserName: '',
        UserRating: '',
        UserServer: '',
        UserFaction: '',
    },
    item: {
        ItemID: '',
        ItemName: '',
        ItemSlot: '',
        ItemType: '',
        ItemImageURL: '',
        ItemLevel: '',
    }

}

class App extends Component{

    constructor(){
        super();
        this.state = InitialState;
    }

    getItems(){
        fetch(`http://localhost:3000/Items`)
        .then(response => response.json())
        .then(items => this.setState({items}))
        .catch(err => console.log(err))
    } 

    getTransactions(){
        fetch(`http://localhost:3000/Transactions`)
        .then(response => response.json())
        .then(transactions => this.setState({transactions}))
        .catch(err => console.log(err))
    }

    refresh = () => {
        this.getTransactions()
        this.setState({state: this.state})
    }

    /*addItemToState = (transaction) => {
        this.setState(prevState => ({
            transactions: [...prevState.transactions, transaction]
        }))
      } */

    loadTransaction = (data) => {
        this.setState({transaction: {
        ItemImageURL: data.ItemImageURL,
        TransactionID: data.TransactionID,
        UserID: data.UserID,
        TransactionType: data.TransactionType,
        CreationDate: data.CreationDate,
        CompletionDate: data.CompletionDate,
        ItemGoldCost: data.ItemGoldCost,
        Completed: data.Completed,
        MatchedOrderID: data.MatchedOrderID,
        ItemID: data.ItemID,
        UserName: data.UserName,
        ItemName: data.ItemName,
        ItemSlot: data.ItemSlot,
        ItemType: data.ItemType,
        ItemLevel: data.ItemLevel,
        UserRating: data.UserRating,
        UserServer: data.UserServer,
        UserFaction: data.UserFaction,
       }})
    }

    loadUser = (data) => {
        this.setState({user: {
            UserID: data.UserID,
            UserName: data.UserName,
            UserEmail: data.Email,
            UserJoinDate: data.UserJoinDate,
            UserRating: data.UserRating,
            UserCompletedTransactions: data.UserCompletedTransactions,
            UserServer: data.UserServer,
            UserFaction: data.UserFaction
        }})
    }

   /* getTargetUser(){
        fetch(`http://localhost:3000/Profile/30`)
        .then(response => response.json())
        .then(user => this.setState({user}))
        .catch(err => console.log(err))
    }
*/

    componentDidMount(){
        this.getTransactions()
        //this.getTargetUser()
        this.getItems()
        }



    onRouteChange = (route) => {
        if (route ==='signin'){
            this.setState({isSignedIn: false})
        }
        else if (route === 'home'){
            this.setState({isSignedIn: true})
        }
        this.setState({route:route});
    }

    render(){
        console.log(this.transactions)
        const {isSignedIn, route} = this.state;
        return(
            
            <div className="App">
                <Navigation data = {this.state.user} isSignedIn={isSignedIn} onRouteChange ={this.onRouteChange} />
            {route === 'home' 
                ?<div><Logo onRouteChange={this.onRouteChange} />
                <Home refresh = {this.refresh} onRouteChange={this.onRouteChange}/></div> 
                :
                    ( route === 'signin' 
                    ?<div>
                        <LogoNotSigned onRouteChange={this.onRouteChange}/>
                        <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> </div>
                        :
                        (route === 'register')
                        ?<div>
                            <LogoNotSigned onRouteChange={this.onRouteChange}/>
                            <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} /></div>
                            :
                            (route === 'buyingpage')
                            ?<div>
                            <Logo onRouteChange={this.onRouteChange} />
                            <BuyingPage loadTransaction={this.loadTransaction} transactions={this.state.transactions} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
                            </div>
                            :
                            (route === 'sellingpage'
                            ?<div>
                            <Logo onRouteChange={this.onRouteChange} />
                            <SellingPage loadTransaction={this.loadTransaction} transactions={this.state.transactions} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
                            </div>
                            :
                            (route === 'profile')
                            ?
                            <div>
                            <Logo onRouteChange={this.onRouteChange} /> 
                            <Profile data = {this.state.user}/>
                            </div>
                            :
                            (route ==='targetprofile')
                            ?
                            <div>
                            <Logo onRouteChange={this.onRouteChange} /> 
                            <TargetProfile data = {this.state.user} /> 
                            </div>
                            :
                            (route ==='itempage')
                            ?
                            <div>
                            <Logo onRouteChange={this.onRouteChange} /> 
                            <ItemPage refresh = {this.refresh} transactions = {this.state.transactions} data = {this.state.transaction} MyUser = {this.state.user} onRouteChange={this.onRouteChange} /> 
                            
                            </div>
                            :
                            (route ==='createsale')
                            ?
                            <div>
                                <Logo onRouteChange={this.onRouteChange} /> 
                                <CreateSale refresh={this.refresh} data = {this.state.user} items = {this.state.items} onRouteChange={this.onRouteChange} />
                                </div>
                            :
                            (route ==='createbuy')
                            ?
                            <div>
                                <Logo onRouteChange={this.onRouteChange} /> 
                                <CreateBuy refresh={this.refresh} data = {this.state.user} items = {this.state.items} onRouteChange={this.onRouteChange} />
                                </div>
                            :
                            <Home />
                            )
                    )
                }    
            </div>
        
        );
    }
}

export default App;