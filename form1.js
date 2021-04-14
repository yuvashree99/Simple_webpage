import React, { Component } from 'react';
import './form1.css';
class form1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            city: "",
            phoneNumber:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this)

    }
    firsthandler = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }
    cityhandler = (event) => {
        this.setState({
            city: event.target.value
        })
    }
    numberhandler = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert('Firstname:'+this.state.firstname + 'Lastname:'+this.state.lastname + 'City:'+this.state.city + 'PhoneNumber:'+this.state.phoneNumber);
        console.log(this.state);
        this.setState({
            firstname: "",
            lastname: "",
            city: "",
            phoneNumber: "",
        })
    event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                   <h1>Please enter the following details</h1>
                   <label>FirstName:</label> <input type="text" id="Fname" value={this.state.firstname} onChange={this.firsthandler}/> <br />
                   <br />
                   <label>LastName:</label> <input type="text" id="Lname" value={this.state.lastname} onChange={this.lasthandler}/> <br />
                   <br />
                   <label>City:</label> <input type="text" id="city" value={this.state.city} onChange={this.cityhandler}/> <br />
                   <br />
                   <label>PhoneNumber:</label><input type="tel" id="pno" value={this.state.phoneNumber} onChange={this.numberhandler} /><br/>
                   <br />
                   <input type="submit" id="submit" value="SUBMIT" />
                </form>
            </div>
        )
    }
}  

export default form1