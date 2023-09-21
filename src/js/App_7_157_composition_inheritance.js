// import { Component, Fragment } from 'react';
import React, { Component } from 'react';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';

import './App.css';

const EmpItem = styled.div`
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);
    a {
        display: block;
        margin: 10px 0 10px 0;
        /* color: black; */
        color: ${props => props.active ? 'orange' : 'black'};
    }
    input {
        display: block;
        margin-top: 10px;
    }
`;

const Header = styled.h2`
    font-size: 22px;
`;

export const Button = styled.button`
    display: block;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgba(0,0,0, .2);
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

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
            // <>
            <EmpItem active>
            {/* <Fragment> */}
                {/* <button onClick={() => this.nextYear()}>+++</button> */}
                <Button onClick={this.nextYear}>+++</Button>                
                <Header>My name is {name}, surname - {surname}, 
                    age - {years}, 
                    position - {position}</Header>
                <a href={link}>My profile</a>
                <form>
                    <span>Type occupation</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
                </form>
            </EmpItem>                
            // {/* <div/> */}
            // </>
            // </Fragment>                            
        )
    }
}

// React.Fragment key="233"

const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
`;

const DynamicGreating = (props) => {
    return (
        <div className={'mb-3 p-3 border border-' + props.color}>
            {/* {props.children} */}
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
                })
            }
        </div>
    )
}

const HelloGreating = () => {
    return (
        <div style={{'width': '660px', 'margin': '0 auto'}}>
            <DynamicGreating color={'primary'}>
                <h2>Hello World!</h2>
            </DynamicGreating>
        </div>
    )
}

function App() {
    return (
        // <Fragment>
        // <div className='App'>
        <Wrapper>
            <HelloGreating/>
            {/* <DynamicGreating color={'primary'}>
                <h2>This weel was hard</h2>
                <h2>Hello World!</h2>
            </DynamicGreating> */}

            <BootstrapTest
                left = {
                    <DynamicGreating color={'primary'}>
                        <h2>This weel was hard</h2>
                        <h2>Hello World!</h2>
                    </DynamicGreating>
                }
                right = {
                    <DynamicGreating color={'primary'}>
                        <h2>RIGHT</h2>
                    </DynamicGreating>
                }
            />

            <WhoAmI name="John" surname="Smith" link="facebook.com" />
            <WhoAmI name="Alex" surname="Shepard" link="reddit.com" />            
        </Wrapper>
        // </div>
        // </Fragment>
        
    )
}

export default App;