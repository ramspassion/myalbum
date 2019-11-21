import React, {Component} from 'react';

class Employees extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees:[]
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/employees', {
            method:'get',
            headers: {'content-type':'application/json'}            
        })
        .then(response => response.json())
        .then(data => {this.setState({employees: data})})
    }

    renderEmployee = () => {
        return this.state.employees.map((employee, index) => {
            return <tr key={index}>
                        <td>{employee.id}</td>
                        <td>{employee.preferredFullName}</td>
                        <td>{employee.jobTitleName}</td>
                        <td>{employee.email}</td>
                   </tr>
        })
    }

    render() {
        const employee = this.state.employees.map((employee, index) => {
            return <tr key={index}>
                <td>{employee.id}</td>
                <td>{employee.preferredFullName}</td>
                <td>{employee.jobTitleName}</td>
                <td>{employee.email}</td>
            </tr>
        })
        return <div>
            <table id="employee">
                <thead>
                    <tr>
                        <th>ID</th><th>Employee Name</th><th>Job Title</th><th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {employee}
                    {/* {this.renderEmployee()} */}
                    {/* {this.state.employees.map((employee, index) => {
                        return <tr key={index}>
                                    <td>{employee.id}</td>
                                    <td>{employee.preferredFullName}</td>
                                    <td>{employee.jobTitleName}</td>
                                    <td>{employee.email}</td>
                               </tr>
                    })} */}
                </tbody>
            </table>
        </div>
    }
}

export default Employees