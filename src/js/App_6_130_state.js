import { Component } from 'react';

import './App.css';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++'
        }
    }

    nextYear = () => {
        // console.log('+++');
        // this.setState({
        //     // years: ++this.state.years //  Do not mutate state directly
        //     years: this.state.years + 1
        // })
        this.setState(state => ({ // async operation, if we need accuracy => callback
            years: state.years + 1
        }))
    }

    render() {
        const {name, surname, link} = this.props;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
                <a href={link}>My profile</a>
            </div>
        )
    }
}

function App() {
    return (
        <div className='App'>
            <WhoAmI name="John" surname="Smith" link="facebook.com" />
            <WhoAmI name="Alex" surname="Shepard" link="reddit.com" />            
        </div>
    )
}

export default App;