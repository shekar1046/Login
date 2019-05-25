import React,{Component} from 'react';
import {connect} from 'react-redux';
import Dashboard from './Dashboard'
class App extends Component {
 state={
   userId:'',
   password:'',
   auth:false
 }
  handleChange1=(e)=>{
      this.setState({
        userId :e.target.value
      })

  }
  handleChange2=(e)=>{
    this.setState({
      password: e.target.value
    })
 
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const {username,password}=this.props.login
    
    if((this.state.userId===username)&&(this.state.password===password)){
      this.setState({
        auth:true
      })
     
    }else{
      window.alert('userId/Password is incorrect')
    }
 }
  render(){
  return (
    (this.state.auth)?(
    <Dashboard />
    ):(
    <div className="App container">
      <div className="card center">
      <div className="card-body ">
      <form className=" form-group" onSubmit={this.handleSubmit}>
        userId:<input className="form-text" type="text" name="userId" onChange={this.handleChange1}/><br/>
        Password:<input className="form-control" type="password" name="Password" onChange={this.handleChange2}/><br/>
        <button className="btn btn-primary mb-1">Login</button>
      </form>
    </div>
    </div>
    </div>
    )
  );
}
}
const mapStateToProps=(state)=>{

  return {
    login:state.login
}
}
export default connect(mapStateToProps)(App);
