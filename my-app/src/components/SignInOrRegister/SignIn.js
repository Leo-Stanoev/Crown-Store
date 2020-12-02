import React from 'react'

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      UserEmail: '',
      Password: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({UserEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({Password: event.target.value})
  }

  onSignInButton = () => {
    fetch('http://localhost:3000/SignIn', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      UserEmail: this.state.UserEmail,
      Password: this.state.Password
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
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0 white center">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f3 white" htmlFor="email-address">Email</label>
        <input className="pa2 FFFF00 input-reset ba bw1 b--white bg-transparent w-60 white" type="text" name="email-address"  id="signin-email-address" onChange={this.onEmailChange}/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f3 white" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bw1 b--white bg-transparent w-60 white" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
      </div>
    </fieldset>
    <div>
      <input onClick={this.onSignInButton} className="b ph3 pv2 input-reset ba bw1 b- bg-transparent grow pointer f3 white dib" type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      <br/>
    </div>
</main>
</article>
    )

}
}
export default SignIn;