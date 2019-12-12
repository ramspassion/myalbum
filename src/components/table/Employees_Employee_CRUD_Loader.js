import React, {Component} from 'react'
import Employee from './Employee_Delete_Edit';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import LoadingSpinner from './LoadingSpinner';

class Employees_Employee_CRUD_Loader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees:[],
            loading:true   // will be true when ajex request is running
        }
    }

    componentDidMount() {
        setTimeout(() => {
            fetch('http://localhost:3000/employees', {
                method:'get',
                headers: {
                    'Content-Type':'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                this.setState({employees: data, loading: false})
            })
        }, 5000)
    }

    deleteEmployee = (empId) => {
        fetch('http://localhost:3000/employees/'+empId, {
            method: 'delete',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(() => {
            const updatedEmployess = this.state.employees.filter(emp=> emp.id !==empId)
            this.setState({employees:updatedEmployess})
        })
    }

    renderEmployees = () => {
        return this.state.employees.map((employee, index) => {
            return <Employee emp={employee} key={index} deleteEmployee={this.deleteEmployee}/>
        })
    }
    render() {
        // let data;
        // if(this.state.loading) {
        //     console.log('status on spinner.....', this.state.loading)
        //     data = <div id="loading"/>
        // } else {
        //     console.log('status on spinner...else..', this.state.loading)
        //     data =                 
        //             <table id="employee">
        //                 <thead>
        //                     <tr><th colSpan={5}><Link to='/employee-new-form'>New Employee</Link></th></tr>
        //                     <tr><th>ID</th><th>Name</th><th>Title</th><th>Email</th><th></th></tr>
        //                 </thead>
        //                 <tbody>{this.renderEmployees()}</tbody>
        //             </table>
        // }
        return <div>
                {/* {data} */}
                {this.state.loading ? <LoadingSpinner /> :
                <table id="employee">
                    <thead>
                        <tr><th colSpan={5} style={{backgroundColor:'white', border:'none', paddingLeft:830}}><Link to='/employee-new-form'>New Employee</Link></th></tr>
                        <tr><th>ID</th><th>Name</th><th>Title</th><th>Email</th><th></th></tr>
                    </thead>
                    <tbody>{this.renderEmployees()}</tbody>
                </table>
                }
                
                </div>
    }
}

export default Employees_Employee_CRUD_Loader