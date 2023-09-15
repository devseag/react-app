// import React from 'react';
import { Component, StrictMode } from 'react';
import './App.css';

const Header = () => {
	return <h2>Hello World!</h2>
}

// const Field = () => {
//     const holder = 'Enter here';
//     const styledField = {
//         width: '300px'
//     };
// 	// return <input placeholder="Type here" type="text" />
//     return <input 
//             placeholder={holder} 
//             type="text" 
//             style={styledField}/>
// }

// class Field extends React.Component {

// }

class Field extends Component {
    render() {
    const holder = 'Enter here';
    const styledField = {
        width: '300px'
    };

    return <input 
            placeholder={holder} 
            type="text" 
            style={styledField}/>
    }
}


function Btn() {
	const text = 'Log in';
	// const res = () => {
	// 	return 'Log in'
	// }
	// const p = <p>Log in</p>

	const logged = false;
    // if (logged) {

    // }

	// return <button>{text}</button>
	// return <button>{res()}</button>
	// return <button>{p}</button>

	// return <button>{logged ? 'Enter' : text}</button>
    return <button>{logged ? 'Enter' : text}</button>
}

function App() {
	return (
		<div className="App">
            <StrictMode>
                <Header/>
            </StrictMode>				
				<Field/>
				<Btn/>
		</div>
	);
}

export {Header};
export default App;
