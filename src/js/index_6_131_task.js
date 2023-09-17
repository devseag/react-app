import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:  this.props.counter
        }
  }
  
  // Ispol'zujte tol'ko strelochnuju formu metodov
  // Pochemu? Podrobnyj otvet budet v sledujushhem uroke

  incCounter = () => {
    if (this.state.counter < 50) {
      this.setState(state => ({
        counter: state.counter + 1
      }))
    }
  }
  
  decCounter = () => {
    if (this.state.counter > -50) {
      this.setState(state => ({
        counter: state.counter - 1
      }))
    }
  }

  rndCounter = () => {
    this.setState({
      counter: +(Math.random() * (50 - -50) + -50).toFixed(0)
    })
  } 
    
    resetCounter = () => {
        this.setState(() => ({ // async operation, if we need accuracy => callback
            counter: this.props.counter
        }))
    }        


  render() {
    const {counter} = this.state;

    return (
        <div className="app">
          <div className="counter">{counter}</div>
          <div className="controls">
          <button onClick={this.incCounter}>INC</button>
          <button onClick={this.decCounter}>DEC</button>
          <button onClick={this.rndCounter}>RND</button>
          <button onClick={this.resetCounter}>RESET</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App counter={0}/>, document.getElementById('app'));

// 1) Nachal'noe znachenie schetchika dolzhno peredavat'sja cherez props
// 2) INC i DEC uvelichivajut i umen'shajut schetchik sootvetstvenno na 1. Bez ogranichenij, no mozhete dobavit' granicu v -50/50. Po dostizheniju granicy nichego ne proishodit
// 3) RND izmenjaet schetchik v sluchajnoe znachenie ot -50 do 50. Konstrukciju mozhete proguglit' za 20 sekund :) Ne zavisit ot predydushhego sostojanija
// 4) RESET sbrasyvaet schetchik v 0 ili v nachal'noe znachenie iz propsov. Vyberite odin iz variantov