import React from "react";
import {Button, Modal} from 'react-bootstrap';
import WrapperCalc from "./calc.js";
import {Auth} from "../services";



class WeddingCalc extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            show: false,
        }
    }

    handleOpen = () => {
      this.setState({show: true});
    };

    handleClose = () => {
      this.setState({show: false});
    };

    sendValue = (email, password, values) => {
        console.log('sendValue', values)
        this.props.sendFinished({
            email,
            password,
            values
        })
    };

    render () {
        return (
            <div className="section calc">
                <h2>Получите стоимость Вашей свадьбы нажав кнопку ниже!</h2>
                <p><img src="../assets/img/ven.png" /></p>
                <Button className="btn" onClick={this.handleOpen}>Калькулятор свадьбы</Button>
                <Modal show={this.state.show} onHide={this.handleClose} >
                    <Modal.Header>
                        <h2>Создай идеальную свадьбу</h2><Button onClick={this.handleClose} className="small">X</Button>
                    </Modal.Header>
                    <Modal.Body>
                        <WrapperCalc
                            sendValue={this.sendValue}
                        />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default WeddingCalc;
