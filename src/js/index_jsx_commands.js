import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const elem = <h2>Hello World!</h2>;

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World!');

// const element = {
//   type: 'h2',
//   props: {
//     className: 'greetings',
//     children: 'Hello, world'
//   }
// };

// const elem = (
//     <div>
//        <h2>Hello World!</h2>
//        <input type="text" />
//        <button/>
//     </div>
// );

const text = 'Hello World!'

const elem = (
  <div>
     <h2 className='text'>Text: {text} {2+2} {['2323', '232324sdfdf']}</h2> 
     {/* // Text: Hello World! 4 2323232324sdfdf // concat for arrarys */}
     {/* <h2>Text: {text} {2+2} {new Date()}</h2> // Objects are not valid as a React child */}
     <input type="text" />
     <label htmlFor=""></label>
     <button tabIndex="0">Click</button>
  </div>
);

ReactDOM.render(
  elem,
  document.getElementById('root')
);
