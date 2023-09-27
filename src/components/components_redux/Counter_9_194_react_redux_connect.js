import { Component } from "react";

import { connect } from "react-redux";
import * as actions from '../actions';
// import { bindActionCreators } from "redux";

class Counter extends Component {
    render() {
            const {counter, inc, dec, rnd} = this.props;
            return (
                <div className="jumbotron">
                    {/* <h1>{counter}{smth}</h1> */}
                    <h1>{counter}</h1>
                    <button onClick={dec} className="btn btn-primary">DEC</button>
                    <button onClick={inc} className="btn btn-primary">INC</button>
                    <button onClick={rnd} className="btn btn-primary">RND</button>
                </div>
            )
        }
    
}


// const Counter = ({counter, smth, inc, dec, rnd}) => {
// const Counter = ({counter, inc, dec, rnd}) => {    
//     return (
//         <div className="jumbotron">
//             {/* <h1>{counter}{smth}</h1> */}
//             <h1>{counter}</h1>
//             <button onClick={dec} className="btn btn-primary">DEC</button>
//             <button onClick={inc} className="btn btn-primary">INC</button>
//             <button onClick={rnd} className="btn btn-primary">RND</button>
//         </div>
//     )
// }

const mapStateToProps = (state) => {
    return {
        counter: state.value,
        // smth: state.foo
    }
}

// const mapDispatchToPros = (dispatch) => {

//     const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
//     return {
//         // inc: () => dispatch({type: 'INC'})
//         // inc: () => dispatch(inc()),
//         // dec: () => dispatch(dec()),
//         // rnd: () => {
//         //     const value = Math.floor(Math.random() * 10);
//         //     dispatch(rnd(value));
//         // }
//         inc,
//         dec,
//         // rnd: () => {
//         //     const value = Math.floor(Math.random() * 10);
//         //     rnd(value);
//         // }
//         rnd
//     }
// }

// const mapDispatchToPros = (dispatch) => {
//     return bindActionCreators(actions, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToPros)(Counter);

// const mapDispatchToPros = (dispatch) => {
//     return bindActionCreators(actions, dispatch)
// }

export default connect(mapStateToProps, actions)(Counter);