// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//     <App/>,
//   document.getElementById('root')
// );

// import React from 'react';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function useCounter() {

	const [counter, setCounter] = useState(0);

	const incCounter = () => {
		if (counter < 50) {
		  setCounter(counter => counter + 1)
		}
	  }

	  const decCounter = () => {
		if (counter > -50) {
		  setCounter(counter => counter - 1)
		}
	  }

	  const rndCounter = () => {
		setCounter((Math.random() * (50 - -50) + -50).toFixed(0))
	  }

	  const resetCounter = () => {
		setCounter(0)
	  }

	  useEffect(() => {
		fetch('https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new')
			.then(res => res.text())
			.then(res => setCounter(+res))
			.catch(err => console.log(err))
	}, [])

	  return {
		counter,
		incCounter,
		decCounter,
		rndCounter,
		resetCounter
	  }
}

const Counter = (props) => {
//   const [counter, setCounter] = React.useState(props.counter);
const {counter, incCounter, decCounter, rndCounter, resetCounter} = useCounter(props.counter);

//   const incCounter = () => {
//     if (counter < 50) {
//       setCounter(counter => counter + 1)
//     }
//   }
	// counterC.incCounter();

	// const decCounter = () => {
	// 	if (counter > -50) {
	// 	  setCounter(counter => counter - 1)
	// 	}
	//   }

	// counterC.decCounter();


//   const rndCounter = () => {
//     setCounter(+(Math.random() * (50 - -50) + -50).toFixed(0))
//   }

	// counterC.rndCounter();

//   const resetCounter = () => {
//     setCounter(props.counter)
//   }

	// counterC.resetCounter();

	return (
		<div className="component">
		<div className="counter">{counter}</div>
		<div className="controls">
			<button onClick={incCounter}>INC</button>
			<button onClick={decCounter}>DEC</button>
			<button onClick={rndCounter}>RND</button>
			<button onClick={resetCounter}>RESET</button>
		</div>
		</div>
	)
}

const RndCounter = (props) => {
//   const [counter, setCounter] = React.useState(props.counter);
	const {counter, rndCounter, resetCounter} = useCounter(props.counter);

//   const rndCounter = () => {
//     setCounter((Math.random() * (50 - -50) + -50).toFixed(0))
//   }

	// counterR.rndCounter();

//   const resetCounter = () => {
//     setCounter(props.counter)
//   }

	// counterR.resetCounter();

	return (
		<div className="component">
		<div className="counter">{counter}</div>
		<div className="controls">
			<button onClick={rndCounter}>RND</button>
			<button onClick={resetCounter}>RESET</button>
		</div>
		</div>
	)
}

const App = () => {
  return (
      <>
          <Counter/>
          <RndCounter/>
      </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
