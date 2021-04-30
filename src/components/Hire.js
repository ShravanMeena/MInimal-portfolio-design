import React, { Component } from "react";
import "../css/Hire.css";
import db from "../firebase/init";

export default class Hire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      query: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleName = this.handleName.bind(this);
  }

  onSubmit = () => {
    if (!this.state.name || !this.state.email || !this.state.query) {
      alert("input field can't be empty ");
      return;
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(this.state.email).toLowerCase())) {
      alert("provide valid email");
      return;
    }
    let ref = db.collection("aamLadkeQueries");

    ref
      .add({
        name: this.state.name,
        email: this.state.email,
        query: this.state.query,
      })
      .then(() => {
        console.log("Done");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleQuery = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    return (
      <div className='hire'>
        <h1 style={{ textAlign: "center", marginTop: "40px" }}>
          Hire Us
          <div className='divider'></div>
        </h1>
        <div className='formDiv'>
          <div className='form'>
            <div className='inputField'>
              <input
                onChange={this.handleName}
                value={this.state.name}
                type='text'
                placeholder='Name'
              />
            </div>

            <div className='inputField'>
              <input
                onChange={this.handleEmail}
                value={this.state.email}
                type='email'
                placeholder='Email'
              />
            </div>

            <div className='inputField'>
              <textarea
                onChange={this.handleQuery}
                value={this.state.query}
                placeholder='Enter your requirements'></textarea>
            </div>
            <div>
              <div className='hireBtn'>
                <button onClick={() => this.onSubmit()}> Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
