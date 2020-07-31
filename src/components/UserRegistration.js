import React from "react";
// import {useForm} from "react-hook-form";
//import UserHistory from './UserHistory.js';
import {connect} from 'react-redux';
// import { createStore } from 'redux';
// import UserReducer from './UserReducer.js';
import UserAction from './UserAction.js';
import PropTypes from 'prop-types';

class UserRegistration extends React.Component{

  constructor(props){
    super(props);
    this.handleUserName = this.handleUserName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      userdata: {
        username:"",
        email: ""
      }
    };
  }

  //const { register, errors,handleSubmit } = useForm();
  //const [data, setData] = useState('');
  //let store = createStore(UserReducer);
  //const onSubmit = data => console.log(data);

  // function RegisterUser(data){
  //     console.log(data);
  //     store.dispatch(UserAction);
  //     console.log(store.getState());
  // }

  // return(
  //   <div>
  //     <form onSubmit={handleSubmit(RegisterUser)}>
  //       <input type="Text" name="username" placeholder="Enter Username" ref={register({required:true, maxLength:8})}/>
  //       {errors.username && "Pls enter User Name"}
  //       <p/>
  //       <input type="Text" name="email" placeholder="Enter email" ref={register({required:true})}/>
  //       {errors.password && "Pls enter EMail"}
  //       <p/>
  //       <input type="Submit"/>
  //     </form>
  //
  //   </div>
  // );

handleUserName(event){
  const userdata = {...this.state.userdata,username: event.target.value}
  this.setState({ userdata:userdata})
}
handleEmail(event){
  const userdata = {...this.state.userdata,email: event.target.value}
  this.setState({userdata})
}

handleSubmit=(event)=> {
  event.preventDefault();
  console.log(this.state.userdata.username);
  console.log(this.state.userdata.email);
  this.props.dispatch(UserAction(this.state.userdata));
  //return <UserHistory userdata={this.state.userdata} />
}

render(){
  return(
    <div>
      <form onSubmit={this.handleSubmit}>
        Enter User Name:
        <input type="Text" name="username" value={this.state.userdata.username} onChange={this.handleUserName}/>

        <p/>
        Enter EMail ID:
        <input type="Text" name="email" value={this.state.userdata.email} onChange={this.handleEmail}/>

        <p/>
        <input type="Submit"/>
      </form>

    </div>
  );
}

}

UserRegistration.propTypes={
  dispatch:PropTypes.func.isRequired
};


export default connect() (UserRegistration);
