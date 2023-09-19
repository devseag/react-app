import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './index.scss';
// import App from './components/app/app';
import App from './App';
import { Button } from './App';
import styled from 'styled-components';

// const BigButton = styled(Button)`
//     margin: 0 auto;
//     width: 245px;
// `;

const BigButton = styled(Button)`
    margin: 0 auto;
    width: 245px;
    text-align: center;
`;

ReactDOM.render(
  <React.StrictMode>
    <App/>
    {/* <BigButton>+++</BigButton> */}
    <BigButton as="a">Sent report</BigButton>
  </React.StrictMode>,
  document.getElementById('root')
);
