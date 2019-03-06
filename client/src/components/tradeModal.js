import React, {Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {connect} from 'react-redux';
import {addTrade} from '../actions/tradeActions';



class TradeModal extends Component {
    state = {
        modal: false, 
        name: '' 
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newTrade = {
            name: this.state.name
        }
        //add trade via addTrade action
        this.props.addTrade(newTrade);

        //Close modal
        this.toggle();
    }
    // see modal in react-strap for more information on modal etc
    render() {
        return(
            <div>
                <Button 
                color="dark" 
                style={{marginBottom: '2rem'}} 
                onClick={this.toggle}
                >AddItem</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    >
                    <ModalHeader toggle={this.toggle}>Add to Active Trade List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="trade">Trade</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="trade"
                                    placeholder="Add trade"
                                    onChange={this.onChange}
                                />
                                <Button 
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                    >
                                    Add Trade
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
    );
    }
}


const mapStateToProps = state => ({
    trade: state.trade
})

export default connect(mapStateToProps, {addTrade})(TradeModal);