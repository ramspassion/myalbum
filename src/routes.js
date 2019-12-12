import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import MyCards from './components/cards/MyCards';
import Card_MyCards from './components/cards/MyCards_Card';
import Employees from './components/table/Employees';
import Employees_Employee from './components/table/Employees_Employee';
import Employee_New_Form from './components/table/Employee_New_Form';
import Employee_New_Form_Modal from './components/table/Employee_New_Form_Modal';
import Employees_Employee_New from './components/table/Employees_Employee_New';
import Employees_Employee_Delete from './components/table/Employees_Employee_Delete';
import Employees_Employee_New_Delete_Edit from './components/table/Employees_Employee_New_Delete_Edit';
import Employee_Edit_Form from './components/table/Employee_Edit_Form';
import Employees_Employee_Model from './components/table/Employees_Employee_Model';
import ModalSampleButton from './components/modal/ModalSampleButton';
import Employees_Employee_CRUD_Loader from './components/table/Employees_Employee_CRUD_Loader';

class Routes extends Component {
    render() {
        return <Router> 
            <ul>
                <li><Link to='/mycards'><button style={{backgroundColor:'red', color:'white'}}>MyCards</button></Link></li>                
                <li><Link to='/mycards-card'>MyCards > Cards</Link></li>
                <li><Link to='/employees-table'>Employees</Link></li>
                <li><Link to='/employees-employee-table'>Employees > Employee</Link></li>
                <li><Link to='/employee-new-form'>New Employee</Link></li>
                <li><Link to='/employees-employee-new'>EmployeesViewAndNew</Link></li>
                <li><Link to='/employees-employee-new-delete'>EmployeesViewNewDelete</Link></li>
                <li><Link to='/employees-employee-new-delete-edit'>EmployeesViewNewDeleteEdit</Link></li>
                <li><Link to='/employees-employee-model'>EmployeesViewNewDeleteEditModel</Link></li>
                <li><Link to='/sample-modal'>Sample Modal</Link></li>
                <li><Link to='/employees-employee-crud-loader'>EmployeesCRUDWithLoader</Link></li>
            </ul>
            <Switch>
                <Route path='/mycards' component={MyCards}></Route>
                <Route path='/mycards-card' component={Card_MyCards} />
                <Route path='/employees-table' component={Employees} />
                <Route path='/employees-employee-table' component={Employees_Employee}/>
                <Route path='/employee-new-form' component={Employee_New_Form} />
                <Route path='/employee-new-form-modal' component={Employee_New_Form_Modal} />
                <Route path='/employees-employee-new' component={Employees_Employee_New} />
                <Route path='/employees-employee-new-delete' component={Employees_Employee_Delete}/>
                <Route path='/employees-employee-new-delete-edit' component={Employees_Employee_New_Delete_Edit} />
                <Route path='/employee-edit-form/:id' component={Employee_Edit_Form}/>
                <Route path='/employees-employee-model' component={Employees_Employee_Model} />
                <Route path='/sample-modal' component={ModalSampleButton} />
                <Route path='/employees-employee-crud-loader' component={Employees_Employee_CRUD_Loader} />
            </Switch>
        </Router>
    }
}

export default Routes;