import React, {Component} from 'react';
import '../../styles/album-card-box.css'

class MyCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees:[],
            albums:[]
        }
    }
    // componentDidMount() {
    //     const url = "http://localhost:3000/Employees";
    //     fetch(url, {
    //         method:'get',
    //         headers: {
    //             'content-type':'application/json'
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         this.setState({employees: data});
    //     })

    //     const urlAlbum = "http://localhost:3000/albums"
    //     fetch(urlAlbum, {
    //         method: 'get',
    //         headers: {
    //             'content-type':'application/json'
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         this.setState({albums: data})
    //     })      
    // }

    componentDidMount() {
        const empUrl='http://localhost:3000/employees', albumsUrl='http://localhost:3000/albums'
        Promise.all([fetch(empUrl), fetch(albumsUrl)])
            .then(([respEmp, respAlbums]) => {
                return Promise.all([respEmp.json(), respAlbums.json()])
            })
            .then(([respEmp, respAlbums]) => {
                this.setState({employees: respEmp, albums:respAlbums})
            })
    }
    // componentDidMount() {
    //     const empUrl='http://localhost:3000/employees', albumsUrl='http://localhost:3000/albums';
    //     Promise.all([fetch(empUrl), fetch(albumsUrl)])
    //         .then(([respEmps, respAlbums]) => 
    //              Promise.all([respEmps.json(), respAlbums.json()])
    //         )
    //         .then(([respEmps, respAlbums])=> 
    //             this.setState({employees:respEmps, albums: respAlbums})
    //         )
    // }
    renderEmployeeAlbum = () => {
         return this.state.albums.map((album,index) => {
                return <div key={index}>
                    <div className="card">
                        <img src={album.imgUrl} alt={"Avator"}/>
                        <h4>{this.state.employees[index].preferredFullName}{}</h4>
                        <p>{this.state.employees[index].jobTitleName}{}</p>
                    </div>
                </div>
        })
    }

    render() {
        // const albumtest = this.state.albums.map((album,index) => {
        //     const employees =  this.state.employees[index]
        //         return <div key={index}>
        //         <div className="card">
        //             <img src={album.imgUrl} alt={"Avatar"} />
        //             <h4>{employees.preferredFullName}</h4>
        //         <p>{employees.jobTitleName}</p>
        //         </div>
        //     </div>
        // });
        return <div>
            {/* { this.state.albums.map((album, index) => {
                return <div key={index}>
                    <div className="card">
                        <img src={album.imgUrl} alt={"avatar"} />
                        <h4>{this.state.employees[index].preferredFullName}</h4>
                        <p>{this.state.employees[index].jobTitleName}</p>
                    </div>
                </div>
            })} */}
            {this.renderEmployeeAlbum()}
            </div>
    }
}

export default MyCards