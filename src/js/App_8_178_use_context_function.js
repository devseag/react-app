import {useState } from 'react';
// , memo, PureComponent, Component, useCallback, createContext, useContext
// import {Container} from 'react-bootstrap';
import './App.css';
import Form from './Form';
import dataContext from './context';

const {Provider} = dataContext;



function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text',
        forceChangeMail: forceChangeMail
    });

    function forceChangeMail() {
        setData({...data, mail: 'test@gmail.com'})
    }

    return (
        // <>
        // <Provider value={data}>
        // <Provider> // Cannot read properties of undefined (reading 'mail')
        // <>
        <Provider value={data}>
         {/* <Provider value={{something: 'something'}}> // new object */}
            <Form text={data.text}/>  
            <button 
                onClick={() => setData({
                    mail: "second@example.com",
                    text: 'another text',
                    forceChangeMail: forceChangeMail
                })}>
                Click me
            </button>
        {/* </Provider> */}
        {/* </> */}
        </Provider>
    );
}

export default App;

