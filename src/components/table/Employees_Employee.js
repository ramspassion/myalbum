import React, {Component} from 'react';
import Employee from './Employee'

class Employees_Employee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/employees', {
            method:'get',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(data => this.setState({employees:data}))
    }

    renderEmployee = () => {
        return this.state.employees.length > 0 ? this.state.employees.map((employee, index) => {
            return <Employee key={index} emp={employee} />
        }) : (<tr><td colSpan={4}>No Employees</td></tr>)
    }

    render() {
        return <div>
            <table id="employee">
                <thead>
                    <tr><th>Id</th><th>Name</th><th>Title</th><th>Email</th></tr>
                </thead>
                <tbody>
                    {this.renderEmployee()}
                </tbody>
            </table> 
        </div>
    }
}

export default Employees_Employee