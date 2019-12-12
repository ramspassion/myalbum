import React, {Component} from 'react'

class Employee_New_Form_Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            first_name:'',
            last_name:'',
            jobTitleName:'',
            preferredFullName:'',
            email:'',
            message:''
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
    	event.preventDefault();
        fetch('http://localhost:3000/employees', {
            method:'post',
            headers: {
                'Content-Type':'application/json '
            },
            body:JSON.stringify(this.state)
        })
        .then(response => {
            if(response.status >= 400) {
                throw new Error('Bad response from server')
            }
            if(response.status === 201) {
                console.log('response....', response.status)
                this.setState({message:response.status})
                return response.json()
            }
        })        
        this.setState({
            id:'',
            first_name:'',
            last_name:'',
            jobTitleName:'',
            preferredFullName:'',
            email:''
        })
    }

    onReload = () => {
        window.location.reload();
    }
    onCancel = () => {
        this.props.history.push('/employees-employee-new-delete-edit')
    }

    render () {
        return <form onSubmit={this.onSubmit}>
            <div style={{overflowX:"auto", margin:20}}>
            <label>ID</label>
            <input name="id" type="text" value={this.state.id} onChange={this.onChange} />
            <br/><br/>
            <label>First Name</label>
            <input name="first_name" type="text" value={this.state.first_name} onChange={this.onChange} />
            <br/><br/>
            <label>Last Name</label>
            <input name="last_name" type="text" value={this.state.last_name} onChange={this.onChange} />
            <br/><br/>
            <label>TitleName</label>
            <input name="jobTitleName" type="text" value={this.state.jobTitleName} onChange={this.onChange} />
            <br /><br/> 
            <label>FullName</label>
            <input name="preferredFullName" type="text" value={this.state.preferredFullName} onChange={this.onChange} />
            <br /><br />
            <label>Email</label>
            <input name="email" type="text" value={this.state.email} onChange={this.onChange}/>
            <br /><br />
            <button style={{padding:10, fontSize:15, color:'white', backgroundColor: 'green'}} name="submit" type="submit" onClick={this.onReload}>Submit</button>
            <span style={{margin:5}}/>
            <button style={{padding:10, fontSize:15}} name="cancel" type="submit" onClick={this.onCancel}>Cancel</button>
            </div>
        </form>
    }
}

export default Employee_New_Form_Modal