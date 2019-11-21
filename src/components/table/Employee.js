import React, {Component} from 'react';

class Employee extends Component {
    render() {
        return <tr>
            <td>{this.props.emp.id}</td>
            <td>{this.props.emp.preferredFullName}</td>
            <td>{this.props.emp.jobTitleName}</td>
            <td>{this.props.emp.email}</td>
        </tr>
    }
}

export default Employee