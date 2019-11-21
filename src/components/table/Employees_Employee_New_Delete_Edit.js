import React, {Component} from 'react';
import EmployeeEditDelete from './Employee_Delete_Edit';
import { Link } from 'react-router-dom/cjs/react-router-dom';

class Employees_Employee_New_Delete_Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
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
        .then((data) => {
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
        .then(response => response.json())
        .then(() => {
            const updatedEmps = this.state.employees.filter(emp => emp.id !== empId)
            this.setState({employees: updatedEmps})
        })
    }


    renderEmployees = () => {
        return this.state.employees.map((employee,index) => {
            return <EmployeeEditDelete key={index} emp={employee} deleteEmployee={this.deleteEmployee} />
        })
    }
    render() {
        return <table id="employee">
                    <thead>
                        <tr><th colSpan={5} style={{backgroundColor:'white', border:'hidden', textAlign:'right'}}><Link to='/employee-new-form'>New Employee</Link></th></tr>
                        <tr><th>Id</th><th>Name</th><th>Title</th><th>Email</th><th>Actions</th></tr>
                    </thead>
                    <tbody>{this.renderEmployees()}</tbody>
                </table>
    }
}

export default Employees_Employee_New_Delete_Edit;