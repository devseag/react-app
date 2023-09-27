import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
// import {inc, dec, rnd} from './actions';
import * as actions from './actions';


const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;

const update = () => {
    document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// }

// const incDispatch = () =>  dispatch(inc());
// const decDispatch = () =>  dispatch(dec());
// const rndDispatch = (value) =>  dispatch(rnd(value));
// const incDispatch = bindActionCreator(inc, dispatch);
// const decDispatch = bindActionCreator(dec, dispatch);
// const rndDispatch = bindActionCreator(rnd, dispatch);

// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

// const {incDispatch, decDispatch, rndDispatch }= bindActionCreators({
//     incDispatch: inc,
//     decDispatch: dec,
//     rndDispatch: rnd
// }, dispatch);

// const {incDispatch, decDispatch, rndDispatch }= bindActionCreators({
//     inc: inc,
//     dec: dec,
//     rnd: rnd
// }, dispatch);

// const {incDispatch, decDispatch, rndDispatch }= bindActionCreators({
//     inc,
//     dec,
//     rnd
// }, dispatch);

const {inc, dec, rnd}= bindActionCreators(actions, dispatch);

// document.getElementById('inc').addEventListener('click', incDispatch);

// document.getElementById('dec').addEventListener('click', decDispatch);

// document.getElementById('rnd').addEventListener('click', () => {
//     const value = Math.floor(Math.random() * 10);
//     rndDispatch(value);
// });

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rnd(value);
});


ReactDOM.render(
  <React.StrictMode>
    <>
    
    </>
  </React.StrictMode>,
  document.getElementById('root')
);