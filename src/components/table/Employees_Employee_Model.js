import React, {Component} from 'react'
import EmployeeDeleteEdit from './Employee_Delete_Edit';
import EmployeeNewFormModal from './Employee_New_Form_Modal';
import Modal from '../modal/Modal'
class Employees_Employee_Model extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees:[],
            show:false
        }
    }

    showModal = () => {
        this.setState({
            ...this.state,
            show: !this.state.show
        })
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

    deleteEmployee(empId) {
        fetch('http://localhost:3000/employee'+empId, {
            method:'delete',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(() => {
            const updatedEmployees = this.state.employees.filter(emp => emp.id !== empId)
            this.setState({employees: updatedEmployees})
        })
    }

    renderEmployees() {
        return this.state.employees.map((employee, index) => {
            return <EmployeeDeleteEdit emp={employee} key={index} deleteEmployee={this.deleteEmployee}/>
        })
    }

    render() {
        return <div>
                    <button type="submit" onClick={this.showModal}>New Employee</button>
                    <Modal onClose={this.showModal} show={this.state.show}><EmployeeNewFormModal /></Modal>
                    {/* <input style={{marginLeft:862}} type="button" value="New Employee" onClick={this.showModel} /><Modal show={this.state.show} onClose={this.showModel}><EmployeeNewForm /></Modal> */}
                    <table id="employee">
                        <thead>
                            <tr><th>Id</th><th>Name</th><th>Title</th><th>Email</th><th></th></tr>
                        </thead>
                        <tbody>{this.renderEmployees()}</tbody>
                    </table>
                </div>
    }
}

export default Employees_Employee_Model