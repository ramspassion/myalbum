import React, {Component} from 'react'

class Employee_Edit_Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            id:'',
            first_name:'',
            last_name:'',
            jobTitleName:'',
            preferredFullName:'',
            email:''   
        }
        this.onChange = this.onChange.bind(this)
        this.onEdit = this.onEdit.bind(this)

    }

    componentDidMount() {
        fetch('http://localhost:3000/employees/'+this.props.match.params.id, {
            method:'get',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({id:data.id,first_name:data.first_name,last_name:data.last_name,jobTitleName:data.jobTitleName,preferredFullName:data.preferredFullName,email:data.email})
        })
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onEdit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/employees/'+ this.props.match.params.id, {
            method:'put',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(response => {
            if(response.status >= 400) {
                throw new Error('Bad response from server')
            }
            return response.json()
        })
        this.props.history.push('/employees-employee-new-delete-edit');
    }

    onCancel = () => {
        this.props.history.push('/');
    }

    render() {
        return <form>
            <div style={{margin:40}}>
                <label style={{paddingRight:80}}>Id</label>
                <input type="text" name="id" value={this.state.id} onChange={this.onChange} disabled />
                <br/><br/>
                <label>First Name</label>
                <span style={{margin:8}} />
                <input type="text" name="first_name" value={this.state.first_name} onChange={this.onChange} />
                <br/><br/>
                <label>Last Name</label>
                <span style={{margin:8}} />
                <input type="text" name="last_name" value={this.state.last_name} onChange={this.onChange} />
                <br/><br/>
                <label>Title</label>
                <span style={{margin:32}} />
                <input type="text" name="jobTitleName" value={this.state.jobTitleName} onChange={this.onChange} />
                <br/><br/>
                <label>Name</label>
                <span style={{margin:26}} />
                <input type="text" name="preferredFullName" value={this.state.preferredFullName} onChange={this.onChange} />
                <br/><br/>
                <label>Email</label>
                <span style={{margin:28}} />
                <input type="text" name="email" value={this.state.email} onChange={this.onChange} />
                <br/><br/>
                <button onClick={this.onEdit} style={{padding:10,fontSize:12,backgroundColor:'green', color:'white'}} type="button" name="submit">Submit</button>
                <button style={{padding:10,fontSize:12, margin:10, backgroundColor:'gray', color:'white'}} type="button" name="cancel" onClick={this.onCancel}>Cancel</button>
            </div>
        </form>
    }
}

export default Employee_Edit_Form