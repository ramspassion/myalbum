import React, {Component} from 'react';
import Employee from './Employee';
import {Link} from 'react-router-dom';

class Employees_Employee_New extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees:[]
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/employees', {
            method: 'get',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({employees: data})
        })
    }

    renderEmployees = () => {
        return this.state.employees.map((employee,index) => {
            return <Employee emp={employee} key={index} />
        })

    }
    render() {
        return <div style={{margin:10}}>
        {/* <Link style= {{margin:610}} to='/employee-new'>New Employee</Link> */}
        <table id="employee">
            <thead>
                <tr><th colSpan={4} style={{backgroundColor:'white', border:'hidden', textAlign:'right'}}><Link to='/employee-new'>New Employee</Link></th></tr>
                <tr><th>Id</th><th>Name</th><th>Title</th><th>Email</th></tr>
            </thead>
            <tbody>{this.renderEmployees()}</tbody>
            </table>
            </div>
    }
}

export default Employees_Employee_New