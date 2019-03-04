import React, { Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect} from 'react-redux';
import {getTrades} from '../actions/tradeActions';
import PropTypes from 'prop-types';

class ActiveTrades extends Component {

    componentDidMount() {
        this.props.getTrades();
    }

    /*
    state = {
        trades: [
            { id: uuid(), name:'BTC/USD' },
            { id: uuid(), name:'BTC/ETH' },
            { id: uuid(), name:'BTC/LTC' },
            { id: uuid(), name:'BTC/EOS' },
            { id: uuid(), name:'ETH/USD' }
        ]
    }
    */

    render() {
        const { trades } = this.props.trade;
        return(
            <Container>
                <Button 
                color="dark" 
                style={{marginBottom: '2rem'}} 
                onClick={() => {
                    const name = prompt('Enter Trade');
                    if(name) {
                        this.setState(state => ({
                            trades: [...state.trades, { id: uuid(), name }]
                        }));
                    }
                }}
                >
                Add Trade
                </Button>
                <ListGroup>
                    <TransitionGroup className = "trade-list">
                        {trades.map(({ id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                        this.setState(state => ({ 
                                            //goes through page state(id: trades) and filters out all except the one's equal id
                                            trades: state.trades.filter(trade => trade.id !== id)
                                        }));
                                    }}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}


//mapping redux state to component prop property

ActiveTrades.propTypes = {
    getTrades: PropTypes.func.isRequired,
    trade: PropTypes.object.isRequired
}

const mapStateToProps = (state)=> ({
    trade: state.trade
});
export default connect(mapStateToProps, { getTrades })(ActiveTrades);
