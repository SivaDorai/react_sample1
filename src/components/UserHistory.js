import React from "react";
//import ReactDOM from 'react-dom';
//import {connect} from 'react-redux';
import configureStore from './configureStore.js';

class UserHistory extends React.Component {

  constructor(props){
    super(props);
    this.state = configureStore();
  }

  // function getstoredata(){
  //   const state= store.getState();
  //   return{
  //     users:state.users
  //   };
  // }

  render(props){
    return(
      <div>
        <h3 color="red"> User History </h3>
        <table>
          <thead/>
          <tbody>
          <tr><td> User Name </td><td> EMail </td></tr>
          <tr><td> {this.state.username} </td><td> {this.state.email} </td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default UserHistory;
