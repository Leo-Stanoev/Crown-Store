import React from 'react'

class Register extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      UserName: '',
      UserEmail: '',
      Password: '',
      UserServer: '',
      UserFaction: ''
    }
  }
  onUserNameChange = (event) => {
    this.setState({UserName: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({UserEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({Password: event.target.value})
  }

  onServerSelect = (event) => {
    this.setState({UserServer: event.target.value})
  }

  onFactionSelect = (event) => {
    this.setState({UserFaction: event.target.value})
  }

  onRegisterButton = () => {
    fetch('http://localhost:3000/register', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      UserName: this.state.UserName,
      UserEmail: this.state.UserEmail,
      Password: this.state.Password,
      UserServer: this.state.UserServer,
      UserFaction: this.state.UserFaction
    })
  })
    .then(response => response.json())
    .then(user => {
      if(user.UserID){
        this.props.loadUser(user)
        this.props.onRouteChange('home');
      }
    })
  }

  render() {
    
    return(
        <article className="br5 ba br4 bw1 h-35 b--black-105 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center tc">
        <main className="pa4-80">
    <fieldset id="Register_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0 white center">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f3 white" htmlFor="email-address">Username</label>
        <input className="pa2 FFFF00 input-reset ba bw1 b--white bg-transparent w-60 white" type="name" name="username"  id="Register-username" onChange={this.onUserNameChange}/>
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f3 white" htmlFor="email-address">Email</label>
        <input className="pa2 FFFF00 input-reset ba bw1 b--white bg-transparent w-60 white" type="email" name="email-address"  id="Register-email-address" onChange={this.onEmailChange}/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f3 white" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bw1 b--white bg-transparent w-60 white" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f3 white" htmlFor="Server">Server</label>
        <input onClick={this.onServerSelect} className="b ph3 pv2 ba bw1 b- bg-transparent pointer f3 white dib" type="submit" value="EU"/>
        <input onClick={this.onServerSelect} className="b ml2 mr2 ph3 pv2 ba bw1 b- bg-transparent pointer f3 white dib" type="submit" value="NA"/>
        <input onClick={this.onServerSelect} className="b ph3 pv2 ba bw1 b- bg-transparent pointer f3 white dib" type="submit" value="PTS"/>
      </div>
      <div className="">
      <label className="db fw6 lh-copy f3 white" htmlFor="Faction">Faction</label>
      <input onClick={this.onFactionSelect} className="b ph3 pv2 ba bw1 b- bg-transparent pointer f3 white dib" type="submit" value=" Aldmeri "/>
      <input onClick={this.onFactionSelect} className="b ml2 mr2 ph3 pv2 ba bw1 b- bg-transparent pointer f3 white dib" type="submit" value="Daggerfall"/>
      <input onClick={this.onFactionSelect} className="b ph3 pv2 ba bw1 b- bg-transparent pointer f3 white dib" type="submit" value="Ebonheart"/>
    </div>
    </fieldset>
    <div className="mt4">
      <input onClick={this.onRegisterButton} className="b ph3 pv2 input-reset ba bw1 b- bg-transparent grow pointer f3 green dib" type="submit" value="Register"/>
    </div>
    <div className="lh-copy mt3">
      <br/>
    </div>
</main>
</article>
    )

}
}
export default Register;