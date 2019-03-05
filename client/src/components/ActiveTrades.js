import React, { Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect} from 'react-redux';
import {getTrades, deleteTrade} from '../actions/tradeActions';
import PropTypes from 'prop-types';

class ActiveTrades extends Component {

    componentDidMount() {
        this.props.getTrades();
    }

    onDeleteClick = id => {
        this.props.deleteTrade(id);
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
                <ListGroup>
                    <TransitionGroup className = "trade-list">
                        {trades.map(({ id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this,id)}
                                    >
                                    &times;
                                    </Button>
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
export default connect(mapStateToProps, { getTrades, deleteTrade })(ActiveTrades);
