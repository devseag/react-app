import { Component } from "react";

import { connect, useSelector } from "react-redux";
import {inc, dec, rnd} from '../actions';
// import { bindActionCreators } from "redux";
import { UseSelector, useDispatch } from "react-redux";


const Counter = () => {   
    
    const counter = useSelector(state => state.counter);
    // const counter = useSelector(state => {
    //     counter: state.counter
    // });
    const dispatch = useDispatch();
    
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">DEC</button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">INC</button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary">RND</button>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         counter: state.value,
//     }
// }



// const mapDispatchToPros = (dispatch) => {
//     return bindActionCreators(actions, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToPros)(Counter);

// const mapDispatchToPros = (dispatch) => {
//     return bindActionCreators(actions, dispatch)
// }

// export default connect(mapStateToProps, actions)(Counter);
export default Counter;