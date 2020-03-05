import React, { Component } from 'react';
import  { connect } from "react-redux";
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreator from "../../store/Actions/index";

import { makeStyles, Grid, Button, AppBar, Toolbar, Card, CardContent} from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        marginTop: "40px"
    }
});

class Counter extends Component {
    /* state = {
        counter: 0
    } */

    /* counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    } */
    
    render () {
        return (
            <React.Fragment>
                <AppBar position="static" color="secondary" /* style={{backgroundColor : {redPrimary}}} */>
                    <Toolbar>
                        <CounterOutput value={this.props.ctr} />
                    </Toolbar>
                </AppBar>
                <Grid container className={useStyles.card} spacing={2}>
                    <Grid item xs={12}>
                        <CounterControl status ="active" label="Increment" clicked={this.props.onIncrement} />
                        <CounterControl status ={this.props.ctr <= 0 ? "disabled" : "active"} label="Decrement" clicked={this.props.onDecrement}  />
                        <CounterControl status ="active" label="Add" clicked={this.props.plusFive}  />
                        <CounterControl status ={this.props.ctr <= 4 ? "disabled" : "active"} label="Subtract" clicked={this.props.minusFive}  />
                    </Grid>
                </Grid>
                    <br></br>
                    <Button variant="contained" color="primary" onClick={() => this.props.storeResult(this.props.ctr)}>STORE RESULT</Button>
                    <br></br>

                    {this.props.strResult.map(strResults => {
                        return <Card key={strResults.id} onClick={() => this.props.deleteResult(strResults.id)}><CardContent><span>Result : </span>{strResults.value}</CardContent></Card>
                    })}
            </React.Fragment>
        );
    }
}

//get the states from reducer
const getStatesToProps = state => {
    return {
        ctr: state.ctr.counter,
        strResult: state.rst.results
    };
} 
//dispatch value to reducer
const mapDispatchtoProps = dispatch => {
    return {
        onIncrement: () => dispatch(actionCreator.increment()),
        onDecrement: () => dispatch(actionCreator.decrement(1)),
        plusFive: () => dispatch(actionCreator.fiveplus(5)),
        minusFive: () => dispatch(actionCreator.fiveminus(5)),
        storeResult: (count) => dispatch(actionCreator.store_result(count)),
        deleteResult: (id) => dispatch(actionCreator.delete_result(id))
    };
}

export default connect(getStatesToProps, mapDispatchtoProps)(Counter);