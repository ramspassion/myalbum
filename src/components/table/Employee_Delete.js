import React, {Component} from 'react';

class Employee_Delete extends Component {
    render() {
        return <tr>
            <td>{this.props.emp.id}</td>
            <td>{this.props.emp.preferredFullName}</td>
            <td>{this.props.emp.jobTitleName}</td>
            <td>{this.props.emp.email}</td>
            <td><button style={{backgroundColor:'red',color:'white'}} onClick={this.props.deleteEmployee.bind(this, this.props.emp.id)}>Delete</button></td>
        </tr>
    }
}

export default Employee_Delete