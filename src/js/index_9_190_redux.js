import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// const initialState = 0;
const initialState = {value: 0};

// const reducer = (state, action) => {
//     if (action.type === "INC") {
//         return state + 1;
//     }
//     return 0;
// }

// const reducer = (state = 0, action) => {
//     switch (action.type) {
//         case "INC":
//             return state + 1;
//         case "DEC":
//             return state - 1;
//         case "RND":
//             return state * action.payload;                                 
//         default:
//             return state;
//     }
// }

// let state = reducer(initialState, {type: 'INC'});
// // let state = reducer(undefined, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});

// console.log(state);

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            return {
                ...state,
                value: state.value + 1
            };
        case "DEC":
            return {
                ...state,
                value: state.value - 1
            };
        case "RND":
            return {
                ...state,
                value: state.value * action.payload
            };
        default:
            return state;
    }
}


const store = createStore(reducer);

const update = () => {
    // document.getElementById('counter').textContent = store.getState();
    document.getElementById('counter').textContent = store.getState().value;
}

// store.subscribe(() => {
//     console.log(store.getState());
// })

store.subscribe(update);

// const inc = () => {
//     return {
//         type: 'INC'
//     }
// }

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = (value) => ({type: 'RND', payload: value});

document.getElementById('inc').addEventListener('click', () => {
    // store.dispatch({type: 'INC'});
    store.dispatch(inc())
});

document.getElementById('dec').addEventListener('click', () => {
    // store.dispatch({type: 'DEC'});
    store.dispatch(dec());
});

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    // store.dispatch({type: 'RND', payload: value});
    store.dispatch(rnd(value));
});

// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});


// let state = reducer(initialState, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// console.log(state);

// console.log('Hello Redux');



ReactDOM.render(
  <React.StrictMode>
    <>
    
    </>
  </React.StrictMode>,
  document.getElementById('root')
);