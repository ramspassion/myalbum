import React, {Component} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import EmployeeDelete from './Employee_Delete';
class Employees_Employee_Delete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            employee:{}
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
        .then(data => {
            this.setState({employees: data})
        })
    }
    
    deleteEmployee = (empId) => {
        fetch('http://localhost:3000/employees/'+empId, {
            method:'delete',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(respons => respons.json())
        .then( () => {
            const updatedEmps = this.state.employees.filter(emp => emp.id !== empId)
            this.setState({employees:updatedEmps})
        })
    }
    renderEmployee = () => {
        return this.state.employees.map((employee, index) => {
            return <EmployeeDelete key={index} emp={employee} deleteEmployee={this.deleteEmployee} />
            // return <tr key={index}>
            //         <td>{employee.id}</td>
            //         <td>{employee.preferredFullName}</td>
            //         <td>{employee.jobTitleName}</td>
            //         <td>{employee.email}</td>
            //         <td><button style={{backgroundColor:'red', color:'white'}} onClick={this.deleteEmployee.bind(this,employee.id)}>Delete</button></td>
            //     </tr>  
        })
    }
    
    render() {
        return <table id="employee">
                <thead>
                    <tr><th colSpan={5} style={{backgroundColor:'white', border:'hidden', textAlign:'right'}}><Link to='/employee-new'>New Employee</Link></th></tr>
                    <tr><th>Id</th><th>Name</th><th>Title</th><th>Email</th><th>Action</th></tr>
                </thead>
                <tbody>
                    {this.renderEmployee()}
                </tbody>
            </table>
    }
}

export default Employees_Employee_Delete