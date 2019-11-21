import React, {Component} from 'react';

class Card extends Component {
    render() {
        return <div className="card">
            <img src={this.props.album.imgUrl} alt={"avatar"} />
            <h4>{this.props.employee.preferredFullName}</h4>
            <p>{this.props.employee.jobTitleName}</p>
        </div>
    }
}

export default Card;

