// import { Component, Fragment } from 'react';
import { Component } from 'react';

import './App.css';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            position: ''
        }
        // this.nextYear = this.nextYear.bind(this);
    }

    nextYear = () => {
    // nextYear() {        
        // console.log('+++');
        // this.setState({
        //     // years: ++this.state.years //  Do not mutate state directly
        //     years: this.state.years + 1
        // })
        this.setState(state => ({ // async operation, if we need accuracy => callback
            years: state.years + 1 
        }))
    }

    commitInputChanges = (e, color) => {
        console.log(color);
        // console.log(e.target.value);
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const {name, surname, link} = this.props;
        const {position, years} = this.state;

        // console.log(this); 

        return (
            // <div>
            <>
            {/* <Fragment> */}
                {/* <button onClick={() => this.nextYear()}>+++</button> */}
                <button onClick={this.nextYear}>+++</button>                
                <h1>My name is {name}, surname - {surname}, 
                    age - {years}, 
                    position - {position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Type occupation</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
                </form>
            {/* <div/> */}
            </>
            // </Fragment>                            
        )
    }
}

// React.Fragment key="233"

function App() {
    return (
        // <Fragment>
        <div className='App'>
            <WhoAmI name="John" surname="Smith" link="facebook.com" />
            <WhoAmI name="Alex" surname="Shepard" link="reddit.com" />            
        </div>
        // </Fragment>
    )
}

export default App;