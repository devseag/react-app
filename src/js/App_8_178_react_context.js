import {useState, memo, PureComponent, Component, useCallback, createContext } from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const dataContext = createContext({      
    mail: "name@example.com",
    text: 'some text'
});

const {Provider, Consumer} = dataContext;

// class Form extends Component {

//     shouldComponentUpdate(nextProps) {
//         if (this.props.mail.name === nextProps.mail.name) {
//             return false
//         } return true;
//     }

//     render() {

//         console.log('render');
    
//         return (
//             <Container>
//                 <form className="w-50 border mt-5 p-3 m-auto">
//                     <div className="mb-3">
//                         <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//                         <input value={this.props.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
//                         </div>
//                         <div className="mb-3">
//                         <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                         <textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                     </div>
//                 </form>
//             </Container>
//         )
//     }
// }

// class Form extends PureComponent {
//     render() {

//         console.log('render');
    
//         return (
//             <Container>
//                 <form className="w-50 border mt-5 p-3 m-auto">
//                     <div className="mb-3">
//                         <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//                         <input value={this.props.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
//                         </div>
//                         <div className="mb-3">
//                         <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                         <textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                     </div>
//                 </form>
//             </Container>
//         )
//     }
// }

// function propsCompare(prevPros, nextProps) {
//     // return prevPros.mail.name === nextProps.mail.name && prevPros.text === nextProps.text;
//     return prevPros.mail.name === nextProps.mail.name;
// }
//
//// const Form = memo((props) => {
////     console.log('render');
//
//     return (
//         <Container>
//             <form className="w-50 border mt-5 p-3 m-auto">
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//                     <input value={props.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
//                     </div>
//                     <div className="mb-3">
//                     <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                     <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                 </div>
//             </form>
//         </Container>
//     )
// }, propsCompare)

// function propsCompare(prevPros, nextProps) {
//     // return prevPros.mail.name === nextProps.mail.name && prevPros.text === nextProps.text;
//     return prevPros.mail.name === nextProps.mail.name;
// }

const Form = memo((props) => {
     console.log('render');

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    {/* <input value={props.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/> */}
                    {/* <InputComponent mail={props.mail}/> */}
                    <InputComponent/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
})

class InputComponent extends Component {

    static contextType = dataContext;
    
    render () {

        return (
            // <input value={this.props.mail} type="email" className='form-control' placeholder="name@example.com"/>
            // <Consumer>
            //     {
            //         value => {
            //             return (
            //                 <input 
            //                     value={value.mail} 
            //                     type="email" 
            //                     className='form-control' 
            //                     placeholder="name@example.com"/>
            //             )
            //         }
            //     }
            // </Consumer>
            <input 
                value={this.context.mail} 
                type="email" 
                className='form-control' 
                placeholder="name@example.com"/>
        )
    }
}

// InputComponent.contextType = dataContext;

// const dataContext = createContext({      
//     mail: "name@example.com",
//     text: 'some text'
// });

// console.dir(dataContext);

function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        // mail: {
        //     name: "name@example.com"
        // },
        text: 'some text'
    });

    // const onLog = useCallback(() => {
    //     console.log('wow')
    // }, []);

    return (
        // <>
        <Provider value={data}>
            {/* <Form mail={data.mail} text={data.text} onLog={() => console.log('wow')}/> */}
            {/* <Form mail={data.mail} text={data.text} onLog={onLog}/>*/}
            {/* <Form mail={data.mail} text={data.text}/>   */}
            <Form text={data.text}/>  
            <button 
                onClick={() => setData({
                    mail: "second@example.com",
                    // mail: {
                    //     name: "ame@example.com"
                    // },
                    text: 'another text'
                })}>
                Click me
            </button>
         {/* </> */}
        </Provider>
    );
}

export default App;

// import {useRef, useState, useEffect} from 'react';
// import {Container} from 'react-bootstrap';
// import './App.css';

// function useInputWidthValidate(inititalValue) {
//     const [value, setValue] = useState(inititalValue);

//     const onChange = event => {
//         setValue(event.target.value);
//     }

//     const validateInput = () => {
//         return value.search(/\d/) >= 0
//     }

//     return {value, onChange, validateInput} // return {value: value, onChange: onChange}
// }

// const Form = () => {
//     // const [text, setText] = useState('');
//     // const [textArea, setTextArea] = useState('');

//     const input = useInputWidthValidate('');
//     const textArea = useInputWidthValidate('');

//     // const validateInput = (text) => {
//     //     if (text.search(/\d/) >= 0) {
//     //         return true
//     //     } else {
//     //         return false
//     //     }
//     // }
//     // const validateInput = (text) => {
//     //     // text.search(/\d/) >= 0 ? true : false
//     //     // return text.search(/\d/) >= 0 ? true : false
//     //     return text.search(/\d/) >= 0
//     // }

//     // const color = validateInput(text) ? 'text-danger' : null;
//     const color = input.validateInput() ? 'text-danger' : null;

//     return (
//         <Container>
//             <form className="w-50 border mt-5 p-3 m-auto">
//                 <div className="mb-3">
//                     {/* <input value={text} type="text" className="form-control" readOnly/> */}
//                     {/* <input value={`${text} / ${textArea}`} type="text" className="form-control" readOnly/> */}
//                     <input value={`${input.value} / ${textArea.value}`} type="text" className="form-control" readOnly/>
//                     <label htmlFor="exampleFormControlInput1" className="form-label" mt-3>Email address</label>
//                     <input 
//                         // onChange={(e) => setText(e.target.value)} 
//                         onChange={input.onChange}
//                         type="email" 
//                         // value={text}
//                         value={input.value}
//                         className={`form-control ${color}`}
//                         id="exampleFormControlInput1" 
//                         placeholder="name@example.com"/>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                     <textarea
//                         // onChange={e => setTextArea(e.target.value)}
//                         onChange={textArea.onChange}
//                         value={textArea.value}
//                         className="form-control" 
//                         id="exampleFormControlTextarea1" 
//                         rows="3"></textarea>
//                 </div>
//             </form>
//         </Container>
//     )
// }

// function App() {
//     return (
//         <Form/>
//     );
// }

// export default App;
