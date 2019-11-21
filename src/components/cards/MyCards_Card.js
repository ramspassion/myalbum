import React, {Component} from 'react';
import Card from './Card';
import {fetchEmployeesAlbums} from '../Service'

class Card_MyCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albums:[],
            employees:[]
        }
    }

    componentDidMount() {
        fetchEmployeesAlbums()
            .then(([respEmp, respAlbums]) => {
                this.setState({employees: respEmp, albums: respAlbums})
            })
        // const urlEmp ='http://localhost:3000/employees', urlAlbums='http://localhost:3000/albums';
        // Promise.all([fetch(urlEmp), fetch(urlAlbums)])
        //     .then(([respEmp, respAlbums]) => {
        //         return Promise.all([respEmp.json(), respAlbums.json()])
        //     })
        //     .then(([respEmp, respAlbums]) => {
        //         this.setState({employees: respEmp, albums: respAlbums})
        //     })
    }

    renderEmployeeAndAlbum() {
        return this.state.albums.map((album, index) => {
            const employee = this.state.employees[index]
            return <Card key={index} album={album} employee={employee}></Card>
        })
    }

    render () {
        return <div> 
            {this.renderEmployeeAndAlbum()}
        </div>
    }   
}

export default Card_MyCards;