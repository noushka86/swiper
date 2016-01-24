export default React.createClass({
  displayName:'SignIn',

  getInitialState() {
    return{
      phone:null,
    }
  },

  render() {
    const phone=this.state.phone;

    return (
      <div>
        <h1 id="logo">SmartSit</h1>
        <img id="image-logo" src='images/babysitter.jpg'/>
        <form onSubmit={phone ? this.loginUser : this.checkPhonenumber}>
          <input
            id="signinInput"
            type='number'
            placeholder={this.state.phone ? 'enter key' :'enter mobile number'}
          />
        </form>
      </div>
    )
}
})
