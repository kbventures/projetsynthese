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
        name: '',
        amount: '' 
    }

    
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    /*
    onChange1 = (e) => {
        this.setState({ [e.target.name]: e.target.value }, function () { console.log(this.state.name);
        });
    }
    This didn't work because you mixed your schema name with html target name
    
    onChange2 = (e) => {
        this.setState({ [e.target.amount]: e.target.value }, function () { console.log(this.state.amount);
    });
    }
*/
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        //console.log(event.target.name),  // name of the form element
        //console.log(event.target.value)} // the value of the form element
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newTrade = {
            name: this.state.name,
            amount: this.state.amount
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
                >AddTrade</Button>
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
                                    name="name" //target
                                    id="name"
                                    placeholder="Pair"
                                    onChange={this.onChange}
                                />
                                 <Input
                                    type="text"
                                    name="amount" //target
                                    id="amount"
                                    placeholder="Amount"
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