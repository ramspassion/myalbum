import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Employee_Delete_Edit extends Component {
    render() {
        return <tr>
            <td>{this.props.emp.id}</td>
            <td><Link to={'/employee-edit-form/'+this.props.emp.id}>{this.props.emp.preferredFullName}</Link></td>
            <td>{this.props.emp.jobTitleName}</td>
            <td>{this.props.emp.email}</td>
            <td>
                <button style={{backgroundColor:'red',color:'white'}} onClick={this.props.deleteEmployee.bind(this, this.props.emp.id)}>Delete</button>
                <Link style={{paddingLeft:20}} to={'/employee-edit-form/'+this.props.emp.id}>Edit</Link>
            </td>
        </tr>
    }
}

export default Employee_Delete_Edit