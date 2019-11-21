import React, {Component} from 'react';
import PropTypes from 'prop-types';

const backdropStyle = {
    position: 'fixed',
    top:0,
    bottom:0,
    left:0,
    right:0,
    backgroundColor:'rgba(0,0,0,0.5)',
    padding:50
}

const modalStlye = {
    position: 'relative',
    maxWidth:500,
    minHight:300,
    backgroundColor:'#fff',
    borderRadius:5,
    margin: '0 auto',
    padding: 30,  
    // boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
}

const footerStyle = {
    position:'relative',
    bottom:0
}

class Modal extends Component {

    componentDidMount() {
        document.addEventListener("keyup", this.onKeyUp)
    }

    componentWillUnmount() {
        document.removeEventListener("keyUp", this.onKeyUp)
    }

    onKeyUp = (event) => {
        // Lookout for ESC key (27)
        if(event.which === 27 && this.props.show) {
            this.props.onClose(event)
        }
    }

    render() {
        if(!this.props.show) {
            return null
        }
        return (
            <div style={backdropStyle}>
                <div style={modalStlye}>
                    <div>Hello Header <button style={{ color:'gray',float:'right', border:'none', backgroundColor:'transparent'}} onClick={this.props.onClose}>X</button><hr style={{color:'gray'}}/></div>
                    <div>    
                    {this.props.children}
                    </div>
                    <hr />
                    <div style={footerStyle}>
                        <button onClick={this.props.onClose}>Close</button>
                    </div>
                </div>
            </div>
        )    
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default Modal