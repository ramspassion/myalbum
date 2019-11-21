import React, {Component} from 'react';
import Modal from './Modal'
class ModalSampleButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    showModal = () => {
        this.setState({
            ...this.state,
            show: !this.state.show
        })
        console.log('show modal status', this.state.show)
    }

    render() {
        return <div>
            <input type="button" value="Show Modal" onClick={this.showModal}/>
            {/* <button type="submit" onClick={this.showModal}>Show Modal</button> */}
            <Modal show={this.state.show} onClose={this.showModal}>Say Hello From Modal Sample Button</Modal>
        </div>
    }
}

export default ModalSampleButton